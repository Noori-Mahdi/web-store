import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader } from '@/src/shared/components/shadcn/data-table/data-table-column-header';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import {
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/shared/components/shadcn';
import { TSoldTable } from '../../domain/entities/type';
import { Asterisk, CreditCard, MoreVertical, User } from 'lucide-react';

export const soldsColumns = (
  onEdit: (sold: TSoldTable) => void,
  onDelete: (sold: TSoldTable) => void,
): ColumnDef<TSoldTable>[] => [
  {
    id: 'index',
    header: () => <span>#</span>,
    cell: ({ row }) => row.index + 1,
  },
  {
    id: 'soldId',
    accessorKey: 'soldId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="sold Id" />
    ),
    cell: ({ row }) => <div>{row.getValue('soldId')}</div>,
    meta: {
      label: 'sold Id',
      placeholder: 'Search sold Id.Id..',
      variant: 'text',
      icon: Asterisk,
    },
    enableColumnFilter: true,
  },
  {
    id: 'userId',
    accessorKey: 'userId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="userId" />
    ),
    cell: ({ row }) => <div>{row.getValue('userId')}</div>,
    meta: {
      label: 'userId',
      placeholder: 'Search userId...',
      variant: 'text',
      icon: User,
    },
    enableColumnFilter: true,
  },
  {
    id: 'total',
    accessorKey: 'total',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="total" />
    ),
    cell: ({ row }) => <div>{row.getValue('total')}</div>,
    meta: {
      label: 'total',
      placeholder: 'Search total...',
      variant: 'text',
      icon: CreditCard,
    },
    enableColumnFilter: true,
  },
  {
    id: 'actions',
    header: () => null, // بدون label
    cell: ({ row }) => {
      const sold = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(sold)}>
              edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(sold)}>
              delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
