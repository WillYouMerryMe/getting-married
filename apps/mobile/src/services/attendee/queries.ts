import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAttendee } from './api';
import { GetAttendeeParms } from '@/types/invitation/remote';
import { useCardListQuery } from '../card/queries';

export const useAttendee = ({ isAttendee, isEating, hasSentGift }: GetAttendeeParms) => {
  const { data: cardList } = useCardListQuery();
  const cardListId = cardList?.map((card) => card.id);

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ATTENDEE, { isAttendee, isEating, hasSentGift }, cardListId],
    queryFn: async () => {
      if (!cardListId || cardListId.length === 0) return [];
      const results = await Promise.all(
        cardListId.map((id) =>
          getAttendee(
            {
              isAttendee,
              isEating,
              hasSentGift,
            },
            id
          )
        )
      );
      return results.flat();
    },
    retry: false,
    enabled: !!cardListId && cardListId.length > 0,
  });

  return { data, ...restQuery };
};
