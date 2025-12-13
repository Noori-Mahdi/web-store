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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const [error, setError] = useState<Partial<Record<string, string[]>>>({});

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
    const data = {
      userName,
      email,
      phone,
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
    <Card className="w-full max-w-md shadow-xl rounded-2xl border border-gray-200 bg-white">
      <CardHeader className="text-center border-b border-gray-200 pb-4">
        <CardTitle className="text-2xl font-bold">ثبت نام</CardTitle>
      </CardHeader>

      <CardContent className="px-6 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="نام کاربری"
            name="userName"
            value={userName}
            required
            disabled={loading}
            error={userName ? error.userName : []}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Input
            label="ایمیل"
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
            label="شماره تماس"
            name="phone"
            value={phone}
            placeholder="09123456789"
            maxLength={11}
            disabled={loading}
            error={phone ? error.phone : []}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={(e) => handleValidation(e.target.value, 'phone')}
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
            onBlur={(e) => handleValidation(e.target.value, 'password')}
          />
          <Input
            label="تایید رمز عبور"
            name="passwordConfirm"
            type="password"
            value={passwordConfirm}
            required
            disabled={loading}
            error={password || passwordConfirm ? error.passwordConfirm : []}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onBlur={(e) => handleValidation(e.target.value, 'passwordConfirm')}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            ثبت نام
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 px-6 pb-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span>قبلاً ثبت‌نام کرده‌اید؟</span>
          <Link
            href="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            ورود
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
