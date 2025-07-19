"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Flag, Calendar } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#Home" },
    { name: "Clients", href: "#Clients" },
    { name: "About", href: "#About" },
    { name: "Services", href: "#services" },
    { name: "Testemonials", href: "#Testemonials" },
    { name: "FAQ's", href: "#FAQ" },
  ]

  // Dynamic color classes based on background
  const getTextColors = () => {
    if (isScrolled) {
      // Darker background when scrolled - use lighter text
      return {
        logoText: "text-white",
        navText: "text-white/80 hover:text-white",
        buttonText: "text-white",
        buttonBg: "bg-white/15 hover:bg-white/25 border-white/30 hover:border-white/40",
        iconColor: "text-white",
      }
    } else {
      // Lighter background when at top - use darker text for better contrast
      return {
        logoText: "text-gray-900",
        navText: "text-gray-700 hover:text-gray-900",
        buttonText: "text-gray-900",
        buttonBg: "bg-white/20 hover:bg-white/30 border-gray-300/40 hover:border-gray-400/50",
        iconColor: "text-gray-900",
      }
    }
  }

  const colors = getTextColors()

  return (
    <nav className="fixed top-4 left-0 right-0 z-[1000] flex justify-center items-start pointer-events-none ">
      <div className="max-w-6xl md:w-full px-[7px]">
        {/* Desktop Navbar */}
        <div
          className={cn(
            "hidden md:flex items-center justify-between px-[7px] py-[7px] rounded-2xl transition-all duration-500 ease-out pointer-events-auto",
            "backdrop-blur-2xl bg-black/10 border border-white/10",
            "shadow-2xl shadow-black/20",
            isScrolled ? "bg-black/20 border-white/20" : "",
          )}
          style={{ minHeight: 52 }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <div className="w-5 h-5 bg-black rounded-sm"></div>
            </div>
            <span className={cn("font-bold text-xl transition-colors duration-500", colors.logoText)}>Mentorque</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn("transition-colors duration-500 font-medium text-sm", colors.navText)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Preview Button */}
          <a
            href="https://calendly.com/mentorquedu-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium group transform hover:scale-[1.02] shadow-lg hover:shadow-xl",
              isScrolled ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-black",
            )}
          >
            <Calendar size={18} className="transition-transform group-hover:translate-x-0.5" />
            <span>Request a Call Back</span>
          </a>
        </div>

        {/* Mobile Navbar */}
        <div
          className={cn(
            "md:hidden flex items-center justify-end w-full px-4  rounded-2xl transition-all duration-500 ease-out pointer-events-auto",
            "backdrop-blur-2xl bg-black/10 border border-white/10",
            "shadow-2xl shadow-black/20",
            isScrolled ? "bg-black/20 border-white/20" : "",
          )}
          style={{ minHeight: 52 }}
        >
          {/* Mobile Logo */}
          <div className="flex items-center mr-9">
            <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center mr-2.5">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <span className={cn("font-bold text-lg transition-colors duration-500", colors.logoText)}>Mentorque</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 rounded-lg transition-colors duration-500 ml-9",
              colors.iconColor,
              isScrolled ? "hover:bg-white/10" : "hover:bg-black/10",
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
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "transition-colors duration-500 font-medium py-2 px-2 rounded-lg",
                    colors.navText,
                    isScrolled ? "hover:bg-white/10" : "hover:bg-black/10",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Preview Button */}
              <a
                href="https://calendly.com/mentorquedu-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium group transform hover:scale-[1.02] shadow-lg hover:shadow-xl",
                  isScrolled ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-black",
                )}
              >
                <Flag size={16} className="transition-transform group-hover:translate-x-0.5" />
                <span>Book free slot</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
