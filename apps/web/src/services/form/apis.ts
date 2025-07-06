import { married } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { PostCardReq } from '@/types/form/remote';

export const postCards = async (params: PostCardReq) => {
  const { data } = await married.post('/cards', params, authorization());

  return data;
};
