'use client';

import { cn } from '@/src/lib/utils';
import { useLanguage } from '../../context/LanguageContext';
import { Switch } from '../shadcn';
import { useEffect, useState } from 'react';

const LanguageSwitch = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  const isEnglish = language === 'en';

  const toggleLanguage = () => {
    setLanguage(isEnglish ? 'fa' : 'en');
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-xs font-bold">FA</span>
      <Switch checked={isEnglish} onCheckedChange={toggleLanguage} />
      <span className="text-xs font-bold">EN</span>
    </div>
  );
};

export default LanguageSwitch;
