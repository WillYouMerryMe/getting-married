import { married } from '@/apis/instance/instance';
import { PostLoginReq, PostLoginRes } from '@/types/auth/remote';

export const postLogin = async ({ code, provider }: PostLoginReq) => {
  const { data } = await married.post<PostLoginRes>('/auth/login', { code, provider });

  return data;
};

export const postReissue = async (refreshToken: string) => {
  const { data } = await married.post('/auth/reissue', {
    refreshToken,
  });

  return data;
};

export const postLogout = async (refreshToken: string) => {
  const { data } = await married.post('/auth/logout', {
    refreshToken,
  });

  return data;
};
