'use client';

import { cn } from '@/src/lib/utils';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../shadcn';

const LanguageButton = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  if (typeof window === 'undefined') return null;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <Button
      className={cn('w-7 h-7 text-sm font-bold ', className)}
      onClick={toggleLanguage}
    >
      {language}
    </Button>
  );
};

export default LanguageButton;
