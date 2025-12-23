'use client';
import { TValidationType, validateInput } from '@/src/lib/validation';
import { register } from '@/src/services/auth';
import Input from '@/src/shared/components/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  Button,
} from '@/src/shared/components/shadcn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TLoginFormsProps } from '../LoginStepOne';

const LoginStepThree = ({ state }: TLoginFormsProps) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});

  const route = useRouter();
  const t = useTranslations();

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

    const data = {
      userName,
      email,
      mobile: state.mobile,
      password,
    };

    setLoading(true);
    try {
      await register(data);
      route.push('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full mb-8 max-w-md shadow-xl rounded-2xl border-2 border-border bg-background backdrop-blur-md  ">
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

      <CardFooter className="flex flex-col gap-3 px-6 pb-6">
        <div className="flex gap-2 justify-between text-sm ">
          <span>{t('already registered ?')}</span>
          <Link
            href="/login"
            className="\ hover:underline font-medium text-primary"
          >
            {t('enter')}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginStepThree;
