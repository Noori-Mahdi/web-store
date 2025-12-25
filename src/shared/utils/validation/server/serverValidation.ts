import {
  checkValidation,
  TValidationType,
} from '@/src/shared/utils/validation/checkValidation';

type TErrorState = Partial<Record<TValidationType, string[]>>;

export const serverValidation = (inputs: { [key: string]: string }) => {
  const newErr: TErrorState = {};
  Object.entries(inputs).forEach(([key, value]) => {
    const res = checkValidation(key as TValidationType, value);
    if (!res.isValid) {
      newErr[key as TValidationType] = res.message;
    }
  });
  return newErr;
};
