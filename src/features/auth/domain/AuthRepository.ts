import { TResponse } from '@/src/shared/types';
import {
  TAuthSuccess,
  TLoginReq,
  TOTPConfirmReq,
  TOTPConfirmRes,
  TOTPReq,
  TRegisterReq,
} from './entities/type';

export class AuthRepository {
  async login(credentials: TLoginReq): Promise<TAuthSuccess> {
    throw new Error('Not implemented');
  }
  async register(credentials: TRegisterReq): Promise<TAuthSuccess> {
    throw new Error('Not implemented');
  }
  async logout(): Promise<TResponse> {
    throw new Error('Not implemented');
  }
  async OTP(credentials: TOTPReq): Promise<TResponse> {
    throw new Error('Not implemented');
  }

  async OTPConfirm(credentials: TOTPConfirmReq): Promise<TOTPConfirmRes> {
    throw new Error('Not implemented');
  }

  async resendOTP(credentials: TOTPReq): Promise<TResponse> {
    throw new Error('Not implemented');
  }
}
