import { useEffect, useRef, useState } from 'react';
import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Navigation2, Loader2 } from 'lucide-react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY || '';

function EstimatorForm() {
  const placesLib = useMapsLibrary('places');
  const pickupInputRef = useRef<HTMLInputElement>(null);
  const dropoffInputRef = useRef<HTMLInputElement>(null);
  
  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropoffAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const [pickupLocation, setPickupLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<google.maps.LatLngLiteral | null>(null);
  
  const [vehicleTier, setVehicleTier] = useState<'standard' | 'premium'>('standard');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!placesLib || !pickupInputRef.current || !dropoffInputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address'],
      componentRestrictions: { country: 'ke' }
    };

    pickupAutocompleteRef.current = new placesLib.Autocomplete(pickupInputRef.current, options);
    dropoffAutocompleteRef.current = new placesLib.Autocomplete(dropoffInputRef.current, options);

    pickupAutocompleteRef.current.addListener('place_changed', () => {
      const place = pickupAutocompleteRef.current?.getPlace();
      if (place?.geometry?.location) {
        setPickupLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        });
      }
    });

    dropoffAutocompleteRef.current.addListener('place_changed', () => {
      const place = dropoffAutocompleteRef.current?.getPlace();
      if (place?.geometry?.location) {
        setDropoffLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        });
      }
    });
  }, [placesLib]);

  const handleEstimate = async () => {
    if (!pickupLocation || !dropoffLocation) {
      setError("Please select both pickup and dropoff locations from the dropdown");
      return;
    }
    
    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/calculateFare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pickupLat: pickupLocation.lat,
          pickupLng: pickupLocation.lng,
          dropoffLat: dropoffLocation.lat,
          dropoffLng: dropoffLocation.lng,
          vehicleTier
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to calculate fare");
      }
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface/90 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl">
      <h3 className="text-2xl font-display font-semibold mb-6 text-white">Get a fare estimate</h3>
      <div className="space-y-4 relative">
        <div className="absolute left-[23px] top-[24px] bottom-[24px] w-0.5 bg-white/10"></div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
          </div>
          <input 
            ref={pickupInputRef}
            type="text" 
            placeholder="Enter pickup location" 
            className="w-full bg-background border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <Navigation2 className="w-4 h-4 text-primary" />
          </div>
          <input 
            ref={dropoffInputRef}
            type="text" 
            placeholder="Enter destination" 
            className="w-full bg-background border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <label className="flex-1 cursor-pointer">
          <input 
            type="radio" 
            name="tier" 
            value="standard"
            checked={vehicleTier === 'standard'}
            onChange={() => setVehicleTier('standard')}
            className="sr-only peer"
          />
          <div className="text-center py-3 rounded-xl border border-white/10 peer-checked:border-primary peer-checked:bg-primary/10 transition-colors">
            <div className="font-medium text-white">Standard</div>
            <div className="text-xs text-text-secondary">Everyday rides</div>
          </div>
        </label>
        <label className="flex-1 cursor-pointer">
          <input 
            type="radio" 
            name="tier" 
            value="premium"
            checked={vehicleTier === 'premium'}
            onChange={() => setVehicleTier('premium')}
            className="sr-only peer"
          />
          <div className="text-center py-3 rounded-xl border border-white/10 peer-checked:border-primary peer-checked:bg-primary/10 transition-colors">
            <div className="font-medium text-white">Premium</div>
            <div className="text-xs text-text-secondary">More space</div>
          </div>
        </label>
      </div>

      <button 
        onClick={handleEstimate}
        disabled={loading}
        className="mt-6 w-full flex items-center justify-center py-4 bg-primary text-background font-medium rounded-xl hover:bg-primary-light transition-colors text-lg disabled:opacity-70"
      >
        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "See Prices"}
      </button>

      {error && (
        <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6 p-6 rounded-xl bg-background border border-white/10">
          <div className="flex justify-between items-end mb-2">
            <div>
              <div className="text-sm text-text-secondary mb-1">Estimated Fare</div>
              <div className="text-3xl font-display font-bold text-white">
                KES {Math.round(result.total_fare * 0.9)} - {Math.round(result.total_fare * 1.1)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-text-secondary mb-1">Trip Time</div>
              <div className="text-lg font-medium text-white">~{result.duration_min} mins</div>
            </div>
          </div>
          
          {result.surge_multiplier > 1.0 && (
            <div className="mt-2 text-xs font-medium text-orange-400">
              {result.surge_multiplier}x demand pricing currently active
            </div>
          )}
          
          <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-text-secondary leading-relaxed">
            Estimate only. Final fare may vary based on traffic, route, and demand at time of booking.
          </div>
        </div>
      )}
    </div>
  );
}

export default function FareEstimator() {
  if (!API_KEY) {
    return (
      <div className="bg-surface/80 p-8 rounded-3xl border border-white/10 text-center">
        <h3 className="text-xl font-medium text-white mb-2">API Key Required</h3>
        <p className="text-sm text-text-secondary mb-4">Please configure your Google Maps API key to use the fare estimator.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY} version="weekly">
      <EstimatorForm />
    </APIProvider>
  );
}
