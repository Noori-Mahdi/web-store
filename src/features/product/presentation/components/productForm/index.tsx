'use client';
import { TMode } from '@/src/shared/types';
import { useState } from 'react';

import { validationClientHandler } from '@/src/shared/utils/validation/client/clientValidationHandler';
import { TValidationType } from '@/src/shared/utils/validation/checkValidation';
import { useTranslations } from 'next-intl';
import { useToast } from '@/src/shared/context/ToastContext';
import Input from '@/src/shared/components/input';
import { Button } from '@/src/shared/components/shadcn';
import {
  TAddProduct,
  TProduct,
  TProductCategory,
} from '../../../domain/entities/type';
import { ImageUploader } from '@/src/shared/components/ImageUploader';
import { addproduct } from '../../serverAction/addProduct';
import { updateProduct } from '../../serverAction/updateProduct';

export type TProductCardVM = {
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  catagory: TProductCategory;
  image: string;
};

export type TProductFormValues = {
  image: string | File | null;
  name: string;
  catagory: TProductCategory;
  description: string;
  price: number;
  quantity: number;
  id?: string;
};

type TProductFormProps = {
  product?: TProductFormValues;
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

export const ProductForm = ({ product, mode, onClose }: TProductFormProps) => {
  const initial: TProductFormValues = {
    id: product?.id,
    name: product?.name ?? '',
    catagory: product?.catagory ?? 'OTHER',
    description: product?.description ?? '',
    price: product?.price ?? 0,
    quantity: product?.quantity ?? 0,
    image: product?.image ?? null,
  };
  const [formValue, setFormValue] = useState<TProductFormValues>(initial);
  const [error, setError] = useState<Partial<Record<string, string[]>>>({});
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageToSend: string;

      if (formValue.image instanceof File) {
        imageToSend = await uploadFile(formValue.image);
      } else if (typeof formValue.image === 'string') {
        imageToSend = formValue.image;
      } else {
        imageToSend = '';
      }

      const payload: TAddProduct = {
        ...formValue,
        image: imageToSend,
      };

      if (mode === 'create') {
        await addproduct(payload);
        addToast('محصول با موفقیت اضافه شد', 'success');
        onClose?.();
      } else if (mode === 'update') {
        await updateProduct(payload);
        addToast('محصول اضافه نشد', 'error');
        onClose?.();
      }

      setFormValue(initial);
    } catch (error) {
      addToast('بنر اضافه نشد', 'error');
    } finally {
      setLoading(false);
    }
  };

  function handleChange<K extends keyof TProductFormValues>(
    key: K,
    value: TProductFormValues[K],
  ) {
    setFormValue((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="name"
        name="name"
        type="text"
        value={formValue.name}
        disabled={loading}
        error={error.name}
        onChange={(e) => handleChange('name', e.target.value)}
        required
      />

      {/* <Input
        label="catagory"
        name="catagory"
        type="text"
        value={formValue.catagory}
        disabled={loading}
        error={error.catagory}
        onChange={(e) => handleChange('catagory', e.target.value)}
        required
      /> */}

      <Input
        label="description"
        name="description"
        type="text"
        value={formValue.description}
        disabled={loading}
        error={error.description}
        onChange={(e) => handleChange('description', e.target.value)}
        required
      />

      <Input
        label="price"
        name="price"
        type="number"
        value={formValue.price.toString()}
        disabled={loading}
        error={error.price}
        onChange={(e) => handleChange('price', Number(e.target.value))}
        required
      />

      <Input
        label="quantity"
        name="quantity"
        type="number"
        value={formValue.quantity.toString()}
        disabled={loading}
        error={error.quantity}
        onChange={(e) => handleChange('quantity', Number(e.target.value))}
        required
      />

      <ImageUploader
        name="image"
        label="Image"
        value={formValue.image}
        onChange={(file: File | null) => handleChange('image', file)}
        onClickTrash={() => handleChange('image', null)}
      />

      <div className="flex gap-2 w-full">
        <Button loading={loading} disabled={loading} className="flex-1">
          {t('enter')}
        </Button>

        <Button
          type="button"
          loading={loading}
          disabled={loading}
          onClick={() => {
            setFormValue(initial);
            onClose?.();
          }}
          variant="outline"
          className="flex-1"
        >
          {t('cancel')}
        </Button>
      </div>
    </form>
  );
};
