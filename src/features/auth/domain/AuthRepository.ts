import { TOTP, TOTPConfirm } from '../data/type';

export class AuthRepository {
  async OTP(credentials: TOTP) {
    throw new Error('Not implemented');
  }

  async OTPConfirm(credentials: TOTPConfirm) {
    throw new Error('Not implemented');
  }
}
