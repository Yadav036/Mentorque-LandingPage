import { MessageSquare, Users, FileText, Star, CheckCircle, Clock, Target, Zap, Award, Calendar } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';

import { Link } from "react-router-dom";

const CalendarCTA = ({ label }) => (
  <Link to="/book-call">
    <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-blue-400 hover:to-blue-500 hover:shadow-2xl hover:shadow-blue-400/20 hover:-translate-y-1 backdrop-blur-sm">
      <span className="relative z-10 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 
                   2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                   16H5V9h14v11z" />
        </svg>
        {label}
      </span>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  </Link>
);

const MockInterview = () => {
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  // Interview weeks aligned with main progress system (weeks 5-8)
  const interviewWeeks = [
    {
      week: 5,
      title: "Elevator Pitch",
      subtitle: "Perfect Your 30-Second Introduction",
      duration: "30 minutes",
      difficulty: "Beginner",
      icon: <MessageSquare className="w-8 h-8" />,
      description:
        "Master the art of introducing yourself confidently and memorably. Learn to craft a compelling elevator pitch that highlights your unique value proposition and leaves a lasting impression on recruiters and hiring managers.",
      skills: [
        "Personal branding and positioning",
        "Confidence building and presentation",
        "Storytelling techniques",
        "Value proposition articulation",
      ],
      preparation: [
        "Prepare 3-4 key achievements",
        "Practice with different time limits (30s, 60s, 90s)",
        "Record yourself for self-assessment",
        "Prepare for follow-up questions",
      ],
    },
    {
      week: 6,
      title: "Competency Interview",
      subtitle: "Master the STAR Method",
      duration: "45 minutes",
      difficulty: "Intermediate",
      icon: <Users className="w-8 h-8" />,
      description:
        "Learn to answer behavioral questions using the STAR method (Situation, Task, Action, Result). Practice with real scenarios and get feedback on your storytelling structure and impact measurement.",
      skills: [
        "STAR method mastery",
        "Behavioral question patterns",
        "Leadership and teamwork examples",
        "Conflict resolution scenarios",
      ],
      preparation: [
        "Prepare 8-10 STAR stories",
        "Practice with common behavioral questions",
        "Quantify your achievements with metrics",
        "Prepare examples for different competencies",
      ],
    },
    {
      week: 7,
      title: "Technical Interview",
      subtitle: "Coding Challenges & Problem Solving",
      duration: "60 minutes",
      difficulty: "Advanced",
      icon: <FileText className="w-8 h-8" />,
      description:
        "Tackle coding challenges, system design questions, and technical deep-dives with MAANG engineers. Practice problem-solving approaches, code optimization, and technical communication.",
      skills: [
        "Algorithm and data structures",
        "System design fundamentals",
        "Code optimization techniques",
        "Technical communication",
      ],
      preparation: [
        "Review core algorithms and data structures",
        "Practice coding on whiteboard/online platforms",
        "Prepare system design examples",
        "Practice explaining your thought process",
      ],
    },
    {
      week: 8,
      title: "Final Behavioral Round",
      subtitle: "Executive-Level Assessment",
      duration: "45 minutes",
      difficulty: "Expert",
      icon: <Star className="w-8 h-8" />,
      description:
        "Advanced behavioral assessment focusing on leadership, strategic thinking, and cultural fit. Practice with senior executives and learn to demonstrate executive presence and decision-making capabilities.",
      skills: [
        "Executive presence and leadership",
        "Strategic thinking and vision",
        "Cultural fit assessment",
        "High-stakes decision making",
      ],
      preparation: [
        "Prepare leadership and strategic examples",
        "Research company culture and values",
        "Practice executive-level communication",
        "Prepare questions for senior leadership",
      ],
    },
  ];

  const interviewBenefits = [
    {
      title: "Expert Industry Mentors",
      description:
        "Practice with mentors from top tech companies and leading organizations",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Real Interview Simulation",
      description: "Authentic interview environment with actual interviewers",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Detailed Feedback",
      description: "Comprehensive feedback on performance and improvement areas",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Progress Tracking",
      description: "Track your improvement across all interview types",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            interviewBenefits.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedCards((prev) => new Set(prev).add(index));
              }, index * 600);
            });

            setTimeout(() => {
              setAnimatedCards(new Set());
            }, interviewBenefits.length * 600 + 2000);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated, interviewBenefits.length]);

  return (
    <div>
      <div className="min-h-screen bg-black">
        <Navbar />

        {/* Hero Section */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl text-white leading-tight  mt-16 mb-6">
              Mock <span className="text-blue-400">Interviews</span> with Expert Mentors
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Practice with mentors from top companies and master every interview type
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-gray-100">Weeks 5-8 Program</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="text-gray-100">Expert Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-100">Real Interview Simulation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Benefits */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12" ref={containerRef}>
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-6xl text-white leading-tight mb-6">
              Why Practice with <span className="text-blue-400">Mentors?</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Get insider knowledge and real-world interview experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interviewBenefits.map((benefit, index) => (
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
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl text-white mb-4 drop-shadow-sm">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
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

        {/* Interview Weeks */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-6xl text-white mb-6">
              Interview <span className="text-blue-400">Mastery</span> Program
            </h2>
            <p className="text-lg md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Progressive skill building from basics to executive-level mastery
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {interviewWeeks.map((week, index) => (
              <div
                key={index}
                className="relative group backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/15 overflow-hidden"
              >
                <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row gap-8">
                  {/* Left Side */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {week.week}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {week.title}
                        </h3>
                        <p className="text-gray-300 text-lg">{week.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-6 text-gray-300 text-lg">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span>{week.duration}</span>
                      <span>•</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400">
                        {week.difficulty}
                      </span>
                    </div>
                    <div className="mb-6 text-blue-400">{week.icon}</div>
                  </div>

                  {/* Right Side */}
                  <div className="lg:w-2/3">
                    <p className="mb-6 text-lg leading-relaxed text-gray-300">
                      {week.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2 text-white text-lg">
                          <Target className="w-4 h-4 text-blue-400" />
                          Skills You'll Master
                        </h4>
                        <ul className="space-y-2">
                          {week.skills.map((skill, skillIndex) => (
                            <li
                              key={skillIndex}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1 text-blue-400" />
                              <span className="text-gray-300 text-lg">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2 text-white text-lg">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          Preparation Tips
                        </h4>
                        <ul className="space-y-2">
                          {week.preparation.map((tip, tipIndex) => (
                            <li
                              key={tipIndex}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1 text-blue-400" />
                              <span className="text-gray-300 text-lg">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/[0.04] via-transparent to-purple-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-6xl text-white mb-6">
              Ready to <span className="text-blue-400">Master</span> Your Interviews?
            </h2>
            <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto mb-8">
              Join thousands who've landed their dream jobs with expert mentor guidance
            </p>
<CalendarCTA label="Request a call back" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
