'use client';
import { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const location = 'Bengaluru, India';

  return (
    <div className="text-sm flex items-center text-gray-500">
      <p className='mr-2' suppressHydrationWarning>{currentTime}</p>
      <span className='mb-2'>.</span>
      <p className='ml-2'>{location}</p>
    </div>
  );
};

export default TimeDisplay;
