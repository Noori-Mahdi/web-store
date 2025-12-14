'use client';

import React, { createContext, useEffect, useMemo } from 'react';

import { useRouter } from 'next/navigation';
import { logout } from '@/src/services/auth';
import { getUserInfo } from '@/src/services/user';

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

export type TMainContextState = {
  user: TUser | undefined;
};
export const Context = createContext<TContextReturnType>(
  {} as TContextReturnType,
);

const MainContext = (props: TMainContextProps) => {
  const router = useRouter();
  const { children } = props;
  const [state, setState] = React.useState<TMainContextState>({
    user: undefined,
  });

  const updateUserInfo = () => {
    getUserInfo()
      .then((res) => {
        const user = res.data.data;
        setState((prevState) => ({ ...prevState, user }));
      })
      .catch((e) => {
        console.error(e);
      });
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
