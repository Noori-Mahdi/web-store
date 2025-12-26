'use client';
import {
  Card,
  CardContent,
  CardFooter,
  Button,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/shared/components/shadcn';
import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AuthRepositoryImpl } from '@/src/features/auth/data/AuthRepositoryImpl.ts';
import {
  login,
  OTPConfirm,
  resendOTP,
} from '@/src/features/auth/domain/usecases';
import { useToast } from '@/src/shared/context/ToastContext';
import { TLoginFormsProps } from '../LoginStepOne';
import { TValidationType } from '@/src/shared/utils/validation/checkValidation';
import OTPInput from '../OTPInput';
import { validationClientHandler } from '@/src/shared/utils/validation/client/clientValidationHandler';
import { errorHandler } from '@/src/shared/utils/errorHandler';
import CountdownTimer from '@/src/shared/components/timer';
import Modal from '@/src/shared/components/modal';
import { TAuthAccount } from '@/src/features/auth/domain/entities/type';
import { Check, Pencil } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Input from '@/src/shared/components/input';
import { useRouter } from 'next/navigation';

const LoginStepTwo = ({ state, dispatch }: TLoginFormsProps) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});
  const [showTimer, setShowTimer] = useState(true);
  const [accounts, setAccounts] = useState<TAuthAccount[]>([]);
  const [accountSelected, setAccountSelected] = useState<TAuthAccount | null>(
    null,
  );
  const [showLoginForm, setShowLoginForm] = useState(false);
  const route = useRouter();

  const t = useTranslations();
  const { addToast } = useToast();
  const timerRef = useRef<{ reset: () => void }>(null);

  const handleValidation = (value: string, name: TValidationType) => {
    validationClientHandler(value, name, setError);
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
      const res = await OTPConfirm(repo, data);
      addToast(res.message, 'success');
      dispatch({ type: 'setCode', payload: true });
      if (res.data) {
        console.log(res.data);
        setAccounts(res.data);
      } else {
        dispatch({ type: 'setStep', payload: 3 });
      }
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

  const handleResetCode = async () => {
    setLoading(true);
    try {
      const repo = new AuthRepositoryImpl();
      const result = await resendOTP(repo, {
        mobile: state.mobile,
      });
      addToast(result.message, 'success');
      timerRef.current?.reset();
      setShowTimer(true);
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

  const handleLogin = async () => {
    setLoading(true);
    if (!accountSelected) return;
    try {
      const repo = new AuthRepositoryImpl();
      const result = await login(repo, {
        email: accountSelected.email,
        password: password,
      });
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
    <>
      <Card className="w-full shadow-xl rounded-2xl  backdrop-blur-md border-2 border-border bg-background ">
        <CardContent className="px-6 py-4">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center text-sm font-bold text-primary items-center flex-col gap-5"
          >
            <OTPInput
              error={code ? error.code : []}
              required
              disabled={loading}
              onChange={(e) => {
                setCode(e.target.value);
              }}
              onBlur={(e) => handleValidation(e.target.value, 'code')}
              name="code"
              count={5}
            />
            <CountdownTimer
              seconds={120}
              expiredMessage={t('OTP_EXPIRED')}
              ref={timerRef}
              onEnd={() => {
                setShowTimer(false);
              }}
              className=""
            />
            {!showTimer && (
              <div
                onClick={handleResetCode}
                className="text-center font-medium text-primary-300-main hover:text-primary-400 cursor-pointer"
              >
                {t('OTP_RESEND')}
              </div>
            )}
            <Button
              loading={loading}
              disabled={loading}
              type="submit"
              className="w-full  cursor-pointer font-semibold rounded-lg shadow-md transition-colors"
            >
              {t('enter')}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 px-6 pb-6">
          <div
            onClick={() => {
              (dispatch({ type: 'setStep', payload: 1 }),
                dispatch({ type: 'setMobile', payload: '' }));
            }}
            className="flex gap-2 hover:text-primary cursor-pointer items-center text-start justify-between text-sm "
          >
            <Pencil size={14} />
            <span>{state.mobile}</span>
          </div>
        </CardFooter>
      </Card>
      <Modal
        force
        isOpen={accounts.length > 0}
        onClose={() => {
          setAccounts([]);
        }}
        label={'OTP_ACCOUNTS_WITH_MOBILE'}
      >
        <ul className="flex flex-col gap-2">
          {accounts.map((e) => (
            <li
              key={e.id}
              className={cn(
                'flex border-2 cursor-pointer border-border rounded-lg  p-3 bg-background items-end',
                accountSelected?.id === e.id && 'border-primary',
              )}
              onClick={() => {
                setAccountSelected(e);
              }}
            >
              <div className="flex flex-1 gap-2">
                <Avatar
                  className={cn(
                    'cursor-pointer flex justify-center items-center  w-10 h-10 rounded-full p-1 box-content border-2',
                    accountSelected?.id === e.id && 'border-primary',
                  )}
                >
                  <AvatarImage className="rounded-full" src={e.avatarUrl} />
                  <AvatarFallback className="font-extrabold text-xl">
                    {e.userName.trim()?.charAt(0)?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span className="border-2 mr-2 text-sm rounded-lg px-2 py-0.5">
                    {e.role}
                  </span>
                  <span className="">{e.userName}</span>

                  <span>
                    <span className="block">{e.email}</span>
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={cn(
                    'w-3 h-3 p-0.5  box-content rounded-full flex justify-center items-center border border-border',
                    accountSelected?.id === e.id && 'bg-primary ',
                  )}
                >
                  {accountSelected?.id === e.id && (
                    <Check className="text-black" />
                  )}
                </div>
              </div>
            </li>
          ))}
          <div className="flex w-full gap-4 mt-4">
            <Button
              loading={loading}
              disabled={loading}
              onClick={() => {
                if (accountSelected) {
                  setShowLoginForm(true);
                } else {
                  addToast('یک حساب انتخاب کن ', 'warning');
                }
              }}
              className="flex-1"
            >
              {t('enter')}
            </Button>
            <Button
              loading={loading}
              disabled={loading}
              variant={'outline'}
              onClick={() => {
                dispatch({ type: 'setStep', payload: 3 });
              }}
              className="flex-1"
            >
              {t('OTP_LOGIN_WITH_NEW_ACCOUNT')}
            </Button>
          </div>
        </ul>
      </Modal>
      <Modal
        force
        classNameBox="px-6 py-1 pb-5"
        isOpen={showLoginForm}
        onClose={() => {
          setShowLoginForm(false);
        }}
      >
        {accountSelected && (
          <div className="flex gap-5 flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <Avatar
                className={cn(
                  'cursor-pointer flex justify-center items-center  w-20 h-20 rounded-full p-1 box-content border-2',
                )}
              >
                <AvatarImage
                  className="rounded-full"
                  src={accountSelected.avatarUrl}
                />
                <AvatarFallback className="font-extrabold text-xl">
                  {accountSelected.userName.trim()?.charAt(0)?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>{accountSelected.userName}</span>
            </div>
            <Input
              name="email"
              value={accountSelected.email}
              readonly
              label="email"
              required
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
            <div className="flex gap-2 w-full">
              <Button
                loading={loading}
                disabled={loading}
                onClick={() => {
                  handleLogin();
                }}
                className="flex-1"
              >
                {t('enter')}
              </Button>
              <Button
                loading={loading}
                disabled={loading}
                onClick={() => {
                  setShowLoginForm(false);
                  setPassword('');
                }}
                variant={'outline'}
                className="flex-1"
              >
                {t('cancel')}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default LoginStepTwo;
