'use client';
import Input from '@/src/shared/components/input';
import {
  Card,
  CardContent,
  CardFooter,
  Button,
} from '@/src/shared/components/shadcn';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AuthRepositoryImpl } from '@/src/features/auth/data/AuthRepositoryImpl.ts';
import { OTP, OTPConfirm } from '@/src/features/auth/domain/usecases';
import { TValidationType, validateInput } from '@/src/lib/validation';
import { TActionLogin, TLoginState } from '../LoginForms';
import { useToast } from '@/src/shared/context/ToastContext';
import { TLoginFormsProps } from '../LoginStepOne';

const LoginStepTwo = ({ state, dispatch }: TLoginFormsProps) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});

  const t = useTranslations();
  const { addToast } = useToast();

  const handleValidation = (value: string, name: TValidationType) => {
    const res = validateInput(name, value);
    if (res.isValid) {
      setError((prev) => {
        const newErr = { ...prev };
        delete newErr[name];
        return newErr;
      });
    } else {
      setError((prev) => ({
        ...prev,
        [name]: res.message,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.mobile) {
      return;
    }
    const data = { code, mobile: state.mobile };
    setLoading(true);

    try {
      const repo = new AuthRepositoryImpl();
      await OTPConfirm(repo, data);
      dispatch({ type: 'setCode', payload: true });
      dispatch({ type: 'setStep', payload: 3 });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl rounded-2xl  backdrop-blur-md border-2 border-border bg-background ">
      <CardContent className="px-6 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="code"
            name="code"
            type="code"
            value={code}
            required
            disabled={loading}
            error={code ? error.code : []}
            onBlur={(e) => {
              handleValidation(e.target.value, 'mobile');
            }}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full  cursor-pointer font-semibold rounded-lg shadow-md transition-colors"
          >
            {t('enter')}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 px-6 pb-6">
        <div className="flex gap-2 justify-between text-sm ">
          <span>{t('forgot your password ?')}</span>
          <Link
            href="/forgot-password"
            className="hover:underline font-medium text-primary"
          >
            {t('recover password')}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginStepTwo;
