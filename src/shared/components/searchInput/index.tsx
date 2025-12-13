'use client';
import { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../shadcn';
import { Search } from 'lucide-react';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setSearch('');
  };

  return (
    <InputGroup className="w-90 p-2">
      <InputGroupInput
        value={search}
        onChange={handleSearch}
        placeholder="جستجو ..."
      />
      <InputGroupAddon>
        <Search className="" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 آیتم</InputGroupAddon>
    </InputGroup>
  );
};

export default SearchInput;
