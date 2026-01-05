// API
export type TResponse = {
  message: string;
};
// Delete
export type TDelete = string;

// Server Action
export type ActionResult<T> =
  | { success: true; message: string; data?: T }
  | { success: false; message: Record<string, string[]> };
// Query
export type TListQuery = {
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  pageIndex?: number;
  pageSize?: number;
};
// Mode for forms
export type TMode = 'create' | 'update' | 'delete' | 'view';
// Global Role
export type TRole = 'admin' | 'user';
