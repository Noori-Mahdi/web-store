'use client';

import { Button } from '../shadcn';

interface DialogActionsProps {
  loading?: boolean;
  submitText?: string;
  cancelText?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}

export const FormActions = ({
  loading = false,
  submitText = 'Submit',
  cancelText = 'Cancel',
  onSubmit,
  onCancel,
}: DialogActionsProps) => {
  return (
    <div className="flex w-full gap-2">
      <Button
        type="submit"
        loading={loading}
        disabled={loading}
        className="flex-1"
        onClick={onSubmit}
      >
        {submitText}
      </Button>

      <Button
        type="button"
        variant="outline"
        loading={loading}
        disabled={loading}
        className="flex-1"
        onClick={onCancel}
      >
        {cancelText}
      </Button>
    </div>
  );
};
