import ApiRouter from '@/src/shared/ApiRouter';
import { TOTP, TOTPConfirm } from './type';
import api from '@/src/lib/axios';

export const AuthRemoteDataSource = {
  OTP: async (data: TOTP) => {
    const res = await api.post(ApiRouter.OTP, data);
    return res.data;
  },

  OTPConfirm: async (data: TOTPConfirm) => {
    const res = await api.post(ApiRouter.OTPConfirm, data);
    return res.data;
  },
};
