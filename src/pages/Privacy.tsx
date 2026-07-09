import { Link } from "react-router";
import { Car } from "lucide-react";

export default function Privacy() {
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
        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>Last updated: July 2026</p>
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">1. Data Collection</h2>
            <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), and other information you choose to provide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. Use of Information</h2>
            <p>We may use the information we collect about you to provide, maintain, and improve our services, including, for example, to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support, develop safety features, authenticate users, and send product updates and administrative messages.</p>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. Sharing of Information</h2>
            <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With Drivers to enable them to provide the Services you request. For example, we share your name, photo (if you provide one), average User rating given by Drivers, and pickup and/or drop-off locations with Drivers.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
