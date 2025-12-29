import { TListQuery, TResponse } from '@/src/shared/types';
import { TUsersRes } from '../domain/entities/type';
import { UsersRepository } from '../domain/UserRepository';
import { UserRemoteDataSource } from './UserRemoteDataSource';

export class UsersRepositoryImpl extends UsersRepository {
  async getUsers(query?: TListQuery): Promise<TUsersRes> {
    const data: TUsersRes = await UserRemoteDataSource.getUsers(query);
    return data;
  }
}
