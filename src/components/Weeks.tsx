"use client"

import { useState, useEffect, useRef } from "react"

// Custom responsive image component that handles both vertical and horizontal images
function ResponsiveImage({ src, alt, className, priority = false, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })
  const [isVertical, setIsVertical] = useState(true)

  const handleImageLoad = (e) => {
    const img = e.target
    const { naturalWidth, naturalHeight } = img
    setImageDimensions({ width: naturalWidth, height: naturalHeight })
    setIsVertical(naturalHeight > naturalWidth)
    setIsLoaded(true)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800/30 animate-pulse rounded-2xl" />
      )}
      <img
        src={hasError ? "" : src}
        alt={alt}
        className={`max-w-full max-h-full object-contain rounded-2xl shadow-2xl transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${className}`}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleImageLoad}
        onError={() => {
          setHasError(true)
          setIsLoaded(true)
        }}
        {...props}
      />
    </div>
  )
}

const scrollSections = [
  {
    id: 1,
    title: "Crafted For Success",
    content:
      "Engineered by  industry experts. Hyper-personalized to your goals. Proven to deliver tangible results—fast.",
    image: "/public/image1.png",
    imageClassName: "scale-80", // Make the first image smaller
  },
  {
    id: 2,
    title: "Stunning Portfolios.",
    content: `Your skills. Our design. One stunning portfolio that sets you apart. `,
    image: `/portfolioooo.png`,
    imageClassName: "scale-100", // Normal size
  },
  {
    id: 3,
    title: "AI Jobs Agent",
    content:
      "Reads what you read. Sees what you see. An AI Agent that replaces all the tab switching and answers all job search related query.",
    image: "/hell.png?height=600&width=400&text=Integration",
    imageClassName: "scale-110", // Slightly larger
  },
  {
    id: 4,
    title: "1:1 Mentorship",
    content:
      "Get accountable. Track everything. save months of trial and error. 1-1 coaching by MAANG mentors crafted to give you results, FAST.",
    image: "/last.png?height=600&width=400&text=Privacy",
    imageClassName: "scale-130", // Slightly smaller
  },
]

export default function Component() {
  const [currentSection, setCurrentSection] = useState(0)
  const [imageVisible, setImageVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const windowHeight = window.innerHeight

      // Check if container is in view
      if (containerTop <= windowHeight && containerTop + containerHeight >= 0) {
        // Show image when section comes into view
        if (!imageVisible && containerTop <= windowHeight * 0.8) {
          setImageVisible(true)
        }

        // Calculate progress through the container with better mobile handling
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight * 0.5 - containerTop) / (windowHeight + containerHeight * 0.5)),
        )

        // Determine which section should be active based on scroll progress
        const sectionIndex = Math.floor(scrollProgress * scrollSections.length)
        const clampedIndex = Math.max(0, Math.min(scrollSections.length - 1, sectionIndex))

        if (clampedIndex !== currentSection) {
          setIsTransitioning(true)
          setTimeout(() => {
            setCurrentSection(clampedIndex)
            setIsTransitioning(false)
          }, 50) // Small delay to ensure smooth transition
        }
      } else if (containerTop > windowHeight) {
        // Reset when scrolled back up
        setImageVisible(false)
        setCurrentSection(0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [currentSection, imageVisible])

  return (
    <div className="bg-black">
      {/* Sticky scroll section */}
      <div ref={containerRef} className="relative" style={{ height: `${scrollSections.length * 100}vh` }}>
        {/* Sticky image container */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-center justify-center min-h-screen px-4 lg:px-0">
              {/* Image - Top on mobile, Left on desktop */}
              <div
                ref={imageRef}
                className={`relative transition-all duration-1000 ease-out w-full lg:w-auto ${
                  imageVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
                }`}
              >
                {/* Flexible container that adapts to image orientation - 20% bigger */}
                <div className="relative w-full h-80 sm:h-96 lg:h-[600px] xl:h-[720px] max-w-md mx-auto lg:max-w-3xl">
                  {/* Image stack for smooth crossfade */}
                  <div className="absolute inset-0">
                    {scrollSections.map((section, index) => (
                      <div
                        key={section.id}
                        className={`absolute inset-0 transition-all duration-500 ease-out ${
                          index === currentSection 
                            ? "opacity-100" 
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className={`w-full h-full transition-transform duration-500 ease-out ${
                          section.imageClassName 
                        }`}>
                          <ResponsiveImage
                            src={section.image || "/placeholder.svg"}
                            alt={section.title}
                            className=""
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text content - Bottom on mobile, Right on desktop */}
              <div className="space-y-4 lg:space-y-8 w-full lg:w-auto text-center lg:text-left">
                <div
                  key={currentSection}
                  className={`transition-all duration-300 ease-out ${
                    isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl  text-white mb-4 lg:mb-6">
                    {scrollSections[currentSection].title}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {scrollSections[currentSection].content}
                  </p>
                </div>

                {/* Progress indicators */}
                <div className="flex justify-center lg:justify-start space-x-2">
                  {scrollSections.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-8 rounded-full transition-all duration-300 ${
                        index === currentSection ? "bg-white w-12" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}