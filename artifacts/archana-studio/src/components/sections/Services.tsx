import { motion } from "framer-motion";
import { Camera, Video, Heart, PartyPopper, Aperture, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    icon: Heart,
    title: "Luxury Weddings",
    desc: "Complete cinematic coverage of your special day, capturing every emotion, tear, and joy with editorial precision."
  },
  {
    icon: Video,
    title: "Cinematic Films",
    desc: "High-end 4K video production creating a breathtaking documentary of your events, cut to the perfect rhythm."
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoots",
    desc: "Epic destination shoots designed to tell your unique love story before the vows are exchanged."
  },
  {
    icon: PartyPopper,
    title: "Event Coverage",
    desc: "Discreet, premium coverage for galas, high-society events, and corporate milestones."
  },
  {
    icon: Aperture,
    title: "Studio Portraits",
    desc: "Masterfully lit editorial and family portraits crafted within our private, fully-equipped darkroom atelier."
  },
  {
    icon: Smartphone,
    title: "Reels & Social",
    desc: "Vertical-first cinematic cuts optimized for immediate, stunning impact on Instagram and TikTok."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Services of <span className="italic font-light">Distinction</span>
          </h3>
          <div className="w-16 h-[1px] bg-primary mx-auto" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass-panel group hover:border-primary/50 transition-all duration-500 h-full bg-card/40 rounded-none border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 md:p-10 flex flex-col h-full relative z-10">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center border border-white/10 mb-8 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-500">
                    <service.icon className="text-primary w-6 h-6" />
                  </div>
                  
                  <h4 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="w-0 h-[1px] bg-primary mt-8 group-hover:w-full transition-all duration-700 ease-out" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
