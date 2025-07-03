import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api';
import { KEY } from '@/constants/common/constant';

export const useUsers = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.USERS],
    queryFn: getUsers,
  });

  return { data: data, ...restQuery };
};
