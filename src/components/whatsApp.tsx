"use client"

import { useState, useRef } from "react"
import { ArrowUpRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export default function FierceImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const items = [
       {
      title: "Japan",
      image: "/hi.PNG?height=480&width=340",
      scale: 1.1,
    },
     
    {
      title: "Norway",
      image: "/screen/imp1.jpg?height=420&width=310",
      scale: 1.0,
    },
       {
      title: "The Narrator",
      image: "/screen/15.png?height=500&width=350",
      scale: 1.2,
    },
    {
      title: "Iceland",
      image: "/screen/16.png?height=450&width=320",
      scale: 0.9,
    },
    {
      title: "Japan",
      image: "/screen/17.png?height=480&width=340",
      scale: 1.1,
    },
    {
      title: "Norway",
      image: "/screen/18.jpeg?height=420&width=310",
      scale: 1.0,
    },
     {
      title: "Norway",
      image: "/screen/19.jpeg?height=420&width=310",
      scale: 1.0,
    },
      {
      title: "Norway",
      image: "/screen/20.jpeg?height=420&width=310",
      scale: 1.0,
    },
    {
      title: "Tyler Durden",
      image: "/screen/6.jpg?height=400&width=300",
      scale: 1.4,
    },
    {
      title: "The Narrator",
      image: "/screen/7.jpg?height=500&width=350",
      scale: 1.2,
    },
    {
      title: "Iceland",
      image: "/screen/10.jpg?height=450&width=320",
      scale: 0.9,
    },
    {
      title: "Japan",
      image: "/screen/12.png?height=480&width=340",
      scale: 1.1,
    },
    {
      title: "Norway",
      image: "/screen/14.png?height=420&width=310",
      scale: 1.0,
    },
   
  ]

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length
    setCurrentIndex(newIndex)
    scrollToImage(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length
    setCurrentIndex(newIndex)
    scrollToImage(newIndex)
  }

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth
      const scrollAmount = index * containerWidth
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    scrollToImage(index)
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Header Tag */}
      <div className="text-center py-6 md:py-16 px-4 md:px-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-8 leading-tight">
          People are Landing Interviews <span className="text-blue-400">Fast.</span>
          <br />
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/80">
          Moments in time that made a difference.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative px-2 sm:px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Desktop Navigation Buttons */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-1/4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/80 "
              aria-label="Previous image"
            >
              <ChevronLeft className="w-12 h-12 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-1/4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/80 "
              aria-label="Next image"
            >
              <ChevronRight className="w-12 h-12 text-white" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {items.map((item, index) => (
                <div key={index} className="min-w-full flex items-center justify-center py-4 sm:py-6 md:py-8">
                  {/* Image Card - Dynamic size based on image and scale */}
                  <div
                    className="relative inline-block rounded"
                    style={{
                      transform: `scale(${item.scale})`,
                    }}
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="block h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] max-w-[200px] sm:max-w-[280px] md:max-w-[400px] lg:max-w-[500px] object-contain rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-6 mt-4 mb-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-black/80"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-black/80"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center px-4 md:px-8 py-6 md:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-6 md:mb-8 text-white my-6 md:my-16">
          "This Feels Unreal"
        </h2>
        <div className="flex justify-center mt-6 md:mt-12">
          <a
            href="https://calendly.com/mentorquedu-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white text-black font-bold py-3 px-5 md:py-4 md:px-6 rounded-full text-sm md:text-base lg:text-lg border border-white/20"
          >
            <Calendar className="mr-2 md:mr-3 w-4 h-4 md:w-6 md:h-6" />
            We Agree
            <ArrowUpRight className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}
