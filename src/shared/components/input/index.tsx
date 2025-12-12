import { twMerge } from 'tailwind-merge';
import { InputShadcn, Label } from '../shadcn';

type TInputProps = {
  type?: string;
  name: string;
  value: string;
  label?: string;
  error?: string[];
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
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
  error,
  maxLength,
  mainClassName,
  labelClassName,
  inputClassName,
  onChange,
  onBlur,
}: TInputProps) => {
  return (
    <div className={twMerge('flex flex-col gap-2', mainClassName)}>
      <Label
        htmlFor={name}
        className={twMerge('text-gray-700 font-medium', labelClassName)}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <InputShadcn
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange?.(e)}
        onBlur={(e) => onBlur?.(e)}
        className={twMerge(
          'rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
          inputClassName,
        )}
      />
      {error && error.length > 0 && (
        <div className="text-red-500 text-sm mt-1">
          {error.map((msg, i) => (
            <p key={i}>{msg}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
