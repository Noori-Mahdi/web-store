import { TListQuery, TResponse } from '@/src/shared/types';
import { BannerRepository } from '../domain/BannerRepository';
import { TBannerRes } from '../domain/entities/type';
import { BannerRemoteDataSource } from './BannerRemoteDataSource';

export class BannerRepositoryImpl extends BannerRepository {
  async getBanner(query?: TListQuery): Promise<TBannerRes> {
    const data: TBannerRes = await BannerRemoteDataSource.getBanner(query);
    return data;
  }
}
