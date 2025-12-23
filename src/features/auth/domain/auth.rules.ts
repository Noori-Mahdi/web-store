import { z } from 'zod';

export const AuthRules = {
  mobile: z.string().regex(/^09\d{9}$/, 'MOBILE_INVALID'),

  code: z
    .string()
    .length(5, 'OTP_INVALID_LENGTH')
    .regex(/^\d+$/, 'OTP_INVALID_FORMAT'),

  email: z.string().regex(/\S+@\S+\.\S+/, 'EMAIL_INVALID'),

  password: z
    .string()
    .min(8, 'PASSWORD_MIN_LENGTH')
    .regex(/[A-Z]/, 'PASSWORD_UPPERCASE_REQUIRED')
    .regex(/[a-z]/, 'PASSWORD_LOWERCASE_REQUIRED')
    .regex(/\d/, 'PASSWORD_NUMBER_REQUIRED'),

  passwordConfirm: (password: string) =>
    z.string().refine((v) => v === password, {
      message: 'PASSWORDS_NOT_MATCH',
    }),
};
