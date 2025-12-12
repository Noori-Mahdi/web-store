import { api } from '@/src/services/api';
import { endPoints } from '@/src/services/routes/endPoint';

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

const login = (data: TLoginData) => api.post(endPoints.login, data);
const register = (data: TRegisterData) => api.post(endPoints.register, data);
const logout = () => api.get('/auth/logout');

export { login, register, logout };
