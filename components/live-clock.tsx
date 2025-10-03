'use client';

import { useState, useEffect } from 'react';

type Props = {
  className?: string;
};

export default function LiveClock({ className }: Props) {
  const [time, setTime] = useState<string>('');

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

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <small className={className}>{time}</small>;
}
