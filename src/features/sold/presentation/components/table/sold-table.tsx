'use client';

import { useState } from 'react';
import { ProductsActionBar } from './sold-action-bar';
import { useDataTable } from '@/hooks/use-data-table';
import { DataTable } from '@/src/shared/components/shadcn/data-table/data-table';
import { DataTableAdvancedToolbar } from '@/src/shared/components/shadcn/data-table/data-table-advanced-toolbar';
import { DataTableSortList } from '@/src/shared/components/shadcn/data-table/data-table-sort-list';
import { DataTableFilterMenu } from '@/src/shared/components/shadcn/data-table/data-table-filter-menu';
import { soldsColumns } from '../../columns/sold-columns';
import { TSoldFormValues, SoldForm } from '../soldForm';
import Modal from '@/src/shared/components/modal';
import { TSoldTable } from '../../../domain/entities/type';
import { Button } from '@/src/shared/components/shadcn';
import { useToast } from '@/src/shared/context/ToastContext';
import { useTranslations } from 'next-intl';
import { SoldRepositoryImpl } from '../../../data/SoldRepositoryImpl';
import { getSold } from '../../../domain/usecases';
import { AddSoldBtn } from '../addSoldBtn';
import { deleteSold } from '../../serverAction/deleteSold';

export function SoldsTable({
  data,
  pageCount,
}: {
  data: TSoldTable[];
  pageCount: number;
}) {
  const [list, setList] = useState<TSoldTable[]>(data);
  const [selectedSold, setSelectedSold] = useState<TSoldFormValues | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [issoldFormOpen, setIssoldFormOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const { addToast } = useToast();
  const t = useTranslations();

  const handleGetSold = async () => {
    const { sorting } = table.getState(); // فقط sort می‌خوای
    const sortField = sorting[0]?.id;
    const sortDesc = sorting[0]?.desc;

    console.log(sortField, ']]', sortDesc);

    setLoading(true);
    try {
      const repo = new SoldRepositoryImpl();
      const res = await getSold(repo, {
        sort: sortField,
        order: sortDesc ? 'desc' : 'asc',
      });
      if (res.data) setList(res.data);
    } catch (error) {
      addToast('Failed to fetch solds', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedSold?.id) return;
    setLoading(true);
    try {
      await deleteSold({ id: selectedSold.id });
      addToast('sold delete success', 'success');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const columns = soldsColumns(
    (sold) => {
      setSelectedSold({
        id: sold.id,
        total: sold.total ?? 0,
      });
      setIssoldFormOpen(true);
    },
    (sold) => {
      setSelectedSold({
        id: sold.id,
        total: sold.total ?? 0,
      });
      setIsDeleteConfirmOpen(true);
    },
  );

  const { table } = useDataTable({
    data: list,
    columns,
    pageCount,
    initialState: {
      sorting: [{ id: 'id', desc: true }],
      pagination: { pageIndex: 0, pageSize: 10 },
    },
    enableRowSelection: true,
    getRowId: (row) => row.id,
  });

  return (
    <>
      <DataTable table={table} actionBar={<ProductsActionBar table={table} />}>
        <DataTableAdvancedToolbar table={table}>
          <Button onClick={handleGetSold}>Add Filter and Sort</Button>
          <AddSoldBtn />
        </DataTableAdvancedToolbar>
      </DataTable>

      <Modal
        label="edit sold"
        isOpen={issoldFormOpen}
        onClose={() => setIssoldFormOpen(false)}
      >
        <SoldForm
          onClose={() => setIssoldFormOpen(false)}
          mode="update"
          sold={selectedSold ?? undefined}
        />
      </Modal>
      <Modal
        label="delete sold"
        onClose={() => setIsDeleteConfirmOpen(false)}
        isOpen={isDeleteConfirmOpen}
      >
        <>
          <p>
            Are you sure you want to delete this sold? This action cannot be
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
