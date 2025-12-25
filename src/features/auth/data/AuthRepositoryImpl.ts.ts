import { TResponse } from '@/src/shared/types';
import { AuthRepository } from '../domain/AuthRepository';
import {
  TAuthSuccess,
  TLoginReq,
  TOTPConfirmReq,
  TOTPConfirmRes,
  TOTPReq,
  TRegisterReq,
} from '../domain/entities/type';
import { AuthRemoteDataSource } from './AuthRemoteDataSource';

export class AuthRepositoryImpl extends AuthRepository {
  async login(credentials: TLoginReq): Promise<TAuthSuccess> {
    const data = await AuthRemoteDataSource.login(credentials);
    return data;
  }
  async register(credentials: TRegisterReq): Promise<TAuthSuccess> {
    const data = await AuthRemoteDataSource.register(credentials);
    return data;
  }
  async logout(): Promise<TResponse> {
    const data = await AuthRemoteDataSource.logout();
    return data;
  }

  async OTP(credentials: TOTPReq): Promise<TResponse> {
    const data = await AuthRemoteDataSource.OTP(credentials);
    return data;
  }

  async OTPConfirm(credentials: TOTPConfirmReq): Promise<TOTPConfirmRes> {
    const data = await AuthRemoteDataSource.OTPConfirm(credentials);
    return data;
  }

  async resendOTP(credentials: TOTPReq): Promise<TResponse> {
    const data = await AuthRemoteDataSource.resendOTP(credentials);
    return data;
  }
}
