import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/4_1779520468158.jpg";
import logoImg from "@assets/AS_Logo_1779520468154.png";

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 z-0" />
        
        {/* Cinematic hero background photo */}
        <img
          src={heroBg}
          alt="Cinematic couple portrait"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Animated Particles (CSS representation) */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2Q0YWYzNyIvPjwvc3ZnPg==')] animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
            Archana Digital Studio
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6"
        >
          Capturing Moments,<br />
          <span className="text-gradient-gold italic font-light">Creating Memories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Elevating life's most important occasions into cinematic masterpieces. 
          Premium photography and videography for those who refuse to settle for ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button 
            size="lg" 
            onClick={() => scrollTo("#portfolio")}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-lg tracking-wide uppercase gold-glow"
          >
            View Portfolio
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 rounded-none px-8 py-6 text-lg tracking-wide uppercase transition-all duration-300"
          >
            Book Now
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-muted-foreground/30 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ["0%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
