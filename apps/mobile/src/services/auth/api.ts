import { married } from '@/apis/instance/instance';
import { PostLoginReq } from '@/types/auth/remote';

export const postLogin = async ({ code, provider }: PostLoginReq) => {
  const { data } = await married.post('/auth/login', { code, provider });

  return data;
};
