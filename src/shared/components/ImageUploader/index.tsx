'use client';

import { useRef, useMemo } from 'react';

export type TImageUploaderProps = {
  name: string;
  label: string;
  value: string | File | null; // اینجا null را اضافه کردیم
  error?: string;
  onChange: (file: File | null) => void; // اینجا هم null پذیرفته می‌شود
  onClickTrash: () => void;
};

export const ImageUploader = ({
  name,
  label,
  value,
  error,
  onClickTrash,
  onChange,
}: TImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const previewUrl = useMemo(() => {
    if (!value) return null;
    if (typeof value === 'string') return value;
    return URL.createObjectURL(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>

      <div className="flex items-center gap-4">
        {previewUrl ? (
          <div className="relative h-54 w-54 overflow-hidden rounded border">
            <img
              src={previewUrl}
              alt="Preview"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={onClickTrash}
              className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"
            >
              ✕
            </button>
          </div>
        ) : (
          <div
            className="flex h-54 w-54 cursor-pointer items-center justify-center rounded border border-dashed"
            onClick={() => inputRef.current?.click()}
          >
            انتخاب تصویر
          </div>
        )}

        <input
          ref={inputRef}
          id={name}
          name={name}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
