'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

// انواع زبان‌های پشتیبانی‌شده
type Language = 'en' | 'fa';

// تعریف نوع کانتکس
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// ایجاد کانتکس با مقادیر پیش‌فرض
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// کامپوننت Provider برای فراهم کردن کانتکس در سطح اپلیکیشن
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // مقدار اولیه زبان را از localStorage می‌گیریم یا پیش‌فرض را en قرار می‌دهیم
  const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : 'en';
  const [language, setLanguage] = useState<Language>(storedLanguage as Language || 'en');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // وقتی زبان تغییر کرد، مسیر را به‌روز می‌کنیم
    if (language) {
      const newPathname = pathname.replace(/^\/(fa|en)/, `/${language}`);
      router.push(newPathname);
      // ذخیره‌سازی زبان انتخابی در localStorage
      localStorage.setItem('language', language);
    }
  }, [language, pathname, router]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook برای دسترسی به کانتکس
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
