'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/src/lib/utils';
import { Switch } from '../shadcn';
import { useEffect, useState } from 'react';

export function ThemeSwitch({ className }: { className?: string }) {
  const { theme, setTheme,resolvedTheme } = useTheme();


  if (!resolvedTheme) return null;

  const isDark = theme === 'dark';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Sun className="h-4 w-4 text-muted-foreground" />

      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />

      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}
