import { TListQuery, TResponse } from '@/src/shared/types';
import { ProductRepository } from '../domain/ProductRepository';
import { TProductRes } from '../domain/entities/type';
import { ProductRemoteDataSource } from './ProductRemoteDataSource';

export class ProductRepositoryImpl extends ProductRepository {
  async getProduct(query?: TListQuery): Promise<TProductRes> {
    const data: TProductRes = await ProductRemoteDataSource.getProduct(query);
    return data;
  }
}
