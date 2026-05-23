export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-serif font-bold text-gradient-gold tracking-wider mb-6">
          Archana Studio
        </h2>
        
        <div className="flex justify-center space-x-6 mb-8 text-sm text-muted-foreground font-light uppercase tracking-widest">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="w-24 h-[1px] bg-white/10 mx-auto mb-8" />
        
        <p className="text-muted-foreground/50 text-xs font-light tracking-wide">
          &copy; {new Date().getFullYear()} Archana Digital Studio. All rights reserved.<br/>
          Designed for excellence.
        </p>
      </div>
    </footer>
  );
}
