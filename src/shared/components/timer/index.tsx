'use client';

import { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

export type TCountdownTimerProps = {
  seconds: number;
  onEnd?: () => void;
  expiredMessage?: string;
  className?: string;
};

const CountdownTimer = forwardRef(
  (
    {
      seconds,
      onEnd,
      expiredMessage = 'زمان به پایان رسید',
      className,
    }: TCountdownTimerProps,
    ref,
  ) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
      if (seconds <= 0) return;

      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsExpired(true);
            onEnd?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [seconds, onEnd]);

    useImperativeHandle(
      ref,
      () => ({
        reset: () => {
          setTimeLeft(seconds);
          setIsExpired(false);
        },
      }),
      [seconds],
    );

    const formatTime = (time: number) => {
      const m = Math.floor(time / 60);
      const s = time % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    return (
      <div className={className}>
        {isExpired ? (
          <span className=" text-white font-medium">{expiredMessage}</span>
        ) : (
          <span className="text-xs font-bold">{formatTime(timeLeft)}</span>
        )}
      </div>
    );
  },
);

CountdownTimer.displayName = 'CountdownTimer';
export default CountdownTimer;
