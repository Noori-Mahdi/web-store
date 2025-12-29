'use client';
import Input from '@/src/shared/components/input';
import Modal from '@/src/shared/components/modal';
import { Button } from '@/src/shared/components/shadcn';
import { UserPlus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { UserForm } from '../userForm';

export const AddUserBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="font-semibold capitalize h-8"
      >
        {t('create user')}
        <UserPlus />
      </Button>
      <Modal
        classNameBox="border-2 "
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        label={t('create user')}
      >
        <UserForm mode="create" />
      </Modal>
    </>
  );
};
