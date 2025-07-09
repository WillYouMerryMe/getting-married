import { married } from '@/apis/instance/instance';
import authorization from '@/apis/token/token';
import {
  GetAttendee,
  GetAttendeeParms,
  PatchAttendeeParams,
  PostAccountReq,
  PostAttendeeReq,
  PostIntentionReq,
} from '@/types/invitation/remote';

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

export const getAttendee = async (
  { isAttendee, isEating, hasSentGift }: GetAttendeeParms,
  cardId: string
) => {
  const { data } = await married.get<GetAttendee>(`/attendees/${cardId}`, {
    ...authorization(),
    params: { isAttendee, isEating, hasSentGift },
  });

  return data;
};

export const postAttendee = async ({
  cardId,
  side,
  name,
  phoneNumber,
  numberOfAttendees,
  mealPreference,
  hasSentGift,
  isAttending,
}: PostAttendeeReq) => {
  const { data } = await married.post(
    '/attendees',
    {},
    {
      ...authorization(),
      params: {
        cardId,
        side,
        name,
        phoneNumber,
        numberOfAttendees,
        mealPreference,
        hasSentGift,
        isAttending,
      },
    }
  );

  return data;
};

export const deleteAttendee = async (id: string) => {
  const { data } = await married.delete(`/attendees/${id}`, authorization());

  return data;
};

export const patchAttendee = async ({
  attendeeId,
  numberOfAttendees,
  isAttending,
  hasSentGift,
  mealPreference,
}: PatchAttendeeParams) => {
  const { data } = await married.patch(
    '/attendees',
    {},
    {
      ...authorization(),
      params: { attendeeId, numberOfAttendees, isAttending, hasSentGift, mealPreference },
    }
  );

  return data;
};
