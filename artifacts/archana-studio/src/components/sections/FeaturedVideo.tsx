import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function FeaturedVideo() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">Experience the <span className="italic font-light text-primary">Cinematic</span> Difference</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              Our films are crafted to evoke the true emotion of your event, utilizing industry-standard color grading and masterful composition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] group cursor-pointer"
          >
            {/* Dark Placeholder Image representing video thumbnail */}
            <img 
              src="/portfolio-5.png" 
              alt="Featured film" 
              className="w-full h-full object-cover filter brightness-[0.4] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-1000"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Glowing rings */}
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '2s' }} />
                
                {/* Play Button */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full glass-panel flex items-center justify-center border border-primary/30 text-primary group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500 z-10">
                  <Play size={32} className="ml-2 fill-primary" />
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
