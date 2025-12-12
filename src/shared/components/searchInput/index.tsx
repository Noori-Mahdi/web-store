'use client';
import { useState } from 'react';
import Input from '../input';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setSearch('');
  };

  return (
    <>
      <Input
        type="text"
        name="search"
        value={search}
        placeholder="جستجو ..."
        onChange={handleSearch}
      />
    </>
  );
};

export default SearchInput;
