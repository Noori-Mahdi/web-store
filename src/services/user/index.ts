import api from '@/src/lib/axios';
import { TUser } from '@/src/shared/context/AuthContext';

const getUserInfo = () => api.get<{ data: TUser }>('/user/userInfo');

export { getUserInfo };
