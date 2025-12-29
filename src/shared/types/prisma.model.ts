export type TUser = {
  id: string;
  userName: string;
  email: string;
  mobile: string;
  password: string;
  ban: boolean;
  role: 'admin' | 'user';
  avatarUrl: string;
  addresses: TAddress[];
  createdAt: string;
  updatedAt: string;
};

export type TAddress = {
  id: string;
  address: string;
  city: string;
  Province: string;
};

export type TOTP = {
  id: string;
  mobile: string;
  code: string;
  expiresAt: string;
  used: boolean;
  attempts: number;
  createdAt: string;
};
