
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Calendar } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-black/90 backdrop-blur-md shadow-sm border-b border-gray-800 glass-effect" 
          : "bg-black/50 backdrop-blur-sm"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Mentorque"
        >
          <div className="text-2xl font-bold text-white">
            Mentorque
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a 
            href="#" 
            className="relative text-white hover:text-gray-300 py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#about" className="relative text-white hover:text-gray-300 py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">About</a>
          <a href="#weeks" className="relative text-white hover:text-gray-300 py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Journey</a>
          <a 
            href="https://calendly.com/mentorque"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-button px-4 py-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </a>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-white p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out glass-overlay",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a 
            href="#" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-white/10 text-white transition-all duration-300" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-white/10 text-white transition-all duration-300" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            About
          </a>
          <a 
            href="#weeks" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-white/10 text-white transition-all duration-300" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Journey
          </a>
          <a 
            href="https://calendly.com/mentorque"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 glass-button px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
