import { TListQuery } from '@/src/shared/types';
import { BannerRepository } from './BannerRepository';

export const getBanner = async (repo: BannerRepository, query?: TListQuery) => {
  return await repo.getBanner(query);
};
