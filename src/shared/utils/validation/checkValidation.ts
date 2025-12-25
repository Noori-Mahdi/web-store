import z from 'zod';
import { AuthRules } from './rules';

export type TValidationType =
  | 'mobile'
  | 'email'
  | 'password'
  | 'passwordConfirm'
  | 'code';

export type TValidationResult = {
  isValid: boolean;
  message: string[];
};

export function checkValidation(
  type: TValidationType,
  value: string,
  valuesMatch?: string,
): TValidationResult {
  let schema: z.ZodTypeAny;

  switch (type) {
    case 'mobile':
      schema = AuthRules.mobile;
      break;
    case 'email':
      schema = AuthRules.email;
      break;
    case 'code':
      schema = AuthRules.code;
      break;
    case 'password':
      schema = AuthRules.password;
      break;
    case 'passwordConfirm':
      if (!valuesMatch) {
        return { isValid: false, message: ['PASSWORDS_NOT_MATCH'] };
      }
      schema = AuthRules.passwordConfirm(valuesMatch);
      break;
    default:
      return { isValid: false, message: ['INVALID_TYPE'] };
  }

  const result = schema.safeParse(value);

  if (!result.success) {
    const messages = result.error.issues.map((i) => i.message);
    return { isValid: false, message: messages };
  }

  return { isValid: true, message: [] };
}
