import { TListQuery } from '@/src/shared/types';
import { TProductRes } from './entities/type';

export class ProductRepository {
  async getProduct(query?: TListQuery): Promise<TProductRes> {
    throw new Error('Not implemented');
  }
}
