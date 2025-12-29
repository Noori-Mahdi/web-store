import ApiRouter from '@/src/shared/ApiRouter';
import api from '@/src/lib/axios';
import { TUsersRes } from '../domain/entities/type';
import { TResponse, TListQuery } from '@/src/shared/types';

export const UserRemoteDataSource = {
  getUsers: async (query?: TListQuery) => {
    const res = await api.get<TUsersRes>(ApiRouter.users, { params: query });
    return res.data;
  },
};
