"use client"

import { useState, useEffect, useRef } from "react"

export default function ScrollTextReveal() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  //job search
  // second job

  const text =
    "The job search shouldn’t feel like a second job. All the late nights, endless tweaks, and silent inboxes can wear you down fast. We take the hassle and uncertainty off your plate, so you can focus on showing up and moving forward. The grind stops here."

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getWordProgress = () => {
    const element = sectionRef.current
    if (!element) return 0

    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Start revealing when element is at 60% of screen (below middle)
    const startReveal = windowHeight * 0.8
    // Finish revealing when element reaches 20% of screen
    const endReveal = windowHeight * 0.3

    if (rect.top > startReveal) return 0
    if (rect.top < endReveal) return 1

    const progress = (startReveal - rect.top) / (startReveal - endReveal)
    return Math.max(0, Math.min(1, progress))
  }

  const renderTextWithHighlight = (text: string) => {
    const sentences = text.split(/(?<=[.!?])\s+/)
    let wordIndex = 0
    const totalProgress = getWordProgress()

    return sentences.map((sentence, sentenceIndex) => {
      const words = sentence.trim().split(" ")
      const sentenceWords = words.map((word, localWordIndex) => {
        const globalWordIndex = wordIndex + localWordIndex
        const totalWords = text.split(" ").length

        // Calculate word progress with delay between words
        const wordStartProgress = globalWordIndex / totalWords
        const wordEndProgress = (globalWordIndex + 1) / totalWords

        // Add extra delay for smoother reveals
        const adjustedProgress = Math.max(
          0,
          (totalProgress - wordStartProgress) / (wordEndProgress - wordStartProgress),
        )
        const wordProgress = Math.max(0, Math.min(1, adjustedProgress))

        return (
          <span
            key={globalWordIndex}
            className="transition-all duration-700 ease-out"
            style={{
              color: wordProgress > 0.3 ? "white" : "rgb(75, 85, 99)",
              opacity: Math.max(0.3, wordProgress),
              transform: `translateY(${(1 - wordProgress) * 10}px)`,
            }}
          >
            {word}
            {localWordIndex < words.length - 1 ? " " : ""}
          </span>
        )
      })

      wordIndex += words.length

      return (
        <span key={sentenceIndex} className="inline-block">
          {sentenceWords}
          {sentenceIndex < sentences.length - 1 ? " " : ""}
        </span>
      )
    })
  }

  return (
    <div className="bg-black text-white">
   
      

    

      {/* Single Text Section */}
      <div className="max-w-5xl mx-auto">
        <div ref={sectionRef} className="min-h-[55vh] flex items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">{renderTextWithHighlight(text)}</h2>
        </div>
      </div>

     
    
       
    
       
      
    </div>
  )
}
