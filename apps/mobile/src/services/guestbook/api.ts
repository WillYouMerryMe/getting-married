import { married } from '@/apis/instance/instance';
import authorization from '@/apis/token/token';
import { PostGuestBookCreateReq } from '@/types/guestbook/remote';

export const postGuestBookCreate = async ({
  cardId,
  name,
  content,
}: PostGuestBookCreateReq) => {
  const { data } = await married.post(
    '/guestbooks/create',
    { cardId, name, content },
    authorization()
  );

  return data;
};
