import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getCardDetail, getCardList } from './api';

export const useCardListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.CARD_LIST],
    queryFn: getCardList,
    retry: false,
  });

  return { data, ...restQuery };
};

export const useCardDetailQuery = (id: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.CARD_DETAIL, id],
    queryFn: () => getCardDetail(id),
    retry: false,
  });

  return { data, ...restQuery };
};
