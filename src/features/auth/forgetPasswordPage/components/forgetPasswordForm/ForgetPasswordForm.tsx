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

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});
  const route = useRouter();

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
    console.log(data)
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
    <Card className="w-full max-w-md shadow-xl rounded-2xl bg-neutral-800/60 backdrop-blur-md border-2 border-white/10 ">
      <CardHeader className="text-center border-b-2 border-neutral-600 pb-4">
        <CardTitle className="text-xl font-bold text-white">
          ورود به حساب کاربری
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="ایمیل"
            name="email"
            type="email"
            value={email}
            placeholder="example@gmail.com"
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
            className="w-full bg-yellow-400 hover:bg-yellow-300 cursor-pointer text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            تایید
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 px-6 pb-6">
        <div className="flex gap-2 justify-between text-sm text-gray-300">
          <span>حساب کاربری ندارم ؟</span>
          <Link
            href="/register"
            className="text-yellow-400 hover:text-yellow-300 hover:underline font-medium"
          >
            ساخت اکانت
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForgetPasswordForm;
