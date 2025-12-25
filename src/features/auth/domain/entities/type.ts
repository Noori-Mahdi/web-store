import { TResponse, TRole } from '@/src/shared/types';
// Res Type
export type TOTPConfirmRes = TResponse & {
  data?: TAuthAccount[];
};

export type TAuthSuccess = TResponse & {
  token: string;
};

// Req Type
export type TLoginReq = {
  email: string;
  password: string;
};

export type TRegisterReq = {
  userName: string;
  email: string;
  password: string;
};

export type TOTPReq = {
  mobile: string;
};

export type TOTPConfirmReq = {
  code: string;
  mobile: string;
};

// Auth Type
export type TAuthAccount = {
  id: string;
  userName: string;
  role: TRole;
  email: string;
  avatarUrl?: string;
};
