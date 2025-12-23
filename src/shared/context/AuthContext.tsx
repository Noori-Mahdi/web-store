'use client';

import React, { createContext, useEffect, useMemo } from 'react';

import { useRouter } from 'next/navigation';

import { useToast } from './ToastContext';
import { getUserInfo } from '@/src/services/user';
import { logout } from '@/src/services/auth';

export type TContextReturnType = {
  user?: TUser;
  isLoggedIn: boolean;
  updateUserInfo: () => void;
  handleLogout: () => void;
};

export type TMainContextProps = {
  children: React.ReactNode;
};

export type TUser = {
  id: string;
  email: string;
  userName: string;
  phone: string;
  role: 'admin' | 'user';
};

type ApiError = {
  message: string;
  code?: string;
};

export type TMainContextState = {
  user: TUser | undefined;
};
export const Context = createContext<TContextReturnType>(
  {} as TContextReturnType,
);

const MainContext = (props: TMainContextProps) => {
  const router = useRouter();
  const { addToast } = useToast();

  const { children } = props;
  const [state, setState] = React.useState<TMainContextState>({
    user: undefined,
  });

  function isAxiosError<
    T extends Record<string, unknown> = Record<string, unknown>,
  >(error: unknown): error is { response?: { data?: { message?: string } } } {
    return (
      typeof error === 'object' &&
      error !== null &&
      'response' in error &&
      typeof (error as { response?: { data?: T } }).response?.data?.message ===
        'string'
    );
  }

  const updateUserInfo = async () => {
    try {
      await getUserInfo();
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        addToast(error.response?.data?.message ?? 'خطای ناشناخته');
      } else if (error instanceof Error) {
        addToast(error.message);
      } else {
        addToast('خطای ناشناخته');
      }
    }
  };

  const handleLogout = () => {
    logout().then(() => {
      router.push('/');
      setState((prevState) => ({ ...prevState, user: undefined }));
    });
  };

  const isLoggedIn = useMemo(() => {
    return !!state.user;
  }, [state.user]);

  useEffect(() => {
    updateUserInfo();
  }, []);

  return (
    <Context.Provider
      value={{
        ...state,
        isLoggedIn,
        updateUserInfo,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContext;
