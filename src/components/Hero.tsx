"use client"

import { ArrowUpRight, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { FlipWords } from "./ui/flipCard"
import { Link } from "react-router-dom";


const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  // Start blend after 30% scroll, complete by 80%
  const scrollThreshold = window.innerHeight * 0.5
  const scrollMax = window.innerHeight * 1.1
  const scrollProgress = Math.max(0, Math.min((scrollY - scrollThreshold) / (scrollMax - scrollThreshold), 1))

  const words = ["Resume", "PortFolio","AI Agent", "Elevator Pitch", "Personal Mentor","Mock Interviews"]

  return (
    <section className="relative min-h-[120vh] w-full flex items-center justify-center overflow-hidden" id="hero">
      {/* Blue gradient background that transitions to black after scroll threshold */}
      <div
        className="absolute inset-0 w-full h-full transition-all duration-200 ease-out"
        style={{
          background:
            scrollProgress === 0
              ? `linear-gradient(135deg,
                 #dbeafe 0%,
                #e0e7ff 25%,
                 #c7d2fe 50%,
                 #a5b4fc 75%,
                 #8b5cf6 100%)`
              : `linear-gradient(135deg,
                 hsl(${220 - scrollProgress * 40}, ${70 - scrollProgress * 30}%, ${94 - scrollProgress * 84}%) 0%,
                hsl(${230 - scrollProgress * 50}, ${65 - scrollProgress * 35}%, ${89 - scrollProgress * 79}%) 15%,
                hsl(${240 - scrollProgress * 60}, ${60 - scrollProgress * 40}%, ${82 - scrollProgress * 72}%) 70%,
                hsl(${250 - scrollProgress * 70}, ${55 - scrollProgress * 45}%, ${70 - scrollProgress * 60}%) 85%,
                hsl(${260 - scrollProgress * 80}, ${50 - scrollProgress * 45}%, ${30 - scrollProgress * 25}%) 95%,
                hsl(0, 0%, ${5 - scrollProgress * 5}%) 100%)`,
        }}
      />

      {/* Main content - positioned absolutely to occupy only 100vh centered */}
      <div className="absolute top-0 left-0 right-0 h-screen flex items-center justify-center z-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div
            className="flex flex-col items-center text-center max-w-7xl mx-auto transition-transform duration-100 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              opacity: Math.max(0.4, 1 - scrollProgress * 0.6),
            }}
          >
            {/* Outer box - largest with most padding */}
            <div
              className="border-white py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 shadow-2xl shadow-white/20 bg-white/10 backdrop-blur-sm"
              style={{ borderRadius: 80 }}
            >
              {/* Middle box - medium size */}
              <div
                className="border-white py-4 sm:py-6 md:py-7 lg:py-8 px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16 shadow-xl shadow-white/15 bg-white/15 backdrop-blur-md"
                style={{ borderRadius: 60 }}
              >
                {/* Inner box - smallest, contains content */}
                <div
                  className="border-white py-3 sm:py-4 md:py-5 lg:py-6 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 shadow-lg shadow-white/10 bg-white/20 backdrop-blur-lg m-2 sm:m-4 md:m-6 lg:m-8"
                  style={{ borderRadius: 40 }}
                >
                  <div className="m-2 sm:m-4 md:m-6 lg:m-8">
                    {/* Main Heading */}
                    <h1
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight opacity-0 animate-fade-in mb-2 transition-colors duration-300 z-40"
                      style={{
                        animationDelay: "0.3s",
                        color: scrollProgress > 0.6 ? "#ffffff" : "#111827",
                      }}
                    >
                      Land Interviews Faster.
                    </h1>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-600 dark:text-neutral-400">
                      Your
                      <FlipWords words={words} />
                     
                    </div>

                    {/* Description */}
                    <p
                      className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-0 animate-fade-in font-medium mb-4 max-w-4xl transition-colors duration-300 mt-2 mx-auto"
                      style={{
                        animationDelay: "0.5s",
                        color: scrollProgress > 0.6 ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      We make it easy. You make it happen.
                    </p>

                    {/* CTA Button */}
                    <div
                      className="flex flex-col sm:flex-row gap-2 opacity-0 animate-fade-in justify-center"
                      style={{ animationDelay: "0.7s" }}
                    >
                      <Link
  to="/book-call"
  className="flex items-center justify-center group w-full sm:w-auto text-center bg-gray-900 text-white hover:bg-black font-semibold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] text-base sm:text-lg"
>
  <Calendar className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
  Book Free Session
  <ArrowUpRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - only show when blend hasn't started */}
      <div
        className="absolute bottom-[150px] sm:bottom-[200px] left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300"
        style={{ opacity: scrollProgress === 0 ? 0.8 : 0 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-2 font-medium text-gray-600">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-800 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-gray-800 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    

      {/* Transition section for smooth blend to black section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-5"
        style={{
          background:
            scrollProgress === 0
              ? `linear-gradient(to bottom,
                 transparent 0%,
                rgba(139, 92, 246, 0.3) 20%,
                rgba(99, 102, 241, 0.5) 40%,
                rgba(67, 56, 202, 0.7) 60%,
                rgba(30, 27, 75, 0.85) 80%,
                rgba(0, 0, 0, 1) 100%)`
              : `linear-gradient(to bottom,
                transparent 0%,
                rgba(0, 0, 0, ${0.2 + scrollProgress * 0.3}) 20%,
                rgba(0, 0, 0, ${0.4 + scrollProgress * 0.4}) 40%,
                rgba(0, 0, 0, ${0.6 + scrollProgress * 0.3}) 60%,
                rgba(0, 0, 0, ${0.8 + scrollProgress * 0.2}) 80%,
                rgba(0, 0, 0, 1) 100%)`,
          backdropFilter: `blur(${1 + scrollProgress * 3}px)`,
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
    </section>
  )
}

export default Hero
