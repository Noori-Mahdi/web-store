import { TResponse } from '@/src/shared/types';

export type TProduct = {
  id: string;
  name: string;
  catagory: TProductCategory;
  description: string;
  price: number;
  soldItems: number;
  quantity: number;
  image: TImage[];
};

export type TImage = {
  id: string;
  image: string;
  productId: string;
};

export type TProductCategory = 'MOBILE' | 'LAPTOP' | 'WATCH' | 'OTHER';

// Res
export type TProductRes = TResponse & {
  data?: TProduct[];
};
// serverAction
export type TAddProduct = Omit<TProduct, 'id' | 'image'> & { image: string };

export type TUpdateProduct = Partial<Omit<TProduct, 'image'>>;
