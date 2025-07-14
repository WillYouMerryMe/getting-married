import { married } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { PostLoginReq, PostLoginRes } from '@/types/auth/remote';

export const postLogin = async ({ code, provider }: PostLoginReq) => {
  const redirectUri =
    provider === 'NAVER'
      ? process.env.NEXT_PUBLIC_NAVER_REDIRECT
      : process.env.NEXT_PUBLIC_KAKAO_REDIRECT;

  const { data } = await married.post<PostLoginRes>('/auth/login', {
    code,
    provider,
    redirectUri,
  });

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
