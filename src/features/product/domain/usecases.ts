import { TListQuery } from '@/src/shared/types';
import { ProductRepository } from './ProductRepository';

export const getProduct = async (
  repo: ProductRepository,
  query?: TListQuery,
) => {
  return await repo.getProduct(query);
};
