import { married } from '@/apis/instance/instance';
import authorization from '@/apis/token/token';
import { GetGuestBookRes, PostGuestBookCreateReq } from '@/types/guestbook/remote';

export const postGuestBookCreate = async ({
  cardId,
  name,
  content,
}: PostGuestBookCreateReq) => {
  const { data } = await married.post('/guestbooks/create', { cardId, name, content });

  return data;
};

export const postGuestBook = async (cardId: string, password: string) => {
  const { data } = await married.post(
    '/guestbooks',
    { cardId, password },
    authorization()
  );

  return data;
};

export const getGuestBook = async (cardId: string) => {
  const { data } = await married.get<GetGuestBookRes>(
    `/guestbooks/${cardId}`,
    authorization()
  );

  return data;
};
