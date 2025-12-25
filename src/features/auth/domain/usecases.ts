import { AuthRepository } from './AuthRepository';
import {
  TLoginReq,
  TOTPConfirmReq,
  TOTPReq,
  TRegisterReq,
} from './entities/type';

export const OTP = async (repo: AuthRepository, credentials: TOTPReq) => {
  return await repo.OTP(credentials);
};

export const login = async (repo: AuthRepository, credentials: TLoginReq) => {
  return await repo.login(credentials);
};
export const register = async (
  repo: AuthRepository,
  credentials: TRegisterReq,
) => {
  return await repo.register(credentials);
};
export const logout = async (repo: AuthRepository) => {
  return await repo.logout();
};

export const OTPConfirm = async (
  repo: AuthRepository,
  credentials: TOTPConfirmReq,
) => {
  return await repo.OTPConfirm(credentials);
};

export const resendOTP = async (repo: AuthRepository, credentials: TOTPReq) => {
  return await repo.resendOTP(credentials);
};
