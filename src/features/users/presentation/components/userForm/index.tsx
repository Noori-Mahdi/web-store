'use client';
import { TMode } from '@/src/shared/types';
import { useState } from 'react';
import { addUser } from '../../serverAction/addUser';
import { updateUser } from '../../serverAction/updateUser';
import { validationClientHandler } from '@/src/shared/utils/validation/client/clientValidationHandler';
import { TValidationType } from '@/src/shared/utils/validation/checkValidation';
import { useTranslations } from 'next-intl';
import { useToast } from '@/src/shared/context/ToastContext';
import Input from '@/src/shared/components/input';
import { Button } from '@/src/shared/components/shadcn';
import { TUser } from '../../../domain/entities/type';

export type TUserFormValues = Omit<
  TUser,
  'avatarUrl' | 'addresses' | 'createdAt' | 'updatedAt' | 'id'
> & { id?: string };

type TUserFormProps = {
  user?: TUserFormValues;
  mode: TMode;
  onClose?: () => void;
};

export const UserForm = ({ user, mode, onClose }: TUserFormProps) => {
  const initial: TUserFormValues = {
    id: user?.id ?? undefined,
    userName: user?.userName ?? '',
    email: user?.email ?? '',
    role: user?.role ?? 'user',
    password: user?.password ?? '',
    mobile: user?.mobile ?? '',
    ban: user?.ban ?? false,
  };
  const [formValue, setFormValue] = useState<TUserFormValues>(initial);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode == 'create') {
        await addUser(formValue);
        addToast('کاربر با موفقیت اضافه شد', 'success');
        onClose?.();
      } else if (mode == 'update') {
        await updateUser(formValue);
        addToast('کاربر با موفقیت اضافه شد', 'success');
        onClose?.();
      }
      setFormValue(initial);
    } catch (error) {
      addToast('کاربر اضافه نشد', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleValidation = (value: string, name: TValidationType) => {
    validationClientHandler(value, name, setError, passwordConfirm);
  };

  const handleChange = <K extends keyof TUserFormValues>(
    key: K,
    value: TUserFormValues[K],
  ) => {
    setFormValue((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="userName"
        name="userName"
        type="text"
        value={formValue.userName}
        disabled={loading}
        error={error.userName}
        onChange={(e) => handleChange('userName', e.target.value)}
        required
        mainClassName=""
      />
      <Input
        label="email"
        name="email"
        type="email"
        value={formValue.email}
        disabled={loading}
        error={error.email}
        onChange={(e) => handleChange('email', e.target.value)}
        required
        mainClassName=""
      />
      <Input
        label="mobile"
        name="mobile"
        type="text"
        value={formValue.mobile}
        disabled={loading}
        error={error.mobile}
        onChange={(e) => handleChange('mobile', e.target.value)}
        numeric
        required
        mainClassName=""
      />
      <Input
        label="password"
        name="password"
        type="password"
        value={formValue.password}
        disabled={loading}
        error={error.password}
        onBlur={(e) => handleValidation(e.target.value, 'password')}
        onChange={(e) => handleChange('password', e.target.value)}
        showEye
        required={mode === 'create'}
        mainClassName=""
      />
      <Input
        label="passwordConfirm"
        name="passwordConfirm"
        type="password"
        value={passwordConfirm}
        disabled={loading}
        error={error.passwordConfirm}
        onBlur={(e) => handleValidation(e.target.value, 'passwordConfirm')}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        showEye
        required={mode === 'create'}
        mainClassName=""
      />

      <div className="flex items-center space-x-2 mb-0 px-5">
        <label className="flex items-center space-x-1">
          <span>{t('ban')}</span>
          <input
            type="checkbox"
            checked={formValue.ban}
            onChange={(e) => handleChange('ban', e.target.checked)}
          />
        </label>
      </div>
      <div className="flex items-center space-x-2 mb-0">
        <label className="flex items-center space-x-1">
          <span>{t('admin')}</span>
          <input
            type="checkbox"
            checked={formValue.role === 'admin'}
            onChange={(e) =>
              handleChange('role', e.target.checked ? 'admin' : 'user')
            }
          />
        </label>
      </div>
      <div className="flex gap-2 w-full ">
        <Button loading={loading} disabled={loading} className="flex-1">
          {t('enter')}
        </Button>
        <Button
          loading={loading}
          disabled={loading}
          onClick={() => {
            setFormValue(initial);
            onClose?.();
          }}
          variant={'outline'}
          className="flex-1"
        >
          {t('cancel')}
        </Button>
      </div>
    </form>
  );
};
