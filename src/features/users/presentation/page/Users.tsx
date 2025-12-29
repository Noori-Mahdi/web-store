import { UsersRepositoryImpl } from '../../data/UserRepositoryImpL';
import { getUsers } from '../../domain/usecases';
import { UsersTable } from '../components/table/user-table';

const UsersPage = async () => {
  const repo = new UsersRepositoryImpl();
  const res = await getUsers(repo, {
    page: 1,
    pageSize: 10,
    sort: 'createdAt',
    order: 'desc',
  });
  const users = res.data;
  if (!users) return <div>داده‌ای وجود ندارد</div>;

  const pageCount = Math.ceil(users.length / 10);

  return (
    <div className="h-full flex  flex-col">
      <UsersTable data={users} pageCount={pageCount} />
    </div>
  );
};

export default UsersPage;
