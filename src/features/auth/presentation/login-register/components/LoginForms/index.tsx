'use client';

import { useReducer } from 'react';
import LoginStepOne from '../LoginStepOne';
import LoginStepTwo from '../LoginStepTwo';
import LoginStepThree from '../LoginStepThree';

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
  return renderStep();
};

export default LoginForms;
