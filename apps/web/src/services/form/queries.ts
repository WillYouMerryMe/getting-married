import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getCardsList } from './apis';

export const useCardsListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.CARDS_LIST],
    queryFn: getCardsList,
  });

  return { data, ...restQuery };
};


