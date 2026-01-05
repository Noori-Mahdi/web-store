import { ColumnDef } from '@tanstack/react-table';
import {
  Text,
  CalendarIcon,
  Users,
  ShieldCheck,
  Phone,
  ShieldUser,
  CircleUserRound,
  Ban,
  MoreVertical,
} from 'lucide-react';
import { DataTableColumnHeader } from '@/src/shared/components/shadcn/data-table/data-table-column-header';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import {
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/shared/components/shadcn';
import { TUserTable } from '../../domain/entities/type';

export const usersColumns = (
  onEdit: (user: TUserTable) => void,
  onDelete: (user: TUserTable) => void,
): ColumnDef<TUserTable, unknown>[] => [
  {
    id: 'index',
    header: () => <span>#</span>,
    cell: ({ row }) => row.index + 1,
    enableHiding: false,
    enableSorting: false,
  },
  {
    id: 'userName',
    accessorKey: 'userName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="User Name" />
    ),
    cell: ({ row }) => <div>{row.getValue('userName')}</div>,
    meta: {
      label: 'User Name',
      placeholder: 'Search user name...',
      variant: 'text',
      icon: Users,
    },
    enableColumnFilter: true,
  },
  {
    id: 'email',
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="Email" />
    ),
    cell: ({ row }) => <div>{row.getValue('email')}</div>,
    meta: {
      label: 'Email',
      placeholder: 'Search email...',
      variant: 'text',
      icon: Text,
    },
    enableColumnFilter: true,
  },
  {
    id: 'mobile',
    accessorKey: 'mobile',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="Mobile" />
    ),
    cell: ({ row }) => <div>{row.getValue('mobile')}</div>,
    meta: {
      label: 'Mobile',
      placeholder: 'Search mobile...',
      variant: 'text',
      icon: Phone,
    },
    enableColumnFilter: true,
  },
  {
    id: 'ban',
    accessorKey: 'ban',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="Banned" />
    ),
    cell: ({ row }) => (
      <div>
        {row.getValue('ban') ? (
          <Ban size={16} className="text-red-500" />
        ) : (
          'No'
        )}
      </div>
    ),
    meta: {
      label: 'Banned',
      placeholder: 'Search banned...',
      variant: 'text',
      icon: ShieldCheck,
    },
    enableColumnFilter: true,
  },
  {
    id: 'role',
    accessorKey: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="Role" />
    ),
    cell: ({ row }) => (
      <div>
        {row.getValue('role') === 'admin' ? (
          <span className="flex bg-primary w-fit px-2 rounded-full text-black text-xs py-0.5 font-bold capitalize items-center gap-1">
            admin
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <CircleUserRound size={16} />
            user
          </span>
        )}
      </div>
    ),
    meta: {
      label: 'Role',
      placeholder: 'Search role...',
      variant: 'text',
      icon: ShieldCheck,
    },
    enableColumnFilter: true,
  },
  {
    id: 'createdAt',
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label="Created At" />
    ),
    cell: ({ row }) => <div>{row.getValue('createdAt')}</div>,
    meta: {
      label: 'Created At',
      placeholder: 'Search date...',
      variant: 'text',
      icon: CalendarIcon,
    },
    enableColumnFilter: true,
  },
  {
    id: 'actions',
    header: () => null, // بدون label
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(user)}>
              edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(user)}>
              delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
