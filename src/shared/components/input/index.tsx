'use client';
import { InputShadcn, Label } from '../shadcn';
import { useState } from 'react';
import { CircleAlert, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useTranslations } from 'next-intl';

type TInputProps = {
  id?: string;
  type?: string;
  name: string;
  value: string;
  label?: string;
  numeric?: boolean;
  error?: string[];
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  showEye?: boolean;
  placeholder?: string;
  mainClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
};

const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  required = false,
  disabled = false,
  readonly = false,
  showEye = false,
  error,
  numeric = false,
  maxLength,
  mainClassName,
  labelClassName,
  inputClassName,
  onChange,
  onBlur,
}: TInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations();

  const resolvedType =
    showEye && type === 'password'
      ? showPassword
        ? 'text'
        : 'password'
      : type;

  const secendryIcon =
    showEye && type === 'password' ? (
      showPassword ? (
        <Eye
          size={12}
          className="cursor-pointer ml-2"
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <EyeOff
          size={12}
          className="cursor-pointer ml-2"
          onClick={() => setShowPassword(true)}
        />
      )
    ) : null;

  return (
    <div className={cn('flex flex-col gap-3', mainClassName)}>
      <div className="flex justify-between items-center">
        {label && (
          <Label htmlFor={name} className={cn(' font-medium', labelClassName)}>
            {t(label)}
            {required && <span className="text-primary">*</span>}
          </Label>
        )}
        {secendryIcon}
      </div>

      <div>
        <InputShadcn
          id={name}
          type={resolvedType}
          name={name}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          value={value}
          inputMode={numeric ? 'numeric' : 'text'}
          maxLength={maxLength}
          onChange={(e) => onChange?.(e)}
          onBlur={(e) => onBlur?.(e)}
          className={cn(
            'rounded-lg font-semibold border-2 outline-0',
            inputClassName,
          )}
        />
      </div>
      {error && error.length > 0 && (
        <div className="text-sm text-primary mt-1">
          {error.map((msg, i) => (
            <div className="flex gap-2 items-center text-destructive" key={i}>
              <CircleAlert size={16} />
              <p className="text-sm">{t(msg)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
