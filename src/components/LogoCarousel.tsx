"use client"

const LogoCarousel = () => {
  const logos = [
    { name: "Google", logo: "/logo/amazon.png" },
    { name: "Amazon", logo: "/logo/aib.png" },
    { name: "Netflix", logo: "/logo/microsoft.png" },
    { name: "Uber", logo: "/logo/samsung.png" },
    { name: "Tesla", logo: "/logo/jpMorgan.png" },
    { name: "Spotify", logo: "/logo/pngwing.com.png" },
    { name: "Microsoft", logo: "/logo/goldman_sachs.png" },
  ]

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo carousel container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 animate-scroll-fast">
            {/* First set of logos */}
            {logos.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center hover:border-white/40 transition-colors duration-300 backdrop-blur-sm"
              >
                {company.logo.endsWith(".png") ? (
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{company.logo}</span>
                )}
              </div>
            ))}
            {/* Second set for seamless loop */}
            {logos.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center hover:border-white/40 transition-colors duration-300 backdrop-blur-sm"
              >
                {company.logo.endsWith(".png") ? (
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{company.logo}</span>
                )}
              </div>
            ))}
            {/* Third set for seamless loop */}
            {logos.map((company, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center hover:border-white/40 transition-colors duration-300 backdrop-blur-sm"
              >
                {company.logo.endsWith(".png") ? (
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{company.logo}</span>
                )}
              </div>
            ))}
          </div>
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black/90 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black/90 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll-fast {
          animation: scroll-fast 15s linear infinite;
        }
        
        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default LogoCarousel
