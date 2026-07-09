import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { LogOut, Users, FileText, Settings, ShieldCheck, Car } from 'lucide-react';

export default function AdminDashboard() {
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

  if (profile.role !== 'admin') {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-white font-sans flex">
      <aside className="w-64 bg-surface border-r border-white/5 flex flex-col">
        <div className="p-6 flex items-center gap-2 border-b border-white/5">
          <img src="/teddylogo.png" alt="Teddy Cabs Logo" className="w-8 h-8 rounded object-cover" />
          <span className="text-xl font-display font-semibold tracking-wide">
            Teddy <span className="text-primary">Admin</span>
          </span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 text-primary">
            <Users className="w-5 h-5" />
            <span className="font-medium">Overview</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Driver Approvals</span>
            <span className="ml-auto w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">3</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
            <Car className="w-5 h-5" />
            <span className="font-medium">Active Rides</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
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

      <main className="flex-1 flex flex-col">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-surface/50 backdrop-blur-md">
          <h1 className="text-2xl font-display font-medium">Command Center</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium border border-primary/30">
              AD
            </div>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-surface rounded-xl p-6 border border-white/5">
              <h3 className="text-text-secondary font-medium mb-2">Total Users</h3>
              <p className="text-3xl font-display font-semibold">1,248</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <span>+12% this week</span>
              </div>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-white/5">
              <h3 className="text-text-secondary font-medium mb-2">Active Drivers</h3>
              <p className="text-3xl font-display font-semibold">142</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <span>+5% this week</span>
              </div>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-white/5">
              <h3 className="text-text-secondary font-medium mb-2">Daily Revenue</h3>
              <p className="text-3xl font-display font-semibold">KES 45.2K</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <span>+18% this week</span>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-xl border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5">
              <h2 className="text-xl font-display font-medium">Pending Driver Verifications</h2>
            </div>
            <div className="divide-y divide-white/5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Driver {i}</h4>
                      <p className="text-sm text-text-secondary">Submitted 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
                      Review Docs
                    </button>
                    <button className="px-4 py-2 bg-primary text-background rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
