'use client';

import React, { createContext, useEffect, useMemo } from 'react';

import { useRouter } from 'next/navigation';

import { useToast } from './ToastContext';
import { getUserInfo } from '@/src/services/user';
import { errorHandler } from '../utils/errorHandler';

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

  const updateUserInfo = async () => {
    try {
      await getUserInfo();
    } catch (error: unknown) {
      addToast(errorHandler(error));
    }
  };

  const handleLogout = () => {
    // logout().then(() => {
    //   router.push('/');
    //   setState((prevState) => ({ ...prevState, user: undefined }));
    // });
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
