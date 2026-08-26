import React, { useState, useEffect, useRef } from 'react';

function CounterItem({ numericValue, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = numericValue;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Quartic ease-out for smooth deceleration into final value
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easedProgress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [hasAnimated, numericValue]);

  return (
    <div ref={ref} className="flex items-center justify-center gap-3 sm:gap-4 py-4 px-4 rounded-2xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 group">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gold-gradient font-display drop-shadow-[0_2px_15px_rgba(201,162,39,0.2)]">
        {count}{suffix}
      </div>
      <div className="w-[1.5px] h-9 sm:h-11 bg-gradient-to-b from-[#C9A227]/20 via-[#C9A227]/80 to-[#C9A227]/20 shrink-0"></div>
      <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-300 leading-tight max-w-[110px] text-left">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { value: 15, suffix: '+', label: 'Years in Business' },
    { value: 4, suffix: 'K+', label: 'Happy Customers' },
    { value: 7, suffix: 'K+', label: 'Vehicles Serviced' },
    { value: 98, suffix: '%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="py-12 bg-[#0E0E0E] border-y border-[#C9A227]/50 shadow-[0_0_25px_rgba(201,162,39,0.15)] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A227]/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <CounterItem 
              key={idx} 
              numericValue={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
