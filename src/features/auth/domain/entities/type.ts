import { TResponse, TRole } from '@/src/shared/types';
import { TOTP, TUser } from '@/src/shared/types/prisma.model';
// Res Type
export type TOTPConfirmRes = TResponse & {
  data?: TAuthAccount[];
};

export type TAuthSuccess = TResponse & {
  token: string;
};

// Req Type
export type TLoginReq = Pick<TUser, 'email' | 'password'>;
export type TRegisterReq = Pick<TUser, 'userName' | 'email' | 'password'>;
export type TOTPReq = Pick<TUser, 'mobile'>;
export type TOTPConfirmReq = Pick<TUser, 'mobile'> & Pick<TOTP, 'code'>;

// Auth Type
export type TAuthAccount = Pick<
  TUser,
  'id' | 'userName' | 'role' | 'email' | 'avatarUrl'
>;
