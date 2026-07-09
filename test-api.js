import fetch from 'node-fetch';
const response = await fetch('http://localhost:3000/api/calculateFare', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    pickupLat: -1.2920659,
    pickupLng: 36.8219462,
    dropoffLat: -1.286389,
    dropoffLng: 36.817222,
    pickupLocation: 'Nairobi',
    dropoffLocation: 'Mombasa',
    vehicleTier: 'standard'
  })
});
const data = await response.json();
console.log(data);
