import { married } from '@/apis/instance/instance';
import { PostLoginReq, PostLoginRes } from '@/types/auth/remote';

export const postLogin = async ({ code, provider }: PostLoginReq) => {
  const { data } = await married.post<PostLoginRes>('/auth/login', { code, provider });

  return data;
};
