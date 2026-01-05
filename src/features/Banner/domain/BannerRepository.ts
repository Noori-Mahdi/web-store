import { TListQuery } from '@/src/shared/types';
import { TBannerRes } from './entities/type';

export class BannerRepository {
  async getBanner(query?: TListQuery): Promise<TBannerRes> {
    throw new Error('Not implemented');
  }
}
