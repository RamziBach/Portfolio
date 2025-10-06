'use client';

import { useState, useEffect } from 'react';

type Props = {
  className?: string;
};

export default function LiveClock({ className }: Props) {
  const [time, setTime] = useState<string>('12:00 AM');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Toronto',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    setIsHydrated(true);

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <small className={`${className} ${!isHydrated ? 'opacity-50' : ''}`}>
      {time}
    </small>
  );
}
