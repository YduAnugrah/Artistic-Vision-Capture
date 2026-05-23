import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Rohan & Priya",
    type: "Destination Wedding",
    text: "Archana Studio didn't just take photos; they captured the very soul of our wedding. Looking at the album feels like stepping back into the magic of that day. Pure cinematic brilliance.",
    stars: 5,
  },
  {
    name: "Aditya Verma",
    type: "Corporate Gala",
    text: "The level of professionalism and the luxury finish of the final video was beyond our expectations. They are true masters of light and pacing.",
    stars: 5,
  },
  {
    name: "Meera & Siddharth",
    type: "Pre-Wedding Shoot",
    text: "We wanted something moody, elegant, and timeless. The team delivered a masterpiece. Every frame belongs in a high-end fashion magazine.",
    stars: 5,
  },
  {
    name: "The Kapoor Family",
    type: "Anniversary Event",
    text: "From the initial consultation to the final delivery, the experience was strictly premium. They blended into the crowd yet captured every crucial second perfectly.",
    stars: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Words of Praise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Client <span className="italic font-light">Legacies</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="glass-panel border-white/5 h-full rounded-none bg-card/30 hover:bg-card/50 transition-colors duration-300">
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex text-primary mb-6 space-x-1">
                    {[...Array(t.stars)].map((_, idx) => (
                      <Star key={idx} size={16} className="fill-primary" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl font-serif italic text-muted-foreground mb-8 flex-grow leading-relaxed">
                    "{t.text}"
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <h5 className="text-foreground font-medium uppercase tracking-wider text-sm">{t.name}</h5>
                    <p className="text-primary text-sm mt-1">{t.type}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
