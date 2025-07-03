import { useQuery } from '@tanstack/react-query';
import { getUser } from './api';
import { KEY } from '@/constants/common/constant';

export const useUser = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.USER],
    queryFn: getUser,
    retry: false,
  });

  return { data, ...restQuery };
};
