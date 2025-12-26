'use clinet';
import Container from '../container';
import Modal from '../modal';
import { Button } from '../shadcn';
import { useTranslations } from 'next-intl';

export type TAlertProps = {
  type?: null | 'warning' | 'info' | 'error' | 'map';
  isOpen?: boolean;
  onAccept?: () => void;
  onCancel?: () => void;
  label?: string;
  massege: string;
};

const Alert = ({
  massege,
  label,
  type,
  isOpen,
  onCancel,
  onAccept,
}: TAlertProps) => {
  const t = useTranslations();

  return (
    <Modal
      label={label}
      onClose={onCancel}
      type={type}
      force={true}
      isOpen={isOpen}
      classNameBox="border-2 rounded-xl shadow-xl"
    >
      <div className="flex flex-col gap-4">
        <div>{massege}</div>
        <div className="flex gap-2 w-full">
          <Button
            onClick={() => {
              onAccept?.();
            }}
            className="flex-1"
          >
            {t('accept')}
          </Button>
          <Button
            onClick={() => {
              onCancel?.();
            }}
            variant={'outline'}
            className="flex-1"
          >
            {t('cancel')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Alert;
