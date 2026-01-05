import { TProduct } from '@/src/features/product/domain/entities/type';
import { TUser } from '@/src/features/users/domain/entities/type';
import { TResponse } from '@/src/shared/types';

export type TSold = {
  id: string;
  userId: string;
  user: TUser;
  items: TSoldItem[];
  total: number;
  createdAt: string;
};

export type TSoldItem = {
  id: string;
  soldId: string;
  sold: TSold;
  productId: string;
  product: TProduct;
  quantity: number;
  price: number;
  createdAt: string;
};

// Res
export type TSoldRes = TResponse & {
  data?: TSold[];
};

// serverAction

export type TAddSold = Pick<TSold, 'total'>;

export type TUpdateSold = Partial<Pick<TSold, 'id' | 'total'>>;

export type TDeleteSold = Partial<Pick<TSold, 'id'>>;

// Table
export type TSoldTable = Pick<TSold, 'id' | 'userId' | 'total'>;
