'use client';

import React, { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { LanguageProvider } from '@/src/shared/context/LanguageContext';
import { ToastProvider } from '@/src/shared/context/ToastContext';
import { ThemeProvider } from '@/src/provider/theme-provider';
import MainContext from '@/src/shared/context/AuthContext';
import UIWrapper from './UIWrapper';

type Props = {
  children: ReactNode;
  locale: string;
  messages?: Record<string, string>;
};

export default function AppLogicWrapper({
  children,
  locale,
  messages = {},
}: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LanguageProvider>
        <ToastProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainContext>{children}</MainContext>
          </ThemeProvider>{' '}
        </ToastProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}
