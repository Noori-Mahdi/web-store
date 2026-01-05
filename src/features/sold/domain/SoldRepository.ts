import { TListQuery } from '@/src/shared/types';
import { TSoldRes } from './entities/type';

export class SoldRepository {
  async getSold(query?: TListQuery): Promise<TSoldRes> {
    throw new Error('Not implemented');
  }
}
