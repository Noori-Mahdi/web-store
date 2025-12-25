import ApiRouter from '@/src/shared/ApiRouter';
import api from '@/src/lib/axios';
import {
  TAuthSuccess,
  TLoginReq,
  TOTPConfirmReq,
  TOTPConfirmRes,
  TOTPReq,
  TRegisterReq,
} from '../domain/entities/type';
import { TResponse } from '@/src/shared/types';

export const AuthRemoteDataSource = {
  login: async (data: TLoginReq) => {
    const res = await api.post<TAuthSuccess>(ApiRouter.login, data);
    return res.data;
  },

  register: async (data: TRegisterReq) => {
    const res = await api.post<TAuthSuccess>(ApiRouter.register, data);
    return res.data;
  },

  logout: async () => {
    const res = await api.post<TResponse>('/auth/logout');
    return res.data;
  },

  OTP: async (data: TOTPReq) => {
    const res = await api.post<TResponse>(ApiRouter.OTP, data);
    return res.data;
  },

  OTPConfirm: async (data: TOTPConfirmReq) => {
    const res = await api.post<TOTPConfirmRes>(ApiRouter.OTPConfirm, data);
    return res.data;
  },

  resendOTP: async (data: TOTPReq) => {
    const res = await api.post<TResponse>(ApiRouter.ResendOTP, data);
    return res.data;
  },
};
