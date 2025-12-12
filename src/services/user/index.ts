import { TUser } from '@/src/shared/context/AuthContext';
import api from '../api';

const getUserInfo = () => api.get<{ data: TUser }>('/user/userInfo');

export { getUserInfo };
