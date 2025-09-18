import React, { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  id: string;
  week: number;
  title: string;
  description: string;
  icon: string;
  isCompleted?: boolean;
}



const timelineData: TimelineItem[] = [
  {
    id: 'week1',
    week: 1,
    title: 'Resume Review',
    description: 'Get your resume reviewed and analysed with mentor feedback.',
    icon: '01',
    isCompleted: false,
    path: '/resume-review',
  },
  {
    id: 'week2',
    week: 2,
    title: 'Resume Rebuild',
    description: 'Rebuild your resume with expert guidance and ATS-focused edits.',
    icon: '02',
    isCompleted: false,
    path: '/resume-rebuild',
  },
  {
    id: 'week3',
    week: 3,
    title: 'AI & Portfolio',
    description: 'Set up your AI assistant and build a portfolio to showcase projects.',
    icon: '03',
    isCompleted: false,
    path: '/portfolio-templates', // or '/ai-assistant' depending on what you want
  },
  {
    id: 'week4',
    week: 4,
    title: 'Interview Prep',
    description: 'Access cheat sheets and get a complete mock interview plan.',
    icon: '04',
    isCompleted: false,
    path: '/cheat-sheet-prep',
  },
  {
    id: 'week5',
    week: 5,
    title: 'Mock Interviews',
    description: 'Mock interviews that help you ace your actual interviews',
    icon: '05',
    isCompleted: false,
    path: '/mock-interviews',
  },
];



const ProgressiveLine: React.FC<{ 
  progress: number; 
  height: number; 
}> = ({ progress, height }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600" style={{ height: `${height}px` }}>
      <div
        className="w-full bg-gradient-to-b from-blue-400 to-blue-500 transition-all duration-000 ease-out origin-top"
        style={{ height: `${height * progress}px` }}
      />
    </div>
  );
};

const AnimatedMilestone: React.FC<{ 
  item: TimelineItem; 
  index: number; 
  inView: boolean;
  lineProgress: number;
  onComplete: () => void;
}> = ({ item, index, inView, lineProgress, onComplete }) => {
  const [circleComplete, setCircleComplete] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);
  
  // Improved animation trigger - ensures all milestones are reached
  const totalItems = timelineData.length;
  const milestoneThreshold = (index + 0.5) / totalItems;
  const shouldAnimate = lineProgress >= milestoneThreshold;

  useEffect(() => {
    if (shouldAnimate && !circleComplete) {
      const timer = setTimeout(() => {
        setCircleComplete(true);
        setTimeout(() => {
          setCheckComplete(true);
          onComplete();
        }, 200); // Reduced delay for faster check animation
      }, 75); // Reduced initial delay
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, circleComplete, onComplete]);

  return (
    <div
      className={`relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all duration-400 ${
        shouldAnimate ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}
    >
      {/* Background circle with subtle glow */}
      <div className="absolute inset-0 w-full h-full rounded-full bg-black border-2 border-gray-600 shadow-lg" 
           style={{
             boxShadow: shouldAnimate ? '0 0 20px rgba(59, 130, 246, 0.3)' : 'none'
           }} />
      
      {/* Animated circle stroke */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r="24"
          fill="none"
          stroke="rgb(75, 85, 99)"
          strokeWidth="4"
          className="opacity-20"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="4"
          strokeLinecap="round"
          className={`transition-all duration-300 ease-out ${
            circleComplete ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            strokeDasharray: '150.8',
            strokeDashoffset: circleComplete ? '0' : '150.8',
          }}
        />
      </svg>
      
      {/* Inner content */}
      <div className="relative z-10 w-6 h-6 md:w-10 md:h-10 rounded-full bg-black flex items-center justify-center">
        <svg 
          className={`w-4 h-4 md:w-6 md:h-6  transition-all duration-3000 ease-out ${
            checkComplete ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`} 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path
            d="M20 6L9 17L4 12"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: '22',
              strokeDashoffset: checkComplete ? '0' : '22',
              transition: 'stroke-dashoffset 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s'
            }}
          />
        </svg>
      </div>
    </div>
  );
};

const TimelineCard: React.FC<{ 
  item: TimelineItem; 
  index: number; 
  inView: boolean;
}> = ({ item, index, inView }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className="relative flex justify-center w-full">
  <div className="flex w-full max-w-5xl">
    {/* Left side content */}
   <div className={`w-1/2 flex ${isLeft ? 'justify-center pr-10 md:pr-16' : 'justify-start pl-10 md:pl-16'}`}>
  {isLeft && (
    <div
      className={`
        p-4 md:p-6 max-w-xs md:max-w-sm
        transition-all duration-500 ease-out
        ${inView 
          ? 'opacity-100 translate-x-0 translate-y-0' 
          : 'opacity-0 -translate-x-4 md:-translate-x-8 translate-y-4'
        }
      `}
      style={{
        transitionDelay: `${index * 80}ms`,
        marginTop: '-30px'
      }}
    >

      {index !== timelineData.length - 1 && (
        <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4 justify-end">
          <span className="text-white font-semibold text-lg md:text-xl uppercase tracking-wider">Week</span>
          <div className="text-xl md:text-3xl font-bold text-blue-400">{item.icon}</div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg md:text-4xl font-bold text-blue-400 mb-2 md:mb-4 text-right whitespace-nowrap">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-200 leading-relaxed text-xs md:text-xl text-right">
        {item.description}
      </p>
    </div>
  )}
</div>


    {/* Right side content */}
    <div className={`w-1/2 flex ${!isLeft ? 'justify-start pl-8 md:pl-14' : 'justify-end pr-8 md:pr-14'}`}>
      {!isLeft && (
        <div
          className={`
            p-4 md:p-6 max-w-xs md:max-w-sm
            transition-all duration-500 ease-out
            ${inView 
              ? 'opacity-100 translate-x-0 translate-y-0' 
              : 'opacity-0 translate-x-4 md:translate-x-8 translate-y-4'
            }
          `}
          style={{
            transitionDelay: `${index * 80}ms`,
            marginTop: '-30px'
          }}
        >
          {/* Week indicator - aligned with title */}
          <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4 justify-start">
            <span className="text-white font-semibold text-lg md:text-xl uppercase tracking-wider">Week</span>
            <div className="text-xl md:text-3xl font-bold text-blue-400">{item.icon}</div>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-4xl font-bold text-blue-400 mb-2 md:mb-4 text-left whitespace-nowrap">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-200 leading-[2]
 text-xs md:text-xl text-left">
            {item.description}
          </p>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

const ProgressiveTimeline: React.FC = () => {
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Responsive spacing
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const itemSpacing = isMobile ? 180 : 270;
  const totalItems = timelineData.length;
  const timelineHeight = (totalItems - 1) * itemSpacing + (isMobile ? 100 : 140);

  useEffect(() => {
    const handleResize = () => {
      setLineProgress(prev => prev);
    };

   

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.6;
        
        const startTrigger = triggerPoint - rect.top;
        const endTrigger = rect.height - windowHeight + triggerPoint;
        const progress = Math.max(0, Math.min(1, startTrigger / endTrigger));
        
        setLineProgress(progress);

        // Check visible sections
        const sections = document.querySelectorAll('.timeline-item');
        const newVisible = new Set<number>();
        sections.forEach((section, index) => {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top < windowHeight * 0.9 && sectionRect.bottom > windowHeight * 0.1) {
            newVisible.add(index);
          }
        });
        setVisibleSections(newVisible);
      }
    };

    window.addEventListener('resize', handleResize);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);

      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="bg-black min-h-screen">

      {/* Header Section */}
      <section className="py-8 md:py-12 px-2 md:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-2 md:mb-6">
            Crafted for <span className="text-blue-400">Success</span>
          </h1>
          
          <p className="text-base md:text-2xl text-gray-100 leading-relaxed mb-8 md:mb-4">
            A structured 4-week program designed for professionals who demand 
            excellence and measurable results in their career advancement.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-8 md:py-2 px-4 md:px-8 relative">
        <div className="flex justify-center w-full">
          <div ref={timelineRef} className="relative w-full max-w-6xl" style={{ minHeight: `${timelineHeight + 200}px` }}>

            <ProgressiveLine 
              progress={lineProgress} 
              height={timelineHeight} 
            />

            <div className="relative">
              {timelineData.map((item, index) => {
                const inView = visibleSections.has(index);
                const topOffset = index * itemSpacing + 80;
                
                return (
                  <div 
                    key={item.id} 
                    className="timeline-item absolute w-full" 
                    style={{ 
                      top: `${topOffset}px`,
                      minHeight: '200px'
                    }}
                  >
                    {/* Timeline Milestone - Centered */}
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 z-20"
                      style={{ top: '8px' }}
                    >

                      <AnimatedMilestone 
                        item={item}
                        index={index}
                        inView={inView}
                        lineProgress={lineProgress}                      />
                    </div>

                    {/* Timeline Card */}
                    <div className="relative" style={{ paddingTop: '20px' }}>
                      <TimelineCard 
                        item={item} 
                        index={index} 
                        inView={inView}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ProgressiveTimeline;