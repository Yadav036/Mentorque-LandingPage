import { TrendingUp, CheckCircle, Star, Clock, Users, Target, Zap, Award } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';

const WhatsAppCTA = ({ label }) => (
  <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-blue-400 hover:to-blue-500 hover:shadow-2xl hover:shadow-blue-400/20 hover:-translate-y-1 backdrop-blur-sm">
    <span className="relative z-10 flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
      </svg>
      {label}
    </span>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
);



const ResumeRebuild = () => {
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  const rebuildFeatures = [
    {
      title: "Complete Rewrite",
      description: "Start fresh with a professionally written resume from scratch",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "ATS Optimization",
      description: "Advanced formatting and keywords to beat tracking systems",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Industry Templates",
      description: "Custom designs tailored to your specific industry",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Personal Branding",
      description: "Develop your unique professional narrative and value proposition",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const rebuildPackage = {
    title: "Complete Resume Rebuild",
    duration: "3-5 days",
    description: "Comprehensive resume transformation with expert collaboration",
    includes: [
      "Full resume rewrite from scratch",
      "ATS-optimized formatting",
      "Industry-specific keywords",
      "Personal branding consultation",
      "LinkedIn profile optimization",
      "Cover letter template",
      "Multiple rounds of revisions",
      "PDF and Word formats",
      "30-day follow-up support"
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Trigger sequential hover animation
            rebuildFeatures.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedCards(prev => new Set(prev).add(index));
              }, index * 600); // 600ms delay between each card
            });

            // Remove animation classes after completion
            setTimeout(() => {
              setAnimatedCards(new Set());
            }, rebuildFeatures.length * 600 + 3000); // Keep for 3s after last card
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: '0px 0px -100px 0px' // Start animation before fully in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated, rebuildFeatures.length]);

  return (
    <div>
      <div className="min-h-screen bg-black">
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
              </div>
              <div className="flex flex-col items-center justify-center gap-4 mb-6">
                <h1 className="text-3xl md:text-6xl text-white leading-tight mt-8">
                  Resume <span className="text-blue-400">Rebuild</span> & Optimization
                </h1>
              </div>
              
              <p className="text-xl md:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-auto mb-8">
                Complete resume transformation with expert collaboration and ATS optimization
              </p>

              <div className="flex flex-wrap justify-center gap-8 text-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-100">Complete Rewrite</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-100">Expert Collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-100">Fast Turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rebuild Features with Sequential Animation */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12" ref={containerRef}>
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-6xl text-white leading-tight mb-8">
                What We <span className="text-blue-400">Rebuild</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
                Complete transformation to maximize your career potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rebuildFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`relative group backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 text-center transition-all duration-500 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:via-transparent before:to-transparent before:transition-opacity before:duration-500 ${
                    animatedCards.has(index) 
                      ? 'bg-white/[0.05] border-white/20 shadow-2xl shadow-blue-400/10 before:opacity-100' 
                      : 'hover:bg-white/[0.05] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-400/10 before:opacity-0 hover:before:opacity-100'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="text-blue-400 mb-6 flex justify-center drop-shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl text-white mb-4 drop-shadow-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/[0.03] via-transparent to-purple-600/[0.02] transition-opacity duration-500 ${
                      animatedCards.has(index) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rebuild Package */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl text-white leading-tight mb-8">
                Our Resume Rebuild <span className="text-blue-400">Service</span>
              </h2>
              <p className="text-xl md:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
                Complete transformation to maximize your career potential
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative group backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/15 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/[0.1] before:via-white/[0.02] before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 overflow-hidden">
                <div className="relative z-10 p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl text-white mb-4 drop-shadow-sm">
                      {rebuildPackage.title}
                    </h3>
                    <div className="text-blue-400 flex items-center justify-center gap-2 text-lg drop-shadow-lg">
                      <Clock className="w-5 h-5" />
                      {rebuildPackage.duration}
                    </div>
                  </div>

                  <p className="text-gray-100 mb-8 text-center text-xl leading-relaxed">{rebuildPackage.description}</p>

                  <div className="space-y-6 mb-8">
                    {rebuildPackage.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1 drop-shadow-lg" />
                        <span className="text-gray-100 text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <WhatsAppCTA label="Resume Rebuild & Optimization" />
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/[0.04] via-transparent to-purple-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-400/[0.05] to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl text-white leading-tight mb-8">
              Ready to Rebuild Your <span className="text-blue-400">Resume?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Transform your career with a professionally rebuilt resume that gets results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppCTA label="Resume Rebuild & Optimization" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeRebuild;