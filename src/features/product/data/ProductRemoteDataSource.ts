import ApiRouter from '@/src/shared/ApiRouter';
import api from '@/src/lib/axios';
import { TResponse, TListQuery } from '@/src/shared/types';
import { TProductRes } from '../domain/entities/type';

export const ProductRemoteDataSource = {
  getProduct: async (query?: TListQuery) => {
    const res = await api.get<TProductRes>(ApiRouter.product, {
      params: query,
    });
    return res.data;
  },
};
