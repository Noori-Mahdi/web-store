'use client';

import { useReducer, useState } from 'react';
import LoginStepOne from '../LoginStepOne';
import LoginStepTwo from '../LoginStepTwo';
import LoginStepThree from '../LoginStepThree';
import Logo from '@/src/shared/components/logo';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Alert from '@/src/shared/components/alert';

export type TLoginState = {
  step: number;
  code: boolean;
  mobile: string;
};

export type TActionLogin =
  | { type: 'setStep'; payload: number }
  | { type: 'setMobile'; payload: string }
  | { type: 'setCode'; payload: boolean }
  | { type: 'setMobile'; payload: string }
  | { type: 'reset' };

const initialState: TLoginState = {
  step: 1,
  code: false,
  mobile: '',
};

function loginReducer(state: TLoginState, action: TActionLogin): TLoginState {
  switch (action.type) {
    case 'setStep':
      return { ...state, step: action.payload };
    case 'setMobile':
      return { ...state, mobile: action.payload };
    case 'setCode':
      return { ...state, code: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const LoginForms = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [showAlert, setShowAlert] = useState(false);
  const roters = useRouter();
  const t = useTranslations();

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <LoginStepOne state={state} dispatch={dispatch} />;
      case 2:
        return <LoginStepTwo state={state} dispatch={dispatch} />;

      case 3:
        return <LoginStepThree state={state} dispatch={dispatch} />;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center ">
      <div className="flex items-center gap-3 max-w-[400px] md:max-w-[600px] w-full justify-between bg-background rounded-lg border-2 border-border px-4 py-2">
        <div className="flex items-center gap-2 justify-between ">
          <Logo width={50} height={50} />
          <h1 className="text-base font-bold flex gap-1">
            <span className="rtl:order-2">{t('web')}</span>{' '}
            <span className="text-primary">{t('store')}</span>
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <ChevronRight
            onClick={() => {
              setShowAlert(true);
            }}
            className="hover:text-primary cursor-pointer rtl:rotate-180"
          />
        </div>
        <Alert
          onAccept={() => roters.back()}
          onCancel={() => {
            setShowAlert(false);
          }}
          isOpen={showAlert}
          label={'هشدار'}
          type={'warning'}
          massege="با تایید کردن این پیام به صفحه قبلی منتقل می شوید و مراحل ورود کنسل می شود."
        />
      </div>
      {renderStep()}
    </div>
  );
};

export default LoginForms;
