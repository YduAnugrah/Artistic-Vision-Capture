import logoImg from "@assets/AS_Logo-Photoroom_1779523342452.png";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-6">
          <img
            src={logoImg}
            alt="Archana Digital Studio"
            className="h-20 w-auto object-contain opacity-90"
          />
        </div>

        <p className="text-primary/80 font-serif italic text-lg mb-6 tracking-wide">
          Archana Digital Studio
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground font-light uppercase tracking-widest">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="w-24 h-[1px] bg-white/10 mx-auto mb-8" />

        <p className="text-muted-foreground/50 text-xs font-light tracking-wide">
          &copy; {new Date().getFullYear()} Archana Digital Studio. All rights reserved.<br />
          Crafted with passion for your most precious moments.
        </p>
      </div>
    </footer>
  );
}
