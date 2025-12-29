'use client';
import Input from '@/src/shared/components/input';
import {
  Card,
  CardContent,
  Button,
  Spinner,
} from '@/src/shared/components/shadcn';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { OTP } from '@/src/features/auth/domain/usecases';
import { TActionLogin, TLoginState } from '../LoginForms';
import { useToast } from '@/src/shared/context/ToastContext';
import { toEnglishNumber, toPersianNumber } from '@/src/shared/utils/numbers';
import { validationClientHandler } from '@/src/shared/utils/validation/client/clientValidationHandler';
import { TValidationType } from '@/src/shared/utils/validation/checkValidation';
import { errorHandler } from '@/src/shared/utils/errorHandler';
import { AuthRepositoryImpl } from '@/src/features/auth/data/AuthRepositoryImpl';

export type TLoginFormsProps = {
  state: TLoginState;
  dispatch: React.Dispatch<TActionLogin>;
  className?: string;
};

const LoginStepOne = ({ state, dispatch }: TLoginFormsProps) => {
  const [mobile, setMobile] = useState(state.mobile ?? '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});

  const t = useTranslations();
  const { addToast } = useToast();

  const handleValidation = (value: string, name: TValidationType) => {
    validationClientHandler(value, name, setError);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalizedValue = toEnglishNumber(mobile);

    const data = { mobile: normalizedValue };

    setLoading(true);
    try {
      const repo = new AuthRepositoryImpl();
      const res = await OTP(repo, data);
      addToast(res.message, 'success');
      dispatch({ type: 'setMobile', payload: toEnglishNumber(mobile) });
      dispatch({ type: 'setStep', payload: 2 });
    } catch (error: unknown) {
      const res = errorHandler(error);
      if (typeof res === 'object') {
        setError(res);
      } else {
        addToast(res);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="w-full shadow-xl rounded-2xl  backdrop-blur-md border-2 border-border bg-background ">
      <CardContent className="px-6 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="mobile"
            name="mobile"
            type="mobile"
            maxLength={11}
            numeric
            value={toPersianNumber(mobile)}
            required
            disabled={loading}
            error={mobile ? error.mobile : []}
            onBlur={(e) => {
              handleValidation(e.target.value, 'mobile');
            }}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Button
            size={'lg'}
            type="submit"
            loading={loading}
            disabled={loading}
            className="w-full  cursor-pointer font-semibold rounded-lg shadow-md transition-colors"
          >
            {t('enter')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginStepOne;
