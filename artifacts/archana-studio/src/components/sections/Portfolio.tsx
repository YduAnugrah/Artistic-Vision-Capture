import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import img10 from "@assets/10_1779520468155.jpg";
import img11 from "@assets/11_1779520468155.jpg";
import img12 from "@assets/12_1779520468155.jpg";
import img14 from "@assets/14_1779520468156.jpg";
import img15 from "@assets/15_1779520468156.jpg";
import img16 from "@assets/16_1779520468156.jpg";
import img17 from "@assets/17_1779520468156.jpg";
import img18 from "@assets/18_1779520468157.jpg";
import img19 from "@assets/19_1779520468157.jpg";
import img2  from "@assets/2_1779520468157.jpg";
import img20 from "@assets/20_1779520468157.jpg";
import img21 from "@assets/21_1779520468158.jpg";
import img22 from "@assets/22_1779520468158.jpg";
import img3  from "@assets/3_1779520468158.jpg";
import img4  from "@assets/4_1779520468158.jpg";
import img5  from "@assets/5_1779520468158.jpg";
import img6  from "@assets/6_1779520468159.jpg";
import img7  from "@assets/7_1779520468159.jpg";
import img9  from "@assets/9_1779520468159.jpg";

const IMAGES = [
  { src: img4,  alt: "Cinematic couple portrait" },
  { src: img14, alt: "Bridal close-up with peacock feather" },
  { src: img6,  alt: "Couple walking on smoke" },
  { src: img3,  alt: "Dramatic bridal silhouette" },
  { src: img11, alt: "Wedding ceremony" },
  { src: img20, alt: "Pre-wedding intimate moment" },
  { src: img15, alt: "Cinematic portrait in black" },
  { src: img12, alt: "Couple in grand wedding hall" },
  { src: img22, alt: "Ring ceremony close-up" },
  { src: img2,  alt: "Henna and jewellery detail" },
  { src: img7,  alt: "Couple portrait" },
  { src: img21, alt: "Couple smiling together" },
  { src: img16, alt: "Bridal jewellery and henna" },
  { src: img19, alt: "Couple in golden corridor" },
  { src: img5,  alt: "Couple at reception" },
  { src: img17, alt: "Groom portrait" },
  { src: img18, alt: "Bride portrait" },
  { src: img9,  alt: "Couple with marigold garlands" },
  { src: img10, alt: "Couple with pool reflection" },
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
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
              className="relative group overflow-hidden cursor-pointer bg-card/20 break-inside-avoid"
              onClick={() => setSelectedImg(img.src)}
              data-testid={`portfolio-image-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
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
              data-testid="button-close-lightbox"
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
