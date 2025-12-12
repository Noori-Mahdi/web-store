import { z } from 'zod';

export type TValidationType =
  | 'phone'
  | 'email'
  | 'password'
  | 'passwordConfirm';

type TValidationResult = {
  isValid: boolean;
  message: string[] | [];
};

export function validateInput(
  typeValidation: TValidationType,
  value: string | number,
  valuesMatch?: string | number,
): TValidationResult {
  const schema =
    typeValidation === 'phone'
      ? z.string().regex(/^09\d{9}$/, { message: 'شماره موبایل معتبر نیست' })
      : typeValidation === 'email'
        ? z.string().refine((v) => /\S+@\S+\.\S+/.test(v), {
            message: 'ایمیل معتبر نیست',
          })
        : typeValidation === 'password'
          ? z
              .string()
              .min(8, { message: 'رمز عبور باید حداقل ۸ کاراکتر باشد' })
              .refine((v) => /[A-Z]/.test(v), {
                message: 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد',
              })
              .refine((v) => /[a-z]/.test(v), {
                message: 'رمز عبور باید حداقل یک حرف کوچک داشته باشد',
              })
              .refine((v) => /\d/.test(v), {
                message: 'رمز عبور باید حداقل یک عدد داشته باشد',
              })
          : typeValidation === 'passwordConfirm' && valuesMatch
            ? z.string().refine((value) => value === valuesMatch, {
                message: 'رمز عبورها یکسان نیستند',
              })
            : z.string();

  if (!schema) {
    return { isValid: false, message: ['نوع ولیدیشن نامعتبر است'] };
  }

  const result = schema.safeParse(value);

  if (!result.success) {
    const messages = result.error.issues.map((issue) => issue.message);
    return { isValid: false, message: messages };
  }

  return { isValid: false, message: [] };
}
