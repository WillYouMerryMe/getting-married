import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getGuestBook } from './api';

export const useGuestBook = (cardId: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.GUESTBOOK, cardId],
    queryFn: () => getGuestBook(cardId),
    retry: false,
  });

  return { data, ...restQuery };
};
