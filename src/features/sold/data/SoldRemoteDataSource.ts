import ApiRouter from '@/src/shared/ApiRouter';
import api from '@/src/lib/axios';
import { TResponse, TListQuery } from '@/src/shared/types';
import { TSoldRes } from '../domain/entities/type';

export const SoldRemoteDataSource = {
  getSold: async (query?: TListQuery) => {
    const res = await api.get<TSoldRes>(ApiRouter.sold, { params: query });
    return res.data;
  },
};
