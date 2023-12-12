'use client';
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  title: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000, title }) => {
  const [count, setCount] = useState(0);
  const [shouldReset, setShouldReset] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (shouldReset) {
            setCount(0);
            setShouldReset(false);
          }

          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;

            setCount(Math.min((progress / duration) * value, value));

            if (progress < duration) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);

          observer.disconnect();
        } else {

          setShouldReset(true);
        }
      });
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, shouldReset]);

  return (
    <div ref={counterRef} className='bg-white border rounded-lg p-12'>
      <h3 className='text-4xl font-semibold pb-4'>{Math.floor(count)}+</h3>
      <p className='text-xl'>{title}</p>
    </div>
  );
};

const AchievementPreview: React.FC = () => {
  return (
    <div className='grid md:grid-cols-12 md:px-16 md:py-8 md:mx-0 mx-7 md:gap-x-5'>
      <h3 className='md:col-start-2 md:col-span-4 font-semibold text-4xl py-6'>Personal Achievements</h3>

      <div className='md:col-start-2 md:col-span-10 text-slate-500'>
        <div className='pb-12'>Some of the accomplishments done in life as GitHub Campus Expert and an Engineer</div>
      </div>

      {/* Create Cards having metrics and title - grid would be better */}
      <div className="md:col-start-2 md:col-span-10 grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-y-8">
        <AnimatedCounter value={20} title="Open Source Projects" />
        <AnimatedCounter value={2000} title="Mentored Students" />
        <AnimatedCounter value={270} title="GitHub Followers" />
        <AnimatedCounter value={1900} title="Contributions" />
      </div>
    </div>
  );
};

export default AchievementPreview;
