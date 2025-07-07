import { married } from '@/apis/instance/instance';
import { PostAccountReq, PostIntentionReq } from '@/types/invitation/remote';

export const postAccount = async ({ cardId, name, phoneNumber }: PostAccountReq) => {
  const { data } = await married.post('/attendees/account', {
    cardId,
    name,
    phoneNumber,
  });

  return data;
};

export const postIntention = async ({
  cardId,
  side,
  name,
  phoneNumber,
  numberOfAttendees,
  mealPreference,
}: PostIntentionReq) => {
  const { data } = await married.post('/attendees/intention', {
    cardId,
    side,
    name,
    phoneNumber,
    numberOfAttendees,
    mealPreference,
  });

  return data;
};
