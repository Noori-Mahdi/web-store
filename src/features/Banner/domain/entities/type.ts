import { TResponse } from '@/src/shared/types';

export type TBanner = {
  id: string;
  title: string;
  tooltip: string;
  URL: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};
// Res
export type TBannerRes = TResponse & {
  data?: TBanner[];
};
// serverAction
export type TAddBanner = Pick<TBanner, 'title' | 'tooltip' | 'URL' | 'image'>;

export type TUpdateBanner = Partial<
  Pick<TBanner, 'id' | 'title' | 'tooltip' | 'URL' | 'image'>
>;

export type TDeleteBanner = Pick<TBanner, 'id'>;
