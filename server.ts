import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { getAdminDb } from "./src/lib/firebaseAdmin.js";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/calculateFare", async (req, res) => {
    try {
      const { pickupLat, pickupLng, dropoffLat, dropoffLng, vehicleTier } = req.body;
      
      if (!pickupLat || !pickupLng || !dropoffLat || !dropoffLng || !vehicleTier) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Google Maps Distance Matrix API
      const apiKey = process.env.GOOGLE_MAPS_PLATFORM_KEY;
      if (!apiKey) {
        throw new Error("GOOGLE_MAPS_PLATFORM_KEY is not configured");
      }

      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${pickupLat},${pickupLng}&destinations=${dropoffLat},${dropoffLng}&departure_time=now&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== "OK" || !data.rows[0].elements[0]) {
        throw new Error("Failed to calculate distance");
      }

      const element = data.rows[0].elements[0];
      if (element.status !== "OK") {
        throw new Error(`Distance matrix element error: ${element.status}`);
      }

      const distance_km = element.distance.value / 1000;
      // Use duration_in_traffic if available, otherwise fallback to normal duration
      const duration_min = Math.ceil((element.duration_in_traffic?.value || element.duration.value) / 60);

      // Fetch pricing config from Firestore
      const db = getAdminDb();
      let configDoc = await db.collection("pricing").doc("config").get();
      
      // Seed default config if it doesn't exist
      if (!configDoc.exists) {
        const defaultConfig = {
          base_fare: 100,
          per_km_rate: 45,
          per_min_rate: 4,
          booking_fee: 0,
          minimum_fare_by_tier: { standard: 250, premium: 350 }
        };
        await db.collection("pricing").doc("config").set(defaultConfig);
        configDoc = await db.collection("pricing").doc("config").get();
      }
      const config = configDoc.data()!;

      // Fetch demand levels
      let demandDoc = await db.collection("pricing").doc("demand").get();
      if (!demandDoc.exists) {
        await db.collection("pricing").doc("demand").set({ demand_level: 1.0 });
        demandDoc = await db.collection("pricing").doc("demand").get();
      }
      const demandData = demandDoc.data()!;
      
      // Calculate surge
      let surge_multiplier = demandData.demand_level || 1.0;
      surge_multiplier = Math.max(1.0, Math.min(2.5, surge_multiplier)); // Cap between 1.0x and 2.5x

      const base_fare = config.base_fare;
      const distance_charge = distance_km * config.per_km_rate;
      const time_charge = duration_min * config.per_min_rate;
      
      const subtotal = base_fare + distance_charge + time_charge;
      const surged_subtotal = subtotal * surge_multiplier;
      
      const minimum_fare = config.minimum_fare_by_tier[vehicleTier] || config.minimum_fare_by_tier.standard;
      
      let total_fare = Math.max(minimum_fare, surged_subtotal) + config.booking_fee;
      
      // Round to nearest KES 10
      total_fare = Math.round(total_fare / 10) * 10;
      
      res.json({
        distance_km: Number(distance_km.toFixed(2)),
        duration_min,
        base_fare,
        distance_charge: Number(distance_charge.toFixed(2)),
        time_charge: Number(time_charge.toFixed(2)),
        surge_multiplier,
        minimum_fare_applied: total_fare <= minimum_fare + config.booking_fee,
        booking_fee: config.booking_fee,
        total_fare,
        vehicle_tier: vehicleTier
      });
    } catch (error: any) {
      console.error("calculateFare error:", error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // M-Pesa Daraja API Mock Endpoint (for structure)
  app.post("/api/mpesa/stkpush", async (req, res) => {
    // Implement actual Daraja logic here
    // This requires consumer key, consumer secret, shortcode, passkey
    res.json({ message: "STK Push initiated successfully", status: "success" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
