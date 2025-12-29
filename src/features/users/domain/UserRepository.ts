import { TListQuery } from '@/src/shared/types';
import { TUsersRes } from './entities/type';

export class UsersRepository {
  async getUsers(query?: TListQuery): Promise<TUsersRes> {
    throw new Error('Not implemented');
  }
}
