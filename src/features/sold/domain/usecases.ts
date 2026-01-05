import { TListQuery } from '@/src/shared/types';
import { SoldRepository } from './SoldRepository';

export const getSold = async (repo: SoldRepository, query?: TListQuery) => {
  return await repo.getSold(query);
};
