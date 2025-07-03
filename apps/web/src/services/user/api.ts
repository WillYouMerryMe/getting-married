import { married } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { getUsersRes } from '@/types/user/remote';

export const getUsers = async () => {
  const { data } = await married.get<getUsersRes>('/users', authorization());

  return data;
};
