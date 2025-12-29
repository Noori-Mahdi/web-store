'use client';

import Input from '@/src/shared/components/input';
import {
  Card,
  CardContent,
  CardFooter,
  Button,
} from '@/src/shared/components/shadcn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TLoginFormsProps } from '../LoginStepOne';
import { TValidationType } from '@/src/shared/utils/validation/checkValidation';
import { validationClientHandler } from '@/src/shared/utils/validation/client/clientValidationHandler';
import { errorHandler } from '@/src/shared/utils/errorHandler';
import { useToast } from '@/src/shared/context/ToastContext';
import { register } from '@/src/features/auth/domain/usecases';
import { AuthRepositoryImpl } from '@/src/features/auth/data/AuthRepositoryImpl';

const LoginStepThree = ({ state }: TLoginFormsProps) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});
  const { addToast } = useToast();
  const route = useRouter();
  const t = useTranslations();

  const handleValidation = (value: string, name: TValidationType) => {
    validationClientHandler(value, name, setError, passwordConfirm);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.mobile) {
      return;
    }

    const data = {
      userName,
      email,
      password,
    };

    setLoading(true);
    try {
      const repo = new AuthRepositoryImpl();
      const result = await register(repo, data);
      addToast(result.message, 'success');
      route.push('/');
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
    <Card className="w-full shadow-xl  rounded-2xl  backdrop-blur-md border-2 border-border bg-background ">
      <CardContent className="px-6 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="userName"
            name="userName"
            value={userName}
            required
            disabled={loading}
            error={userName ? error.userName : []}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Input
            label="email"
            name="email"
            type="email"
            value={email}
            placeholder="example@gmail.com"
            required
            disabled={loading}
            error={email ? error.email : []}
            onBlur={(e) => handleValidation(e.target.value, 'email')}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="password"
            name="password"
            type="password"
            value={password}
            required
            showEye
            disabled={loading}
            error={password ? error.password : []}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => handleValidation(e.target.value, 'password')}
          />
          <Input
            label="passwordConfirm"
            name="passwordConfirm"
            type="password"
            value={passwordConfirm}
            required
            showEye
            disabled={loading}
            error={password || passwordConfirm ? error.passwordConfirm : []}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onBlur={(e) => handleValidation(e.target.value, 'passwordConfirm')}
          />

          <Button
            type="submit"
            className="w-full cursor-pointer font-semibold rounded-lg shadow-md transition-colors"
          >
            {t('register')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginStepThree;
