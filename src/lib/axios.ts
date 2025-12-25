import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

// api.interceptors.request.use((config) => {
//   const token =
//     typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//   if (token && config.headers) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default api;
