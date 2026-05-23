import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="/portfolio-2.png" 
                alt="Golden hour portrait" 
                className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-primary/30 -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-primary/10 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4">The Atelier</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                Mastery in <br />
                <span className="italic text-muted-foreground font-light">Light & Shadow</span>
              </h3>
            </div>
            
            <div className="glass-panel p-8 md:p-10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Archana Digital Studio is not just a photography service; it is a premium boutique dedicated to the art of cinematic storytelling. We believe that every moment has a pulse, a rhythm, and a specific light that deserves to be immortalized.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                With over a decade of high-end editorial and wedding experience, our team approaches every event with the meticulous eye of a film director. We don't just take pictures—we craft legacies.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                <div>
                  <h4 className="text-3xl font-serif text-primary mb-2">500+</h4>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Weddings Crafted</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-primary mb-2">12</h4>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
