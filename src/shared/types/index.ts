export type TResponse = {
  message: string;
};

export type TListQuery = {
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
};

export type TMode = 'create' | 'update' | 'delete' | 'view';

export type TRole = 'admin' | 'user';
