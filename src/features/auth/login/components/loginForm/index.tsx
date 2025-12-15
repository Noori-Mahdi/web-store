'use client';
import { TValidationType, validateInput } from '@/src/lib/validation';
import { login } from '@/src/services/auth';
import Input from '@/src/shared/components/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  Button,
} from '@/src/shared/components/shadcn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { Context } from '@/src/shared/context/AuthContext';
import { useTranslations } from 'next-intl';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});
  const route = useRouter();
  const { updateUserInfo } = useContext(Context);
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
    const data = { userEmail: email, password: password };

    setLoading(true);
    try {
      await login(data);
      updateUserInfo();
      route.push('/');
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
            label="email"
            name="email"
            type="email"
            value={email}
            required
            disabled={loading}
            error={email ? error.email : []}
            onBlur={(e) => {
              handleValidation(e.target.value, 'email');
            }}
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
          <span>{t('no account yet ?')}</span>
          <Link
            href="/register"
            className=" text-primary hover:underline font-medium"
          >
            {t('create account')}
          </Link>
        </div>

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

export default LoginForm;
