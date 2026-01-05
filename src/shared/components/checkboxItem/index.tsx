'use client';

import { cn } from '@/src/lib/utils';

interface CheckboxItemProps {
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const CheckboxItem = ({
  label,
  checked,
  onChange,
  className,
  disabled = false,
}: CheckboxItemProps) => {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-center gap-2 select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-primary"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
};
