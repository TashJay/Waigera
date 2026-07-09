import { Link } from "react-router";
import { Car, Mail, Phone, MessageCircle } from "lucide-react";

export default function Help() {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">How can we help?</h1>
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for answers..."
              className="w-full bg-surface border border-white/10 rounded-full py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Call Support</h3>
            <p className="text-text-secondary mb-4">Available 24/7 for urgent matters.</p>
            <span className="text-primary font-medium">+254 700 000 000</span>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Email Us</h3>
            <p className="text-text-secondary mb-4">Get answers within 24 hours.</p>
            <span className="text-primary font-medium">support@teddycabs.com</span>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-primary/50 transition-colors cursor-pointer">
            <MessageCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Live Chat</h3>
            <p className="text-text-secondary mb-4">Chat with our support team instantly.</p>
            <span className="text-primary font-medium">Start Chat</span>
          </div>
        </div>

        <h2 className="text-2xl font-medium mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I pay with M-Pesa?",
              a: "You can pay directly from the app using our M-Pesa Daraja integration. Simply select M-Pesa as your payment method before confirming your ride, and a payment prompt will be sent to your phone."
            },
            {
              q: "What happens if I leave an item in the car?",
              a: "If you leave an item in the car, you can contact the driver directly through the app up to 24 hours after the trip ends. Alternatively, reach out to our support team and we will help you retrieve your item."
            },
            {
              q: "How is the fare calculated?",
              a: "Fares are calculated based on a base rate, time elapsed, and distance traveled. The estimated fare shown before booking gives you a clear idea of the final cost."
            },
            {
              q: "Can I schedule a ride in advance?",
              a: "Yes, you can schedule a ride up to 30 days in advance. Just tap the 'Schedule' icon next to the 'Where to?' box and select your preferred date and time."
            },
            {
              q: "How do I become a driver?",
              a: "To become a driver, click on 'Drive' in the footer, submit your details, and upload the required documents (ID, driving license, vehicle registration). Our team will review your application within 48 hours."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-surface border border-white/5 p-6 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
              <h3 className="font-medium text-lg mb-2">{faq.q}</h3>
              <p className="text-text-secondary">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
