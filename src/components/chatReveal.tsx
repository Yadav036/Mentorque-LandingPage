"use client"
import { ArrowUpRight, Calendar } from "lucide-react"

import { useState, useEffect, useRef } from "react"

const messages = [
  { id: 1, text: "You getting any calls?", sent: true },
  { id: 2, text: "Yeah... A few actually😬", sent: false },
  { id: 3, text: "I'm collecting rejections at this point 😭", sent: true },
  { id: 4, text: "Well, honestly, its an easy fix.", sent: false },
  { id: 5, text: "Really? What's your hack?", sent: true },
  { id: 6, text: "Let's chat. Book this call—I'll tell you how.", sent: false, type: false },

]

export default function ScrollChatReveal() {
  const [revealedMessages, setRevealedMessages] = useState([false, false, false, false, false, false, false])
  const messageRefs = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      checkMessageReveals()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initially

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const checkMessageReveals = () => {
    const windowHeight = window.innerHeight
    const revealTrigger = windowHeight * 0.9 // Increased from 0.75 to 0.9 - requires more scroll

    const newRevealedMessages = [...revealedMessages]

    messages.forEach((_, index) => {
      const element = messageRefs.current[index]
      if (!element) return

      const rect = element.getBoundingClientRect()

      // Reveal when message enters the viewport from below
      if (rect.top <= revealTrigger && !revealedMessages[index]) {
        newRevealedMessages[index] = true
      }
    })

    setRevealedMessages(newRevealedMessages)
  }

  return (
    <div className="w-auto bg-black text-white" ref={containerRef}>
       
      <div className="max-w-2xl mx-auto ">
        {/* Chat Messages */}
        <div className="space-y-4">
          {messages.map((message, index) => {
            const isRevealed = revealedMessages[index]
            const isAlternate = index % 2 === 1 // Every second message (index 1, 3, 5...)

            return (
              <div
                key={message.id}
                ref={(el) => (messageRefs.current[index] = el)}
                className={`flex ${message.sent ? "justify-end" : "justify-start"} md:min-h-[100px] min-h-[70px] items-center`}
              >
                <div
                  className={`transform transition-all duration-800 ease-out ${isRevealed
                      ? "translate-y-0 opacity-100 scale-100 blur-0"
                      : "translate-y-16 opacity-0 scale-90 blur-sm"
                    }`}
                  style={{
                    maxWidth: "85%", // Limit to 70% of container width
                    minWidth: "200px", // Minimum width to prevent too narrow messages
                  }}
                >
                  {message.type === "gif" ? (
                    <div className="w-64 h-48 bg-gray-800 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
                      <img
                        src="/giffy.webp"
                        alt="Animated GIF"
                        className="max-w-full max-h-full object-contain rounded-3xl"
                      />
                    </div>
                  ) : (
                    <div
                      className="px-6 py-4 transition-all duration-700 ease-out backdrop-blur-sm"
                      style={{
                        backgroundColor: isAlternate ? "#007ACC" : "white",
                        color: isAlternate ? "white" : "black",
                        borderRadius: 40,
                        boxShadow: isAlternate
                          ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                          : "0 20px 40px rgba(255, 255, 255, 0.1), 0 8px 16px rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <p className="md:text-xl text-sm leading-relaxed">{message.text}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}