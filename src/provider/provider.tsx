'use client';

import React from 'react';
import { ToastProvider } from '../shared/context/ToastContext';

export default function ContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ToastProvider>{children}</ToastProvider>;
}
