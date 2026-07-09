import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Car, Shield, MapPin, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading || !profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (profile.role === 'admin') {
    navigate('/admin');
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-white/5 flex flex-col">
        <div className="p-6 flex items-center gap-2 border-b border-white/5">
          <img src="/teddylogo.png" alt="Teddy Cabs Logo" className="w-8 h-8 rounded object-cover" />
          <span className="text-xl font-display font-semibold tracking-wide">
            Teddy <span className="text-primary">Cabs</span>
          </span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 text-primary">
            <Search className="w-5 h-5" />
            <span className="font-medium">Book a Ride</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">My Trips</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
            <User className="w-5 h-5" />
            <span className="font-medium">Profile</span>
          </a>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={signOut}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-surface/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-2xl font-display font-medium">Welcome, {profile.displayName || 'Guest'}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium border border-primary/30">
              {profile.displayName?.charAt(0).toUpperCase() || 'U'}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {profile.role === 'driver' && profile.status === 'pending' && (
            <div className="mb-8 p-6 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-4">
              <Shield className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Account Pending Verification</h3>
                <p className="text-text-secondary mb-4 text-sm">Please upload your driving license, vehicle registration, and insurance documents to start driving with Teddy Cabs.</p>
                <button className="px-4 py-2 bg-primary text-background text-sm font-medium rounded-lg hover:bg-primary-light transition-colors">
                  Upload Documents
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Map Placeholder */}
              <div className="h-96 rounded-2xl bg-surface border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Nairobi,Kenya&zoom=13&size=800x400&sensor=false')] bg-cover bg-center"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p className="text-text-secondary font-medium">Map Integration Ready</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-xl font-display font-medium mb-4">Recent Activity</h2>
                <div className="bg-surface rounded-xl border border-white/5 overflow-hidden">
                  <div className="p-4 border-b border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Car className="w-5 h-5 text-text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Westlands to Kilimani</p>
                        <p className="text-xs text-text-secondary">Today, 2:30 PM</p>
                      </div>
                    </div>
                    <span className="font-medium text-primary">KES 850</span>
                  </div>
                  <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Car className="w-5 h-5 text-text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">CBD to Karen</p>
                        <p className="text-xs text-text-secondary">Yesterday, 9:15 AM</p>
                      </div>
                    </div>
                    <span className="font-medium text-primary">KES 1,200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-8">
              <div className="bg-surface rounded-xl border border-white/5 p-6">
                <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-white/10 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center">
                      <span className="text-green-500 font-bold text-xs">M</span>
                    </div>
                    <span className="font-medium">M-Pesa</span>
                  </div>
                  <span className="text-sm text-text-secondary">0712 *** 890</span>
                </div>
                <button className="w-full py-3 rounded-lg border border-dashed border-white/20 text-text-secondary hover:text-white hover:border-white/40 transition-colors text-sm font-medium">
                  + Add Payment Method
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
