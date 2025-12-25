import { toEnglishNumber } from '../../numbers';
import { checkValidation, TValidationType } from '../checkValidation';
import { Dispatch, SetStateAction } from 'react';

export type TErrorState = Partial<Record<TValidationType, string[]>>;

export const validationClientHandler = (
  value: string,
  name: TValidationType,
  setError: Dispatch<SetStateAction<TErrorState>>,
) => {
  if (!value.trim()) {
    setError((prev) => {
      const newErr = { ...prev };
      delete newErr[name];
      return newErr;
    });
    return;
  }

  const normalized = toEnglishNumber(value);
  const res = checkValidation(name, normalized);

  setError((prev) => {
    const newErr = { ...prev };
    if (res.isValid) {
      delete newErr[name];
    } else {
      newErr[name] = res.message;
    }
    return newErr;
  });
};
