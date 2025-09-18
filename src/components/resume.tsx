"use client"

import { useState, useEffect, useRef } from "react"
import BeforeAfterSlider from "./BeforeAfterSlider"

export default function Resume() {
  const afterResume = "/before.jpeg"
  const beforeResume = "/after.jpeg"
  
  const [animatedValue, setAnimatedValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Smooth number animation
      const duration = 2500
      const steps = 60
      const increment = 80 / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= 80) {
          setAnimatedValue(80)
          clearInterval(timer)
        } else {
          setAnimatedValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  // Generate smooth curve points
  

  return (
    <div ref={sectionRef} className="bg-black py-12 px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Text */}
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl  text-white leading-tight">
            Crafted for <span className="text-blue-400">Success</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Resumes tailored by industry experts. Hyper-personalized to your goals. 
            Proven to deliver tangible results fast.
          </p>

          {/* Animated Stat - Bigger and Direct */}
          <div className="pt-8">
            {/* Large percentage display with integrated graph */}
            <div className="text-center lg:text-left relative">
              <div className="relative inline-block">
                <p className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-1500 ease-out"
                   style={{
                     transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                     opacity: isVisible ? 1 : 0,
                     transitionDelay: '0.5s'
                   }}>
                  {animatedValue}%
                </p>
                
                {/* Smooth curvy line integrated next to percentage */}
              
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mt-4 transition-all duration-1000 ease-out"
                 style={{
                   transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                   opacity: isVisible ? 1 : 0,
                   transitionDelay: '1s'
                 }}>
                improved resume response rate<br />
                <span className="text-blue-400 font-semibold">in 2 weeks</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Before/After Slider */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <BeforeAfterSlider
              before={beforeResume}
              after={afterResume}
              width={595}
              height={730}
            />
          </div>
        </div>

      </div>
    </div>
  )
}