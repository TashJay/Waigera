import { Link } from "react-router";
import { Car, Shield, Eye, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Safety() {
  return (
    <div className="min-h-screen bg-background font-sans text-white">
      <nav className="border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between z-10 sticky top-0 bg-background/80 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2">
          <img src="/teddylogo.png" alt="Teddy Cabs Logo" className="w-8 h-8 rounded object-cover" />
          <span className="text-xl font-display font-semibold tracking-wide text-white">
            Teddy <span className="text-primary">Cabs</span>
          </span>
        </Link>
      </nav>
      <main className="max-w-5xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Your Safety is Our Priority</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            From comprehensive background checks to real-time tracking, we've built safety into every aspect of the Teddy Cabs experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface p-8 rounded-2xl border border-white/5">
            <Shield className="w-10 h-10 text-primary mb-6" />
            <h2 className="text-2xl font-medium mb-4">Driver Verification</h2>
            <p className="text-text-secondary leading-relaxed">
              Every driver on our platform undergoes a rigorous screening process, including comprehensive background checks, vehicle inspections, and in-person interviews before they are approved to drive.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5">
            <MapPin className="w-10 h-10 text-primary mb-6" />
            <h2 className="text-2xl font-medium mb-4">Real-Time Trip Sharing</h2>
            <p className="text-text-secondary leading-relaxed">
              Share your trip status and location in real-time with family and friends. They can track your ride from start to finish on a live map, giving both you and them peace of mind.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5">
            <Phone className="w-10 h-10 text-primary mb-6" />
            <h2 className="text-2xl font-medium mb-4">Emergency Assistance</h2>
            <p className="text-text-secondary leading-relaxed">
              Access emergency assistance directly from the app. A dedicated SOS button connects you immediately to local authorities and our 24/7 incident response team.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5">
            <Eye className="w-10 h-10 text-primary mb-6" />
            <h2 className="text-2xl font-medium mb-4">Biometric Authentication</h2>
            <p className="text-text-secondary leading-relaxed">
              We employ advanced biometric verification to ensure that the driver behind the wheel matches the approved profile, adding an extra layer of security to every ride.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
