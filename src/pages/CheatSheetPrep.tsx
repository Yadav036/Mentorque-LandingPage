import { BookOpen, CheckCircle, Star, Clock, Target, Users, MessageSquare, Brain } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

import Navbar from '@/components/Navbar';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const CheatSheetPrep = () => {
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedSteps, setAnimatedSteps] = useState(new Set());
  const [hasStepsAnimated, setHasStepsAnimated] = useState(false);
  const containerRef = useRef(null);
  const stepsRef = useRef(null);

  const cheatSheetCategories = [
    {
      title: "Behavioral Questions",
      description: "Master the STAR method with 50+ common behavioral questions and perfect answers",
      icon: <Users className="w-8 h-8" />,
      items: [
        "Leadership scenarios",
        "Conflict resolution examples",
        "Teamwork situations",
        "Problem-solving stories",
        "Failure and learning experiences",
      ],
    },
    {
      title: "Technical Questions",
      description: "Comprehensive technical interview prep with coding challenges and system design",
      icon: <Brain className="w-8 h-8" />,
      items: [
        "Data structures & algorithms",
        "System design fundamentals",
        "Database optimization",
        "API design principles",
        "Performance optimization",
      ],
    },
    {
      title: "Industry-Specific",
      description: "Tailored questions and answers for your specific industry and role",
      icon: <Target className="w-8 h-8" />,
      items: [
        "Role-specific scenarios",
        "Industry terminology",
        "Current market trends",
        "Company-specific insights",
        "Salary negotiation tips",
      ],
    },
    {
      title: "Soft Skills",
      description: "Communication, leadership, and cultural fit assessment preparation",
      icon: <MessageSquare className="w-8 h-8" />,
      items: [
        "Communication techniques",
        "Leadership examples",
        "Cultural fit scenarios",
        "Stress management",
        "Presentation skills",
      ],
    },
  ];

  const prepPlanSteps = [
    {
      step: "1",
      title: "Assessment & Analysis",
      description:
        "Evaluate your current interview skills and identify improvement areas",
    },
    {
      step: "2",
      title: "Cheat Sheet Creation",
      description:
        "Develop personalized cheat sheets with your best examples and stories",
    },
    {
      step: "3",
      title: "Practice Sessions",
      description:
        "Structured mock interviews with expert mentors and detailed feedback",
    },
    {
      step: "4",
      title: "Final Preparation",
      description:
        "Last-minute prep, confidence building, and interview day strategies",
    },
  ];

  const prepPackage = {
    title: "Cheat Sheet & Mock Interview Prep Plan",
    duration: "2-3 days",
    description:
      "Comprehensive interview preparation with personalized cheat sheets and expert guidance",
    includes: [
      "Personalized cheat sheet creation",
      "50+ behavioral question examples",
      "Technical interview preparation",
      "Industry-specific question bank",
      "STAR method mastery guide",
      "Mock interview practice sessions",
      "Expert feedback and coaching",
      "Confidence building strategies",
      "Interview day preparation tips",
      "Follow-up email templates",
      "Salary negotiation guide",
      "30-day follow-up support",
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            cheatSheetCategories.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedCards((prev) => new Set(prev).add(index));
              }, index * 600);
            });

            setTimeout(() => {
              setAnimatedCards(new Set());
            }, cheatSheetCategories.length * 600 + 2000);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated, cheatSheetCategories.length]);

  useEffect(() => {
    const stepsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStepsAnimated) {
            setHasStepsAnimated(true);

            prepPlanSteps.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSteps((prev) => new Set(prev).add(index));
              }, index * 400);
            });

            setTimeout(() => {
              setAnimatedSteps(new Set());
            }, prepPlanSteps.length * 400 + 2000);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (stepsRef.current) stepsObserver.observe(stepsRef.current);

    return () => {
      if (stepsRef.current) stepsObserver.unobserve(stepsRef.current);
    };
  }, [hasStepsAnimated, prepPlanSteps.length]);

  return (
    <div>
      <div className="min-h-screen bg-black">
        <Navbar />

        {/* Hero Section */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <BookOpen className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              Cheat Sheet & <span className="text-blue-400">Mock Interview</span> Prep Plan
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Get comprehensive interview preparation with personalized cheat sheets and expert guidance
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-gray-100">Personalized Cheat Sheets</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="text-gray-100">Expert Coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-100">Fast Turnaround</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cheat Sheet Categories */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12" ref={containerRef}>
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl text-white leading-tight mb-6">
              Comprehensive Cheat Sheet <span className="text-blue-400">Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Everything you need to ace any interview type
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cheatSheetCategories.map((category, index) => (
              <div
                key={index}
                className={`relative group backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 transition-all duration-500 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:via-transparent before:to-transparent before:transition-opacity before:duration-500 ${
                  animatedCards.has(index)
                    ? 'bg-white/[0.05] border-white/20 shadow-2xl shadow-blue-400/10 before:opacity-100'
                    : 'hover:bg-white/[0.05] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-400/10 before:opacity-0 hover:before:opacity-100'
                }`}
              >
                <div className="relative z-10">
                  <div className="text-blue-400 mb-6 flex justify-center drop-shadow-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl text-white mb-4 drop-shadow-sm">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 drop-shadow-lg" />
                        <span className="text-gray-100 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/[0.03] via-transparent to-purple-600/[0.02] transition-opacity duration-500 ${
                    animatedCards.has(index)
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Plan */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12" ref={stepsRef}>
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Your 4-Step <span className="text-blue-400">Preparation</span> Plan
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Structured approach to interview mastery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prepPlanSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  animatedSteps.has(index) ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-all duration-500 drop-shadow-lg ${
                    animatedSteps.has(index)
                      ? 'shadow-2xl shadow-blue-400/20 bg-gradient-to-r from-blue-400 to-blue-500'
                      : 'hover:shadow-2xl hover:shadow-blue-400/20'
                  }`}
                >
                  {step.step}
                </div>
                <h3 className="text-xl md:text-2xl text-white mb-3 drop-shadow-sm">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Prep Package */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Our Cheat Sheet & <span className="text-blue-400">Prep Service</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Complete interview preparation solution
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative group backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/15 overflow-hidden">
              <div className="relative z-10 p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl text-white mb-4 drop-shadow-sm">
                    {prepPackage.title}
                  </h3>
                  <div className="text-blue-400 flex items-center justify-center gap-2 text-lg drop-shadow-lg">
                    <Clock className="w-5 h-5" />
                    {prepPackage.duration}
                  </div>
                </div>

                <p className="text-gray-100 mb-8 text-xl leading-relaxed">
                  {prepPackage.description}
                </p>

                <div className="space-y-6 mb-8 text-left">
                  {prepPackage.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1 drop-shadow-lg" />
                      <span className="text-gray-100 text-lg leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <WhatsAppCTA label="Cheat Sheet & Mock Interview Prep Plan" />
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/[0.04] via-transparent to-purple-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Ready to Ace Your <span className="text-blue-400">Interviews?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-8">
              Get your personalized cheat sheets and expert coaching to land your dream job
            </p>
            <WhatsAppCTA label="Cheat Sheet & Mock Interview Prep Plan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatSheetPrep;