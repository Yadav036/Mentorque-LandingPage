import { useRef, useState, useCallback, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  width?: number;
  height?: number;
}

export default function BeforeAfterSlider({
  before,
  after,
  width = 600,
  height = 400,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(0); // Start at 0 for animation
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [lastTouchTime, setLastTouchTime] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [handleScale, setHandleScale] = useState(1);
  const animationFrame = useRef<number>();
  const observerRef = useRef<IntersectionObserver>();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window && window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth animation using requestAnimationFrame
  const smoothSetSliderPos = useCallback((targetPos: number, animate = false) => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    if (!animate) {
      setSliderPos(targetPos);
      return;
    }

    const startPos = sliderPos;
    const distance = targetPos - startPos;
    const duration = 300;
    const startTime = performance.now();

    const animateFrame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentPos = startPos + (distance * easeOutQuart);
      
      setSliderPos(currentPos);
      
      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animateFrame);
      }
    };

    animationFrame.current = requestAnimationFrame(animateFrame);
  }, [sliderPos]);

  // Entrance animation sequence - smoother and slower
  const startEntranceAnimation = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);
    
    // Phase 1: Slide from left to right (0% to 100%) - showing the before image fully first
    const animateReveal = (startTime: number) => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const duration1 = 1800; // Slower first phase duration (was 1200)
      const duration2 = 1200; // Slower second phase duration (was 800)
      const pauseDuration = 450; // Longer pause at 100% (was 300)
      
      if (elapsed < duration1) {
        // Phase 1: 0% to 100% - smoother easing
        const progress = elapsed / duration1;
        const easeInOutCubic = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        const position = easeInOutCubic * 100;
        setSliderPos(position);
        
        requestAnimationFrame(() => animateReveal(startTime));
      } else if (elapsed < duration1 + pauseDuration) {
        // Pause at 100% 
        setSliderPos(100);
        // Scale up handle during pause
        const pauseProgress = (elapsed - duration1) / pauseDuration;
        const scaleEase = Math.sin(pauseProgress * Math.PI * 0.5); // Smooth scale transition
        setHandleScale(1 + scaleEase * 0.5);
        
        requestAnimationFrame(() => animateReveal(startTime));
      } else if (elapsed < duration1 + pauseDuration + duration2) {
        // Phase 2: 100% to 50% with handle scaling back - smoother easing
        const progress = (elapsed - duration1 - pauseDuration) / duration2;
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const position = 100 - (easeOutCubic * 50); // 100% to 50%
        setSliderPos(position);
        
        // Scale handle back to normal smoothly
        const scaleProgress = Math.sin(progress * Math.PI * 0.5);
        setHandleScale(1.5 - (scaleProgress * 0.5));
        
        requestAnimationFrame(() => animateReveal(startTime));
      } else {
        // Animation complete - settle at center
        setSliderPos(50);
        setHandleScale(1);
        
        // Add a gentle pulse to indicate interactivity
        setTimeout(() => {
          setHandleScale(1.1);
          setTimeout(() => setHandleScale(1), 300);
        }, 750);
      }
    };

    requestAnimationFrame(() => animateReveal(performance.now()));
  }, [hasAnimated]);

  // Intersection Observer for entrance animation
  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          startEntranceAnimation();
        }
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasAnimated, startEntranceAnimation]);

  const updateSliderPosition = useCallback((clientX: number, animate = false) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    smoothSetSliderPos(percentage, animate);
  }, [smoothSetSliderPos]);

  // Enhanced mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  // Enhanced touch handlers with velocity tracking
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setTouchStartX(e.touches[0].clientX);
    setLastTouchTime(performance.now());
    setVelocity(0);
    updateSliderPosition(e.touches[0].clientX);
    
    // Add haptic feedback on supported devices
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  }, [updateSliderPosition]);

  // Smooth mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  // Enhanced touch movement with velocity calculation
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const currentTime = performance.now();
    const currentX = e.touches[0].clientX;
    const timeDiff = currentTime - lastTouchTime;
    const xDiff = currentX - touchStartX;
    
    // Calculate velocity for momentum
    if (timeDiff > 0) {
      setVelocity(xDiff / timeDiff);
    }
    
    setLastTouchTime(currentTime);
    setTouchStartX(currentX);
    updateSliderPosition(currentX);
  }, [isDragging, updateSliderPosition, lastTouchTime, touchStartX]);

  // Enhanced end handler with momentum
  const handleEnd = useCallback(() => {
    setIsDragging(false);
    
    // Apply momentum on mobile
    if (isMobile && Math.abs(velocity) > 0.5) {
      const currentPos = sliderPos;
      const momentumDistance = velocity * 50; // Adjust multiplier for desired momentum
      const targetPos = Math.max(0, Math.min(100, currentPos + momentumDistance));
      smoothSetSliderPos(targetPos, true);
    }
    
    setVelocity(0);
  }, [isMobile, velocity, sliderPos, smoothSetSliderPos]);

  // Click/tap to position (industry standard)
  const handleContainerClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0]?.clientX || e.changedTouches[0]?.clientX : e.clientX;
    if (clientX) {
      updateSliderPosition(clientX, true);
      
      // Haptic feedback for taps
      if ('vibrate' in navigator && isMobile) {
        navigator.vibrate(15);
      }
    }
  }, [isDragging, updateSliderPosition, isMobile]);

  useEffect(() => {
    if (isDragging) {
      const options = { passive: false };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, options);
      document.addEventListener('touchend', handleEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const handleSize = isMobile ? 'w-16 h-16' : 'w-12 h-12';
  const dynamicHandleScale = (isHovering || isDragging) ? 'scale-110' : isMobile ? 'scale-105' : '';
  const interactionAreaWidth = isMobile ? '60px' : '40px';

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden shadow-2xl select-none touch-none"
      style={{ 
        maxWidth: width,
        aspectRatio: `${width}/${height}`,
      }}
      onMouseEnter={() => !isMobile && setIsHovering(true)}
      onMouseLeave={() => !isMobile && setIsHovering(false)}
      onClick={handleContainerClick}
      onTouchEnd={handleContainerClick}
    >
      {/* After image (background) */}
      <div className="relative w-full h-full">
        <img
          src={after}
          alt="After"
          className="w-full h-full object-cover"
          draggable={false}
        />
        
        {/* After label overlay */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white px-3 py-1.5 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white border-opacity-20">
          BEFORE
        </div>
        
        {/* Before image (clipped overlay) */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
          }}
        >
          <img
            src={before}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
          
          {/* Before label overlay */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white px-3 py-1.5 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white border-opacity-20">
            AFTER
          </div>
        </div>
      </div>

      {/* Vertical divider line */}
      <div
        className="absolute top-0 h-full bg-white shadow-lg pointer-events-none"
        style={{
          left: `${sliderPos}%`,
          width: isMobile ? '3px' : '2px',
          boxShadow: isHovering || isDragging ? 
            '0 0 20px rgba(255,255,255,0.8)' : 
            isMobile ? '0 0 15px rgba(255,255,255,0.6)' : '0 0 10px rgba(0,0,0,0.3)',
        }}
      />

      {/* Interactive handle area */}
      <div
        className="absolute top-0 h-full cursor-ew-resize z-10 flex items-center justify-center"
        style={{
          left: `calc(${sliderPos}% - ${parseInt(interactionAreaWidth)/2}px)`,
          width: interactionAreaWidth,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Visible handle */}
        <div 
          className={`
            ${handleSize} bg-white rounded-full shadow-xl border-3 border-gray-800
            flex items-center justify-center transition-all duration-200
            ${dynamicHandleScale} ${isDragging ? 'shadow-2xl' : ''}
          `}
          style={{
            transform: `scale(${handleScale})`,
            boxShadow: isDragging ? 
              '0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.8)' :
              '0 4px 16px rgba(0,0,0,0.2)',
            transition: isDragging ? 'box-shadow 0.2s ease' : 'all 0.2s ease',
          }}
        >
          {/* Arrow indicators */}
          <div className="flex items-center space-x-0.5">
            <svg 
              width={isMobile ? "10" : "8"} 
              height={isMobile ? "14" : "12"} 
              viewBox="0 0 8 12" 
              className="text-gray-800"
            >
              <path 
                d="M6 0L0 6L6 12" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <svg 
              width={isMobile ? "10" : "8"} 
              height={isMobile ? "14" : "12"} 
              viewBox="0 0 8 12" 
              className="text-gray-800"
            >
              <path 
                d="M2 0L8 6L2 12" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Progress indicator - show during animation and interaction */}
      {((!hasAnimated || isDragging || isHovering)) && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
  <div 
    className={`
      bg-black bg-opacity-60 text-white px-4 py-2 rounded-full font-mono backdrop-blur-sm font-bold
      ${isMobile ? 'text-sm' : 'text-2xl'}
    `}
    style={{
      color: `rgb(${Math.round((1 - sliderPos / 100) * 255)}, ${Math.round((sliderPos / 100) * 255)}, 0)`
    }}
  >
    {Math.round(47 + (sliderPos / 100) * 50)}% ATS
  </div>
</div>


      )}
    </div>
  );
}