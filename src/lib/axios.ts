import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
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
