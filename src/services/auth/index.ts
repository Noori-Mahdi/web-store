import api from '@/src/lib/axios';
import ApiRouter from '@/src/shared/ApiRouter';

export type TLoginData = {
  userEmail: string;
  password: string;
};

export type TRegisterData = {
  userName: string;
  email: string;
  phone: string;
  password: string;
};

export type TLoginResponse = {
  message: string;
  token: string;
};

const login = (data: TLoginData) => api.post(ApiRouter.login, data);
const register = (data: TRegisterData) => api.post(ApiRouter.register, data);
const logout = () => api.post('/auth/logout');

export { login, register, logout };
