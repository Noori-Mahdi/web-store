import { TOTP, TOTPConfirm } from '../data/type';
import { AuthRepository } from './AuthRepository';

export const OTP = async (repo: AuthRepository, credentials: TOTP) => {
  return await repo.OTP(credentials);
};

export const OTPConfirm = async (
  repo: AuthRepository,
  credentials: TOTPConfirm,
) => {
  return await repo.OTPConfirm(credentials);
};
