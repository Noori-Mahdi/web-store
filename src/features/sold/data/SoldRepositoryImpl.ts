import { TListQuery, TResponse } from '@/src/shared/types';
import { TSoldRes } from '../domain/entities/type';
import { SoldRepository } from '../domain/SoldRepository';
import { SoldRemoteDataSource } from './SoldRemoteDataSource';

export class SoldRepositoryImpl extends SoldRepository {
  async getSold(query?: TListQuery): Promise<TSoldRes> {
    const data: TSoldRes = await SoldRemoteDataSource.getSold(query);
    return data;
  }
}
