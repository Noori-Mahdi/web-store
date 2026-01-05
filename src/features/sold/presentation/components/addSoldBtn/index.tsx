'use client';
import Input from '@/src/shared/components/input';
import Modal from '@/src/shared/components/modal';
import { Button } from '@/src/shared/components/shadcn';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { SoldForm } from '../soldForm';

export const AddSoldBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="font-semibold capitalize h-8"
      >
        {t('create sold')}
        {/* <soldPlus /> */}
      </Button>
      <Modal
        classNameBox="border-2 "
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        label={t('create sold')}
      >
        <SoldForm mode="create" />
      </Modal>
    </>
  );
};
