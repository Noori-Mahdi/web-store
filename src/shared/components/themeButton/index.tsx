'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../shadcn';
import { cn } from '@/src/lib/utils';

export function ThemeButton({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  if (typeof window === 'undefined') return null;

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);

    document.cookie = `theme=${nextTheme}; path=/; max-age=31536000`;
  };

  return (
    <Button
      onClick={toggleTheme}
      className={cn(
        'flex w-8 h-8 border border-border items-center justify-center p-2',
        className,
      )}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
