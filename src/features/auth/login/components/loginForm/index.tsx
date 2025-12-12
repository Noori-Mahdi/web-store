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

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});
  const route = useRouter();
  const { updateUserInfo } = useContext(Context);

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
    <Card className="w-full max-w-md shadow-xl rounded-2xl border border-gray-200 bg-white">
      <CardHeader className="text-center border-b border-gray-200 pb-4">
        <CardTitle className="text-2xl font-bold">
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
          <Input
            label="رمز عبور"
            name="password"
            type="password"
            value={password}
            required
            disabled={loading}
            error={password ? error.password : []}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            ورود
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 px-6 pb-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span>حساب کاربری ندارم ؟</span>
          <Link
            href="/register"
            className="text-indigo-600 hover:underline font-medium"
          >
            ساخت اکانت
          </Link>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>رمز عبور را فراموش کرده‌اید ؟</span>
          <Link
            href="/forgot-password"
            className="text-indigo-600 hover:underline font-medium"
          >
            بازیابی رمز عبور
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
