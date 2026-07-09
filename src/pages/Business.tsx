import { Link } from "react-router";
import { Car, Briefcase, BarChart, Users, CreditCard } from "lucide-react";

export default function Business() {
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
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Teddy Cabs for Business</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Move your team with ease</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Manage employee travel, track expenses, and ensure safe, reliable transportation for your business across Kenya.
          </p>
          <button className="bg-primary text-background px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-light transition-colors">
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Simplify corporate travel</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Centralized Billing</h4>
                  <p className="text-text-secondary">Charge rides directly to the company account. No more reimbursements or expense reports.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Detailed Reporting</h4>
                  <p className="text-text-secondary">Access comprehensive analytics and trip data to manage your transportation budget effectively.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Employee Management</h4>
                  <p className="text-text-secondary">Easily add or remove employees, set ride limits, and control travel policies.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-surface rounded-2xl p-8 border border-white/5 h-[500px] flex items-center justify-center">
            <div className="text-center">
              <Briefcase className="w-16 h-16 text-primary/50 mx-auto mb-4" />
              <p className="text-text-secondary">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
