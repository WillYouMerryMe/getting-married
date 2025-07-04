import { married } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { PostLoginReq, PostLoginRes } from '@/types/auth/remote';

export const postLogin = async ({ code, provider }: PostLoginReq) => {
  const { data } = await married.post<PostLoginRes>('/auth/login', { code, provider });

  return data;
};

export const postReissue = async (token: string) => {
  const { data } = await married.post('/auth/reissue', {
    token,
  });

  return data;
};

export const postLogout = async (token: string) => {
  const { data } = await married.post('/auth/logout', {
    token,
  });

  return data;
};

export const deleteWithdraw = async () => {
  const { data } = await married.delete('/auth', authorization());

  return data;
};
