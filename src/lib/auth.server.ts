// lib/auth.server.ts
import { cookies } from 'next/headers';
import { serverAuth } from '../services/auth';
import type { TUser } from '@/src/shared/context/AuthContext';

export async function getServerUser(): Promise<TUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return null;

  try {
    const res = await serverAuth(token);

    return res.data as TUser;
  } catch (err) {
    console.error(err);
    return null;
  }
}
