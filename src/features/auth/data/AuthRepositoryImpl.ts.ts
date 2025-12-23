import { AuthRepository } from '../domain/AuthRepository';
import { AuthRemoteDataSource } from './AuthRemoteDataSource';
import { TOTP, TOTPConfirm } from './type';

export class AuthRepositoryImpl extends AuthRepository {
  async OTP(credentials: TOTP) {
    const data = await AuthRemoteDataSource.OTP(credentials);
  }

  async OTPConfirm(credentials: TOTPConfirm) {
    const data = await AuthRemoteDataSource.OTPConfirm(credentials);
  }
}
