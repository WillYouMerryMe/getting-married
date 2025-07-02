import { married } from '@/apis/instance/instance';
import { PostLoginReq, PostLoginRes } from '@/types/auth/remote';

export const postLogin = async ({ code, provider }: PostLoginRes) => {
  const { data } = await married.post<PostLoginReq>('/auth/login', { code, provider });

  return data;
};
