import { married } from '@/apis/instance/instance';
import authorization from '@/apis/token/token';
import { PostLoginReq } from '@/types/auth/remote';

export const postLogin = async ({ code, provider }: PostLoginReq) => {
  const { data } = await married.post('/auth/login', { code, provider });

  return data;
};

export const postLogout = async (token: string) => {
  const { data } = await married.post('/auth/logout', { token }, authorization());

  return data;
};
