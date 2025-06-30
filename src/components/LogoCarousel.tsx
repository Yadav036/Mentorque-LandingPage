
import React from "react";

const LogoCarousel = () => {
  const logos = [
    { name: "Google", logo: "G" },
    { name: "Apple", logo: "🍎" },
    { name: "Meta", logo: "M" },
    { name: "Amazon", logo: "A" },
    { name: "Netflix", logo: "N" },
    { name: "Microsoft", logo: "⊞" },
    { name: "Tesla", logo: "T" },
    { name: "Spotify", logo: "♪" },
    { name: "Uber", logo: "U" },
    { name: "Airbnb", logo: "🏠" },
    { name: "PayPal", logo: "P" },
    { name: "Adobe", logo: "Ai" },
  ];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our Students Work At
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join professionals who have successfully landed roles at top tech companies
          </p>
        </div>
        
        {/* Logo carousel container */}
        <div className="relative">
          <div className="flex space-x-8 animate-scroll">
            {/* First set of logos */}
            {logos.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:border-white/40 transition-colors duration-300 backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-white">
                  {company.logo}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((company, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:border-white/40 transition-colors duration-300 backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-white">
                  {company.logo}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
