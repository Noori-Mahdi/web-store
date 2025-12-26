export const errorHandler = (error: any): string => {
  if (error && typeof error === 'object' && 'response' in error) {
    return error.response?.data?.message;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return 'INTERNAL_SERVER_ERROR';
  }
};
