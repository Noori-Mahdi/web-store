'use client';

import { useState, useEffect, useRef } from 'react';
import { InputShadcn } from '../shadcn';

interface SearchBoxProps {
  value?: string;
  placeholder?: string;
  onSearch: (query: string) => void;
  delay?: number;
  className?: string;
}

export function SearchBox({
  value = '',
  placeholder = 'Search...',
  onSearch,
  delay = 500,
  className,
}: SearchBoxProps) {
  const [search, setSearch] = useState(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      onSearch(val);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <InputShadcn
      value={search}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
