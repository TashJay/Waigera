import { Link } from "react-router";
import { motion } from "motion/react";
import { Shield, Zap, MapPin, Car, Smartphone, DollarSign, Briefcase, ChevronRight, Navigation2, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <nav className="border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between z-10 sticky top-0 bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <Car className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-display font-semibold tracking-wide text-white">
              Teddy <span className="text-primary">Cabs</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
            <Link to="/business" className="hover:text-white transition-colors">Business</Link>
            <Link to="/safety" className="hover:text-white transition-colors">Safety</Link>
            <Link to="/help" className="hover:text-white transition-colors">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-text-secondary hover:text-white transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link to="/signup" className="text-sm font-medium bg-primary text-background px-4 py-2 rounded-full hover:bg-primary-light transition-colors">
            Join Now
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-8">
                <Zap className="w-3 h-3" />
                <span>The Premier Ride Experience in Kenya</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                Arrive in <span className="text-primary">Elegance</span>. <br />
                Travel with <span className="text-primary">Purpose</span>.
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-lg font-light">
                Experience the pinnacle of urban mobility. Professional chauffeurs, premium vehicles, and uncompromising security for your everyday journeys.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 rounded-xl hover:border-primary/50 transition-colors">
                  <Smartphone className="w-5 h-5 text-white" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-text-secondary uppercase">Download on the</span>
                    <span className="text-sm font-medium text-white leading-tight">App Store</span>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 rounded-xl hover:border-primary/50 transition-colors">
                  <Smartphone className="w-5 h-5 text-white" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-text-secondary uppercase">Get it on</span>
                    <span className="text-sm font-medium text-white leading-tight">Google Play</span>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="z-10"
            >
              <div className="bg-surface/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-display font-semibold mb-6">Where to?</h3>
                <div className="space-y-4 relative">
                  <div className="absolute left-[23px] top-[24px] bottom-[24px] w-0.5 bg-white/10"></div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    </div>
                    <input 
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
                      type="text" 
                      placeholder="Enter destination" 
                      className="w-full bg-background border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <Link to="/signup" className="mt-6 w-full flex items-center justify-center py-4 bg-primary text-background font-medium rounded-xl hover:bg-primary-light transition-colors text-lg">
                  See Prices
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-primary" />}
              title="Uncompromising Safety"
              description="Biometric authentication and real-time trip tracking ensure your peace of mind from pickup to drop-off."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Seamless Payments"
              description="Integrated directly with M-Pesa Daraja API for frictionless, instant mobile money transactions."
            />
            <FeatureCard 
              icon={<MapPin className="w-6 h-6 text-primary" />}
              title="Precise Navigation"
              description="Advanced routing technology gets you to your destination efficiently, avoiding traffic and delays."
            />
          </div>
        </section>

        {/* Ride Tiers */}
        <section className="py-24 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">A ride for every occasion</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">Choose the perfect vehicle for your journey, from everyday commutes to special events.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all group">
                <div className="h-40 flex items-center justify-center mb-6">
                  <Car className="w-24 h-24 text-text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-2 flex items-center justify-between">
                  Economy
                  <span className="text-sm bg-white/10 px-2 py-1 rounded text-text-secondary group-hover:text-white">1-4 Seats</span>
                </h3>
                <p className="text-text-secondary mb-6 h-12">Affordable, everyday rides for your daily commute.</p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <DollarSign className="w-4 h-4" /> Best Value
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-primary/10 to-surface rounded-2xl p-8 border border-primary/30 relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-background px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
                <div className="h-40 flex items-center justify-center mb-6">
                  <Car className="w-24 h-24 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-2 flex items-center justify-between text-primary">
                  Comfort
                  <span className="text-sm bg-primary/20 px-2 py-1 rounded text-primary">1-4 Seats</span>
                </h3>
                <p className="text-text-secondary mb-6 h-12">Newer cars with extra legroom and top-rated drivers.</p>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <Star className="w-4 h-4 text-primary" /> Top Rated Drivers
                </div>
              </div>
              
              <div className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all group">
                <div className="h-40 flex items-center justify-center mb-6">
                  <Car className="w-24 h-24 text-text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-2 flex items-center justify-between">
                  Premium XL
                  <span className="text-sm bg-white/10 px-2 py-1 rounded text-text-secondary group-hover:text-white">1-6 Seats</span>
                </h3>
                <p className="text-text-secondary mb-6 h-12">Spacious luxury SUVs for groups and extra luggage.</p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Briefcase className="w-4 h-4" /> Extra Space
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Driver Signup Section */}
        <section className="py-24 px-6 md:px-12 bg-primary text-background relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-background">Drive with Teddy Cabs</h2>
              <p className="text-xl mb-8 text-background/80 font-medium">
                Set your own schedule, earn competitive rates, and join a premium network of professional drivers.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold">Instant payouts via M-Pesa</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold">24/7 dedicated driver support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
                    <Car className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold">Access to corporate clients</span>
                </li>
              </ul>
              <Link to="/signup?role=driver" className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Apply to Drive <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 h-[400px] w-full bg-background/10 rounded-3xl border border-background/20 flex items-center justify-center">
              <div className="text-center p-8">
                <Car className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <p className="font-medium text-lg opacity-80">Driver App Preview</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Available across Kenya</h2>
            <p className="text-text-secondary text-lg mb-16 max-w-2xl mx-auto">Wherever your journey takes you, Teddy Cabs is there.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Kennol', 'Isiolo', 'Meru', 'Mombasa', 'Malindi', 'Murang\'a', 'Nyeri', 'Karatina'].map((city) => (
                <div key={city} className="p-4 border border-white/5 rounded-xl hover:bg-white/5 transition-colors font-medium">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 pt-16 pb-8 px-6 md:px-12 bg-background text-sm text-text-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <Car className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-display font-semibold tracking-wide text-white">
                Teddy <span className="text-primary">Cabs</span>
              </span>
            </div>
            <p className="mb-6">The premier ride experience in Kenya. Available via web preview: <a href="https://ais-dev-qgxvnyygpmqnstihuch475-851198367460.europe-west2.run.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Open Web App</a></p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-base">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><Link to="/business" className="hover:text-primary transition-colors">Teddy Cabs for Business</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-base">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Ride</a></li>
              <li><Link to="/signup?role=driver" className="hover:text-primary transition-colors">Drive</Link></li>
              <li><Link to="/safety" className="hover:text-primary transition-colors">Safety</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fare Estimate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-base">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p>© 2026 Teddy Cabs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">English (KE)</span>
            <span className="hover:text-white transition-colors cursor-pointer">KES</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-colors">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-display font-medium text-white">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
