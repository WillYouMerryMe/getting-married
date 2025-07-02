import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getCardList } from './api';

export const useCardListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.CARD_LIST],
    queryFn: getCardList,
    retry: false,
  });

  return { data, ...restQuery };
};
