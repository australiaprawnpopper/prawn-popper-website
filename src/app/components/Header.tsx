import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Prawn Popper" className="h-24 md:h-28" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-[var(--brand-navy)] hover:text-[var(--brand-orange)] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("why-join")}
            className="text-[var(--brand-navy)] hover:text-[var(--brand-orange)] transition-colors"
          >
            Why Join
          </button>
          <button
            onClick={() => scrollToSection("support")}
            className="text-[var(--brand-navy)] hover:text-[var(--brand-orange)] transition-colors"
          >
            Support
          </button>
          <button
            onClick={() => scrollToSection("apply")}
            className="bg-[var(--brand-orange)] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Apply Now
          </button>
        </nav>

        <button
          onClick={() => scrollToSection("apply")}
          className="md:hidden bg-[var(--brand-orange)] text-white px-5 py-2 rounded-full"
        >
          Apply
        </button>
      </div>
    </motion.header>
  );
}