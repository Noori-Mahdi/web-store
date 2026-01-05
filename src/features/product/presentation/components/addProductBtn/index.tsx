'use client';
import Modal from '@/src/shared/components/modal';
import { Button } from '@/src/shared/components/shadcn';
import { UserPlus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ProductForm } from '../productForm';

export const AddProductBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="font-semibold capitalize h-8"
      >
        {t('create product')}
        <UserPlus />
      </Button>
      <Modal
        classNameBox="border-2 "
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        label={t('create product')}
      >
        <ProductForm mode="create" />
      </Modal>
    </>
  );
};
