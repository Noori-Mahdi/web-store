'use client';

import { useState, useEffect } from 'react';
import { useDataTable } from '@/hooks/use-data-table';
import { DataTable } from '@/src/shared/components/shadcn/data-table/data-table';
import { DataTableAdvancedToolbar } from '@/src/shared/components/shadcn/data-table/data-table-advanced-toolbar';
import Modal from '@/src/shared/components/modal';
import { useToast } from '@/src/shared/context/ToastContext';
import { useTranslations } from 'next-intl';
import { TUserTable } from '../../../domain/entities/type';
import { TUserFormValues, UserForm } from '../userForm';
import { ConfirmDialog } from '@/src/shared/components/confirmDialog';
import { UsersRepositoryImpl } from '../../../data/UserRepositoryImpL';
import { getUsers } from '../../../domain/usecases';
import { deleteUser } from '../../serverAction/deleteUser';
import { AddUserBtn } from '../addUserBtn';
import { usersColumns } from '../../columns/user-columns';
import { SearchBox } from '@/src/shared/components/searchInput';
import { useRouter, useSearchParams } from 'next/navigation';

export function UsersTable({
  data,
  pageCount: initialPageCount,
}: {
  data: TUserTable[];
  pageCount: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [list, setList] = useState<TUserTable[]>(data);
  const [pageCount, setPageCount] = useState(initialPageCount);
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const [selectedUser, setSelectedUser] = useState<TUserFormValues | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const { addToast } = useToast();
  const t = useTranslations();
  // انتخاب کاربر برای ویرایش یا حذف
  const handleUserAction = (user: TUserTable, action: 'edit' | 'delete') => {
    setSelectedUser({ ...user, password: '' });
    if (action === 'edit') setIsUserFormOpen(true);
    else setIsDeleteConfirmOpen(true);
  };

  const columns = usersColumns(
    (user) => handleUserAction(user, 'edit'),
    (user) => handleUserAction(user, 'delete'),
  );

  const { table } = useDataTable({
    data: list,
    columns,
    pageCount,
    enableRowSelection: true,
    initialState: {
      sorting: [{ id: 'createdAt', desc: true }],
      pagination: { pageIndex: 0, pageSize: 10 },
    },
    getRowId: (row) => row.id,
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [search]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const repo = new UsersRepositoryImpl();
        const sortState = table.getState().sorting[0];
        const pagination = table.getState().pagination;

        const res = await getUsers(repo, {
          sort: sortState?.id || 'createdAt',
          order: sortState?.desc ? 'desc' : 'asc',
          pageIndex: pagination.pageIndex,
          pageSize: pagination.pageSize,
          search,
        });

        if (res.data) setList(res.data);
        if (res.totalCount)
          setPageCount(Math.ceil(res.totalCount / pagination.pageSize));
      } catch {
        addToast('Failed to fetch users', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [table.getState().sorting, table.getState().pagination, search]);

  const handleDelete = async () => {
    if (!selectedUser?.id) return;
    setLoading(true);
    try {
      await deleteUser(selectedUser.id);
      setIsDeleteConfirmOpen(false);
      addToast('User deleted', 'success');
      table.setPageIndex(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DataTable table={table}>
        <DataTableAdvancedToolbar table={table}>
          <SearchBox
            placeholder="Search users..."
            onSearch={(query) => setSearch(query)} // فقط state رو آپدیت می‌کنیم
            className="w-64"
            value={search}
          />
          <AddUserBtn />
        </DataTableAdvancedToolbar>
      </DataTable>

      <Modal
        isOpen={isUserFormOpen}
        onClose={() => setIsUserFormOpen(false)}
        label="Edit User"
      >
        <UserForm
          user={selectedUser ?? undefined}
          mode="update"
          onClose={() => setIsUserFormOpen(false)}
        />
      </Modal>

      <ConfirmDialog
        open={isDeleteConfirmOpen}
        title="Delete user"
        description="Are you sure you want to delete this user?"
        onConfirm={handleDelete}
        onCancel={() => setIsDeleteConfirmOpen(false)}
      />
    </>
  );
}
