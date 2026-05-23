import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
  { src: "/portfolio-1.png", aspect: "aspect-[3/4]" },
  { src: "/portfolio-5.png", aspect: "aspect-[16/9]" },
  { src: "/portfolio-3.png", aspect: "aspect-[1/1]" },
  { src: "/portfolio-4.png", aspect: "aspect-[3/4]" },
  { src: "/portfolio-6.png", aspect: "aspect-[4/3]" },
  { src: "/portfolio-2.png", aspect: "aspect-[4/3]" },
  { src: "/portfolio-7.png", aspect: "aspect-[3/4]" },
  { src: "/portfolio-8.png", aspect: "aspect-[1/1]" },
];

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4">The Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
          Selected <span className="italic font-light">Works</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto font-light">
          A glimpse into our visual legacy. Every frame is graded, composed, and perfected.
        </p>
      </div>

      <div className="container mx-auto px-4">
        {/* Simple Masonry using Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group overflow-hidden cursor-pointer bg-card/20 break-inside-avoid`}
              onClick={() => setSelectedImg(img.src)}
            >
              <img 
                src={img.src} 
                alt={`Portfolio ${i+1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg}
              alt="Selected work"
              className="max-w-full max-h-full object-contain shadow-2xl shadow-primary/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
