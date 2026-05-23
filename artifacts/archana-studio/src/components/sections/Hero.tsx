import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/AS_Logo-Photoroom_1779523342452.png";

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050505]">

      {/* Deep radial gold glow — center */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_0%,_transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_60%)]" />
      </div>

      {/* Top-left corner accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-16 left-16 z-10 pointer-events-none hidden md:block"
      >
        <div className="w-20 h-20 border-t border-l border-primary/40" />
      </motion.div>

      {/* Top-right corner accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-16 right-16 z-10 pointer-events-none hidden md:block"
      >
        <div className="w-20 h-20 border-t border-r border-primary/40" />
      </motion.div>

      {/* Bottom-left corner accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-16 left-16 z-10 pointer-events-none hidden md:block"
      >
        <div className="w-20 h-20 border-b border-l border-primary/40" />
      </motion.div>

      {/* Bottom-right corner accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-16 right-16 z-10 pointer-events-none hidden md:block"
      >
        <div className="w-20 h-20 border-b border-r border-primary/40" />
      </motion.div>

      {/* Horizontal rule top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center z-10"
      />

      {/* Horizontal rule bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center z-10"
      />

      {/* Vertical rule left */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 1 }}
        className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent origin-top z-10 hidden md:block"
      />

      {/* Vertical rule right */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 1 }}
        className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent origin-top z-10 hidden md:block"
      />

      {/* Floating gold dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/50 z-10"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -10, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      {/* Main content */}
      <div className="container relative z-20 mx-auto px-6 text-center max-w-5xl pt-20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <img
            src={logoImg}
            alt="Archana Digital Studio"
            className="h-20 md:h-24 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 20px rgba(212,175,55,0.3))" }}
          />
        </motion.div>

        {/* Divider line with diamonds */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-primary/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
          <div className="w-2 h-2 rotate-45 border border-primary" />
          <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-primary/60" />
        </motion.div>

        {/* Studio tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-primary font-medium tracking-[0.35em] uppercase text-xs md:text-sm mb-6 block">
            Premium Photography & Videography
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-4"
        >
          Capturing Moments,
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-light mb-8"
          style={{
            background: "linear-gradient(135deg, #d4af37 0%, #f5e27d 40%, #c8961f 70%, #d4af37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Creating Memories
        </motion.h1>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/40" />
          <div className="w-1 h-1 rotate-45 bg-primary/60" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-base md:text-lg text-muted-foreground font-light mb-14 max-w-xl mx-auto leading-relaxed tracking-wide"
        >
          Elevating life's most important occasions into cinematic masterpieces.
          Premium photography and videography for those who refuse to settle for ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#portfolio")}
            className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90 rounded-none px-10 py-6 text-sm tracking-[0.2em] uppercase font-bold gold-glow"
          >
            View Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary rounded-none px-10 py-6 text-sm tracking-[0.2em] uppercase transition-all duration-300"
          >
            Book Now
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-muted-foreground/20 relative overflow-hidden">
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
