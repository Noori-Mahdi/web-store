import { SoldRepositoryImpl } from '../../data/SoldRepositoryImpl';
import { getSold } from '../../domain/usecases';
import { SoldsTable } from '../components/table/sold-table';

export const SoldPage = async () => {
  const repo = new SoldRepositoryImpl();
  const res = await getSold(repo, {
    page: 1,
    pageSize: 10,
    sort: 'createdAt',
    order: 'desc',
  });
  const solds = res.data;
  if (!solds) return <div>داده‌ای وجود ندارد</div>;

  const pageCount = Math.ceil(solds.length / 10);

  return (
    <div className="h-full flex  flex-col">
      <SoldsTable data={solds} pageCount={pageCount} />
    </div>
  );
};
