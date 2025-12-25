'use client';

import { toEnglishNumber } from '@/src/shared/utils/numbers';
import { CircleAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type TOTPInputProps = {
  name: string;
  error?: string[];
  count: number;
  required?: boolean;
  disabled?: boolean;
  onBlur?: (e: { target: { name: string; value: string } }) => void;
  onChange: (e: { target: { name: string; value: string } }) => void;
};

const OTPInput = ({
  name,
  error,
  count,
  disabled = false,
  required = false,
  onBlur,
  onChange,
}: TOTPInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(count).fill(''));
  const wrapperRef = useRef<HTMLDivElement>(null);

  const t = useTranslations();

  const handleChange = (value: string, index: number) => {
    const englishValue = toEnglishNumber(value);

    if (!/^\d?$/.test(englishValue)) return;

    const newOtp = [...otp];
    newOtp[index] = englishValue;
    setOtp(newOtp);

    const formatted = newOtp
      .slice()
      .reverse()
      .map((v) => (v === '' ? '-' : v))
      .join('');

    onChange?.({ target: { name, value: formatted } });

    if (value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index < count) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div
      ref={wrapperRef}
      onBlur={(e) => {
        const relatedTarget = e.relatedTarget as Node | null;
        if (!wrapperRef.current?.contains(relatedTarget)) {
          const formatted = otp
            .slice()
            .reverse()
            .map((v) => (v === '' ? '-' : v))
            .join('');

          onBlur?.({ target: { name, value: formatted } });
        }
      }}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              onFocus={(e) => {
                e.target.select();
              }}
              maxLength={1}
              value={digit}
              disabled={disabled}
              required={required}
              placeholder="-"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={twMerge(
                'w-12 h-12 md:w-14 md:h-14 border  rounded-xl text-center text-lg md:text-xl focus:outline-none focus:ring-2 text-white focus:ring-primary',
                error ? 'border-error-300' : 'border-gray-300',
              )}
            />
          ))}
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
    </div>
  );
};

export default OTPInput;
