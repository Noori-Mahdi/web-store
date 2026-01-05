'use client';
import { TMode } from '@/src/shared/types';
import { useState } from 'react';

import { validationClientHandler } from '@/src/shared/utils/validation/client/clientValidationHandler';
import { TValidationType } from '@/src/shared/utils/validation/checkValidation';
import { useTranslations } from 'next-intl';
import { useToast } from '@/src/shared/context/ToastContext';
import Input from '@/src/shared/components/input';
import { Button } from '@/src/shared/components/shadcn';
import { TAddBanner, TBanner } from '../../../domain/entities/type';
import { ImageUploader } from '@/src/shared/components/ImageUploader';
import { addBanner } from '../../serverAction/addBanner';
import { updateBannner } from '../../serverAction/updateBanner';

type TBannerFormValues = {
  image: string | File | null;
  title: string;
  tooltip: string;
  URL: string;
  id?: string;
};

type TBannerFormProps = {
  banner?: TBannerFormValues;
  mode: TMode;
  onClose?: () => void;
};

async function uploadFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string); // Base64 string
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const BannerForm = ({ banner, mode, onClose }: TBannerFormProps) => {
  const initial: TBannerFormValues = {
    id: banner?.id ?? undefined,
    title: banner?.title ?? '',
    tooltip: banner?.tooltip ?? '',
    URL: banner?.URL ?? 'user',
    image: banner?.image ?? '',
  };
  const [formValue, setFormValue] = useState<TBannerFormValues>(initial);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const t = useTranslations();

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      if (mode === 'create') {
        await addBanner(formData);
        addToast('بنر با موفقیت اضافه شد', 'success');
        onClose?.();
      } else if (mode === 'update') {
        // await updateBannner(e);
        addToast('بنر با موفقیت اضافه شد', 'success');
        onClose?.();
      }

      setFormValue(initial);
    } catch (error) {
      addToast('بنر اضافه نشد', 'error');
    } finally {
      setLoading(false);
    }
  };

  function handleChange<K extends keyof TBannerFormValues>(
    key: K,
    value: TBannerFormValues[K],
  ) {
    setFormValue((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <Input
        label="title"
        name="title"
        type="text"
        value={formValue.title}
        disabled={loading}
        error={error.title}
        onChange={(e) => handleChange('title', e.target.value)}
        required
      />
      <Input
        label="tooltip"
        name="tooltip"
        type="text"
        value={formValue.tooltip}
        disabled={loading}
        error={error.tooltip}
        onChange={(e) => handleChange('tooltip', e.target.value)}
        required
      />
      <Input
        label="URL"
        name="URL"
        type="text"
        value={formValue.URL}
        disabled={loading}
        error={error.URL}
        onChange={(e) => handleChange('URL', e.target.value)}
        numeric
        required
      />

      <ImageUploader
        name="image"
        label="Image"
        value={formValue.image}
        onChange={(file: File | null) => handleChange('image', file)}
        onClickTrash={() => handleChange('image', null)}
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
