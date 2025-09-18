import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Flag, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");

    // wait a tick for the DOM to render the section
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }
}, [location]);



  const navItems = [
    { name: "Home", href: "/#Home" },
    { name: "Clients", href: "/#Clients" },
    { name: "About", href: "/#About" },
    { name: "Structure", href: "/#ProgressiveTimeline" },
    { name: "Services", href: "/#Services" },
    { name: "Testimonials", href: "/#Testimonials" },
    { name: "FAQ's", href: "/#FAQ" },
  ];

  const getTextColors = () => {
    if (location.pathname === "/") {
      // Home page → black before scroll, white after scroll
      return isScrolled
        ? {
            logoText: "text-white",
            navText: "text-white/80 hover:text-white",
            iconColor: "text-white",
          }
        : {
            logoText: "text-gray-900",
            navText: "text-gray-700 hover:text-gray-900",
            iconColor: "text-gray-900",
          };
    }

    if (location.pathname === "*") {
      // NotFound → always white
      return {
        logoText: "text-white",
        navText: "text-white/80 hover:text-white",
        iconColor: "text-white",
      };
    }

    // All other routes → always white
    return {
      logoText: "text-white",
      navText: "text-white/80 hover:text-white",
      iconColor: "text-white",
    };
  };

  const colors = getTextColors();

  return (
    <nav className="fixed top-4 left-0 right-0 z-[1000] flex justify-center items-start pointer-events-none">
      <div className="max-w-6xl md:w-full px-[7px]">
        {/* Desktop Navbar */}
        <div
          className={cn(
            "hidden md:flex items-center justify-between px-[7px] py-[7px] rounded-2xl transition-all duration-500 ease-out pointer-events-auto",
            isScrolled
              ? "backdrop-blur-2xl bg-black/20 border-white/20 shadow-2xl shadow-black/20"
              : "backdrop-blur-xl bg-white/5 border-white/10 shadow-none"
          )}
        >
        <Link to="/#Home" className="flex items-center">
  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
    <div className="w-5 h-5 bg-black rounded-sm"></div>
  </div>
  <span className={cn("font-bold text-xl transition-colors duration-500", colors.logoText)}>
    Mentorque
  </span>
</Link>


          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "transition-colors duration-500 font-medium text-sm",
                  colors.navText
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Request a Call Back */}
          <Link
            to="/book-call"
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium group transform hover:scale-[1.02] shadow-lg hover:shadow-xl",
              isScrolled
                ? "bg-white text-gray-900 hover:bg-gray-100"
                : "bg-gray-900 text-white hover:bg-black"
            )}
          >
            <Calendar
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
            <span>Request a Call Back</span>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div
          className={cn(
            "md:hidden flex items-center justify-end w-full px-4 rounded-2xl transition-all duration-500 ease-out pointer-events-auto",
            "backdrop-blur-2xl bg-black/10 border border-white/10 shadow-2xl shadow-black/20",
            isScrolled ? "bg-black/20 border-white/20" : ""
          )}
          style={{ minHeight: 52 }}
        >
          {/* Mobile Logo */}
          <Link to="/#Home" className="flex items-center mr-9">
  <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center mr-2.5">
    <div className="w-4 h-4 bg-black rounded-sm"></div>
  </div>
  <span className={cn("font-bold text-lg transition-colors duration-500", colors.logoText)}>
    Mentorque
  </span>
</Link>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 rounded-lg transition-colors duration-500 ml-9",
              colors.iconColor,
              isScrolled ? "hover:bg-white/10" : "hover:bg-black/10"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-[7px] rounded-2xl backdrop-blur-2xl bg-black/10 border border-white/10 shadow-2xl shadow-black/20 pointer-events-auto">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "transition-colors duration-500 font-medium py-2 px-2 rounded-lg",
                    colors.navText,
                    isScrolled ? "hover:bg-white/10" : "hover:bg-black/10"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/book-call"
                className={cn(
                  "flex items-center justify-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium group transform hover:scale-[1.02] shadow-lg hover:shadow-xl",
                  isScrolled
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-black"
                )}
              >
                <Flag
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
                <span>Book free slot</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
