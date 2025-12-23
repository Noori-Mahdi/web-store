'use client';

import { cn } from '@/src/lib/utils';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../shadcn';

const LanguageButton = ({ className }: { className: string }) => {
  const { language, setLanguage } = useLanguage();

  // فقط روی کلاینت رندر می‌کنیم
  if (typeof window === 'undefined') return null;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <Button className={cn('w-8 h-8', className)} onClick={toggleLanguage}>
      {language}
    </Button>
  );
};

export default LanguageButton;
