'use client';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export type TToastProps = {
  id: string;
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: TToastProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const t = useTranslations();

  useEffect(() => {
    const duration = 5000;
    const intervalTime = 50;
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;

        if (next >= 100) {
          clearInterval(interval);
          setVisible(false);
          onClose();
          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onClose]);

  if (!visible || !message) return null;

  return (
    <div className="relative w-80 bg-opacity-75 bg-neutral-800 p-2 py-3 rounded-lg shadow-lg z-50 flex items-center justify-between">
      <div
        className={twMerge(
          'text-xs font-medium tracking-wide',
          type === 'error'
            ? 'text-red-500'
            : type === 'warning'
              ? 'text-yellow-500'
              : 'text-green-500',
        )}
      >
        {t(message)}
      </div>

      <X
        size={15}
        className="cursor-pointer hover:text-red-700"
        onClick={() => {
          setVisible(false);
          onClose();
        }}
      />

      <div className="absolute w-[96%] bottom-0 left-1/2 -translate-x-1/2 h-1 bg-neutral-800 overflow-hidden rounded-b-md">
        <div
          style={{ width: `${progress}%` }}
          className={twMerge(
            'h-full transition-[width] duration-50',
            type === 'error'
              ? 'bg-red-500'
              : type === 'warning'
                ? 'bg-yellow-500'
                : 'bg-green-500',
          )}
        />
      </div>
    </div>
  );
};

export default Toast;
