import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIERS = [
  {
    name: "Silver Edit",
    price: "₹85,000",
    desc: "Essential coverage for intimate gatherings.",
    features: [
      "1 Lead Photographer",
      "1 Cinematic Videographer",
      "Candid & Traditional Coverage",
      "5-7 Min Cinematic Highlight Reel",
      "Premium Leather Photobook (40 sheets)",
      "High-Res Edited Digitals"
    ],
    highlight: false,
  },
  {
    name: "Gold Collection",
    price: "₹1,50,000",
    desc: "The complete premium wedding experience.",
    features: [
      "2 Lead Photographers",
      "2 Cinematic Videographers",
      "Drone Aerial Coverage",
      "Pre-Wedding Shoot Included",
      "7-10 Min Cinematic Film + Full Doc",
      "2 Premium Leather Photobooks",
      "Same-Day Edit Teaser"
    ],
    highlight: true,
  },
  {
    name: "Diamond Legacy",
    price: "₹2,50,000+",
    desc: "Bespoke luxury for grand celebrations.",
    features: [
      "Full Master Team (Photo & Video)",
      "Multi-Day Event Coverage",
      "Director's Cut Film",
      "Luxury Handcrafted Album Suite",
      "Live Streaming Services",
      "Immediate Next-Day Highlights",
      "Lifetime Cloud Archive"
    ],
    highlight: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Curated <span className="italic font-light">Collections</span>
          </h3>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Transparent pricing for uncompromising quality. Every collection is customizable to fit the distinct vision of your celebration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {TIERS.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative ${tier.highlight ? 'lg:-mt-8 lg:mb-8 z-10' : 'z-0'}`}
            >
              <div 
                className={`h-full flex flex-col p-8 md:p-10 bg-card/40 backdrop-blur-sm border transition-all duration-500 rounded-none
                  ${tier.highlight 
                    ? 'border-primary/50 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-gradient-to-b from-card/80 to-[#1a1508]/80' 
                    : 'border-white/5 hover:border-white/20'}`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest py-1 px-4">
                    Most Requested
                  </div>
                )}
                
                <h4 className="text-2xl font-serif text-foreground mb-2">{tier.name}</h4>
                <p className="text-muted-foreground text-sm font-light h-10">{tier.desc}</p>
                
                <div className="my-8 pb-8 border-b border-white/10">
                  <span className="text-4xl font-serif text-primary">{tier.price}</span>
                  <span className="text-muted-foreground text-sm ml-2 font-light">onwards</span>
                </div>

                <ul className="space-y-4 flex-grow mb-8">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground/80 font-light">
                      <Check size={16} className="text-primary mr-3 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full rounded-none py-6 uppercase tracking-wide text-sm font-medium transition-all duration-300
                    ${tier.highlight 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 gold-glow' 
                      : 'bg-transparent border border-white/20 text-foreground hover:bg-white/5'}`}
                >
                  Inquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
