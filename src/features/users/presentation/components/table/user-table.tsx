'use client';

import { useState } from 'react';
import { ProductsActionBar } from './user-action-bar';
import { useDataTable } from '@/hooks/use-data-table';
import { DataTable } from '@/src/shared/components/shadcn/data-table/data-table';
import { DataTableAdvancedToolbar } from '@/src/shared/components/shadcn/data-table/data-table-advanced-toolbar';
import { DataTableSortList } from '@/src/shared/components/shadcn/data-table/data-table-sort-list';
import { DataTableFilterMenu } from '@/src/shared/components/shadcn/data-table/data-table-filter-menu';
import { AddUserBtn } from '../addUserBtn';
import { usersColumns } from '../../columns/user-columns';
import { TUserFormValues, UserForm } from '../userForm';
import Modal from '@/src/shared/components/modal';
import { TUserTable } from '../../../domain/entities/type';
import { Button } from '@/src/shared/components/shadcn';
import { useToast } from '@/src/shared/context/ToastContext';
import { useTranslations } from 'next-intl';
import { deleteUser } from '../../serverAction/deleteUser';
import { UsersRepositoryImpl } from '../../../data/UserRepositoryImpL';
import { getUsers } from '../../../domain/usecases';

export function UsersTable({
  data,
  pageCount,
}: {
  data: TUserTable[];
  pageCount: number;
}) {
  const [list, setList] = useState<TUserTable[]>(data);
  const [selectedUser, setSelectedUser] = useState<TUserFormValues | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const { addToast } = useToast();
  const t = useTranslations();

  const handleGetUser = async () => {
    const { sorting } = table.getState(); // فقط sort می‌خوای
    const sortField = sorting[0]?.id;
    const sortDesc = sorting[0]?.desc;

    console.log(sortField, ']]', sortDesc);

    setLoading(true);
    try {
      const repo = new UsersRepositoryImpl();
      const res = await getUsers(repo, {
        sort: sortField,
        order: sortDesc ? 'desc' : 'asc',
      });
      if (res.data) setList(res.data);
    } catch (error) {
      addToast('Failed to fetch users', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedUser?.id) return;
    setLoading(true);
    try {
      await deleteUser({ id: selectedUser.id });
      addToast('user delete success', 'success');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const columns = usersColumns(
    (user) => {
      setSelectedUser({
        id: user.id,
        userName: user.userName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        ban: user.ban,
        password: '',
      });
      setIsUserFormOpen(true);
    },
    (user) => {
      setSelectedUser({
        id: user.id,
        userName: user.userName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        ban: user.ban,
        password: '',
      });
      setIsDeleteConfirmOpen(true);
    },
  );

  const { table } = useDataTable({
    data: list,
    columns,
    pageCount,
    initialState: {
      sorting: [{ id: 'createdAt', desc: true }],
      pagination: { pageIndex: 0, pageSize: 10 },
    },
    enableRowSelection: true,
    getRowId: (row) => row.id,
  });

  return (
    <>
      <DataTable table={table} actionBar={<ProductsActionBar table={table} />}>
        <DataTableAdvancedToolbar table={table}>
          <Button onClick={handleGetUser}>Add Filter and Sort</Button>
          <AddUserBtn />
        </DataTableAdvancedToolbar>
      </DataTable>

      <Modal
        label="edit user"
        isOpen={isUserFormOpen}
        onClose={() => setIsUserFormOpen(false)}
      >
        <UserForm
          onClose={() => setIsUserFormOpen(false)}
          mode="update"
          user={selectedUser ?? undefined}
        />{' '}
      </Modal>
      <Modal
        label="delete user"
        onClose={() => setIsDeleteConfirmOpen(false)}
        isOpen={isDeleteConfirmOpen}
      >
        <>
          <p>
            Are you sure you want to delete this user? This action cannot be
            undone.
          </p>
          <div className="flex gap-2 w-full ">
            <Button
              onClick={() => {
                handleDelete();
              }}
              loading={loading}
              disabled={loading}
              className="flex-1"
            >
              {t('submit')}
            </Button>
            <Button
              loading={loading}
              disabled={loading}
              onClick={() => setIsDeleteConfirmOpen(false)}
              variant={'outline'}
              className="flex-1"
            >
              {t('cancel')}
            </Button>
          </div>
        </>
      </Modal>
    </>
  );
}
