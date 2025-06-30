import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section 
      className="overflow-hidden relative bg-cover" 
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%', 
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      {/* Keep the original moon gradient overlay */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="glass-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-black mr-2">01</span>
              <span>Get Hired Fast</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in text-white" 
              style={{ animationDelay: "0.3s" }}
            >
              Mentorque: 1-1 Mentorship<br className="hidden sm:inline" />to Get Hired, Fast
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-200 font-normal text-base sm:text-lg text-left"
            >
              Land Interviews Faster. Build a Career You Deserve. Mentorque is a turnkey solution engineered to help students and professionals land interviews within 4 weeks.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="https://calendly.com/mentorque" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-white text-black hover:bg-gray-200 font-medium py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {/* Replace robot image with appointment booking card */}
            <div className="glass-card bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 glass-effect">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Schedule Your Free Session
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Get personalized career guidance from industry experts. No commitment required.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>30-minute consultation</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Expert career guidance</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Personalized action plan</span>
                  </div>
                </div>
                
                <a 
                  href="https://calendly.com/mentorque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button border border-white/20 hover:border-white/40 text-white py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2 group w-full justify-center"
                >
                  Book Now - It's Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 parallax animate-float" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
