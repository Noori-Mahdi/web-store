'use client';
import { TMode } from '@/src/shared/types';
import { useState } from 'react';
import { updateSold } from '../../serverAction/updateSold';
import { validationClientHandler } from '@/src/shared/utils/validation/client/clientValidationHandler';
import { TValidationType } from '@/src/shared/utils/validation/checkValidation';
import { useTranslations } from 'next-intl';
import { useToast } from '@/src/shared/context/ToastContext';
import Input from '@/src/shared/components/input';
import { Button } from '@/src/shared/components/shadcn';
import { TSold } from '../../../domain/entities/type';
import { addsold } from '../../serverAction/addSold';

export type TSoldFormValues = Pick<TSold, 'total'> & { id?: string };

type TSoldFormProps = {
  sold?: TSoldFormValues;
  mode: TMode;
  onClose?: () => void;
};

export const SoldForm = ({ sold, mode, onClose }: TSoldFormProps) => {
  const initial: TSoldFormValues = {
    id: sold?.id ?? undefined,
    total: sold?.total ?? 0,
  };
  const [formValue, setFormValue] = useState<TSoldFormValues>(initial);
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
        await addsold(formValue);
        addToast('کاربر با موفقیت اضافه شد', 'success');
        onClose?.();
      } else if (mode == 'update') {
        await updateSold(formValue);
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

  const handleChange = <K extends keyof TSoldFormValues>(
    key: K,
    value: TSoldFormValues[K],
  ) => {
    setFormValue((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="total"
        name="total"
        type="text"
        value={formValue.total.toString()}
        disabled={loading}
        error={error.soldName}
        onChange={(e) => handleChange('total', +e.target.value)}
        required
        mainClassName=""
      />
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
