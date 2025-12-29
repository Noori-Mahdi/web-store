import { TListQuery } from '@/src/shared/types';
import { UsersRepository } from './UserRepository';

export const getUsers = async (repo: UsersRepository, query?: TListQuery) => {
  return await repo.getUsers(query);
};
