import { TResponse, TRole } from '@/src/shared/types';

export type TUser = {
  id: string;
  userName: string;
  email: string;
  mobile: string;
  password: string;
  ban: boolean;
  role: TRole;
  avatarUrl: string;
  addresses: Address[];
  createdAt: string;
  updatedAt: string;
};

export type Address = {
  id: string;
  address: string;
  city: string;
  Province: string;
};

// Res
export type TUsersRes = TResponse & {
  data?: TUser[];
  totalCount?: number;
};

// serverAction

export type TAddUser = Pick<
  TUser,
  'userName' | 'email' | 'role' | 'password' | 'mobile' | 'ban'
>;

export type TUpdateUser = Partial<
  Pick<TUser, 'userName' | 'email' | 'mobile' | 'password' | 'role' | 'ban'>
> & { id: string };

// Table
export type TUserTable = Omit<
  TUser,
  'addresses' | 'updatedAt' | 'avatarUrl' | 'password'
>;
