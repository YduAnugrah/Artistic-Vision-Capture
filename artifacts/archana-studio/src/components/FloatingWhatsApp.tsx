import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      {/* Pulse effect */}
      <span className="absolute w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-75" style={{ animationDuration: '2s' }} />
    </motion.a>
  );
}
