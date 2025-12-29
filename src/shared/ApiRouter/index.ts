export default class ApiRouter {
  static OTP = '/auth/otp/send';
  static ResendOTP = '/auth/otp/resend';
  static OTPConfirm = '/auth/otp/verify';

  static login = '/auth/login';
  static register = '/auth/register';

  static users = '/dashboard/users';
}
