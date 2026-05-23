import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import FeaturedVideo from "@/components/sections/FeaturedVideo";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FeaturedVideo />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
