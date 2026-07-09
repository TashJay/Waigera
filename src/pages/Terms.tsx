import { Link } from "react-router";
import { Car } from "lucide-react";

export default function Terms() {
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
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-display font-bold mb-8">Terms and Conditions</h1>
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>Last updated: July 2026</p>
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">1. Contractual Relationship</h2>
            <p>These Terms of Use ("Terms") govern the access or use by you, an individual, from within any country in the world of applications, websites, content, products, and services (the "Services") made available by Teddy Cabs. Please read these terms carefully before accessing or using the Services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. The Services</h2>
            <p>The Services constitute a technology platform that enables users of Teddy Cabs's mobile applications or websites provided as part of the Services to arrange and schedule transportation and/or logistics services with independent third party providers of such services, including independent third party transportation providers and independent third party logistics providers under agreement with Teddy Cabs or certain of Teddy Cabs's affiliates.</p>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. Payment</h2>
            <p>You understand that use of the Services may result in charges to you for the services or goods you receive from a Third Party Provider ("Charges"). After you have received services or goods obtained through your use of the Service, Teddy Cabs will facilitate your payment of the applicable Charges on behalf of the Third Party Provider as such Third Party Provider's limited payment collection agent. Payment of the Charges in such manner shall be considered the same as payment made directly by you to the Third Party Provider.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
