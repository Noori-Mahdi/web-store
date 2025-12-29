// features/products/components/products-action-bar.tsx
'use client';
import React from 'react';
import { Button } from '@/src/shared/components/shadcn';
import { Trash, Download } from 'lucide-react';
import { Table } from '@tanstack/react-table';
import { TUserTable } from '../../../domain/entities/type';

type ActionBarProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

function ActionBar({ open, onOpenChange, children }: ActionBarProps) {
  if (!open) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow flex justify-end gap-2">
      {children}
    </div>
  );
}

export function ProductsActionBar({ table }: { table: Table<TUserTable> }) {
  const rows = table.getFilteredSelectedRowModel().rows;

  return (
    <ActionBar
      open={rows.length > 0}
      onOpenChange={(open) => {
        if (!open) table.toggleAllRowsSelected(false);
      }}
    >
      <Button variant="destructive">
        <Trash className="h-4 w-4 bg-red-500 mr-1" />
        Delete ({rows.length})
      </Button>
      <Button variant="outline">
        <Download className="h-4 w-4 mr-1" />
        Export
      </Button>
    </ActionBar>
  );
}
