import ApiRouter from '@/src/shared/ApiRouter';
import api from '@/src/lib/axios';
import { TResponse, TListQuery } from '@/src/shared/types';
import { TBannerRes } from '../domain/entities/type';

export const BannerRemoteDataSource = {
  getBanner: async (query?: TListQuery) => {
    const res = await api.get<TBannerRes>(ApiRouter.banner, { params: query });
    return res.data;
  },
};
