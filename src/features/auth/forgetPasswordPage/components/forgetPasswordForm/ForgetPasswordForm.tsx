'use client';

import { TValidationType, validateInput } from '@/src/lib/validation';
import { useState } from 'react';
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
import { useTranslations } from 'next-intl';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
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
    const data = { userEmail: email };
    console.log(data);
    setLoading(true);
    try {
      // await login(data);
      // updateUserInfo();
      route.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl rounded-2xl  backdrop-blur-md border-2 ">
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
          <Button
            type="submit"
            className="w-full cursor-pointer font-bold rounded-lg shadow-md transition-colors"
          >
            {t('send')}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 px-6 pb-6">
        <div className="flex gap-2 justify-between text-sm ">
          <span>{t('no account yet ?')}</span>
          <Link
            href="/register"
            className=" hover:underline text-primary font-medium"
          >
            {t('create account')}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForgetPasswordForm;
