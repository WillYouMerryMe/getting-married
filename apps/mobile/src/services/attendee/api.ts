import { married } from '@/apis/instance/instance';
import { PostAccountReq } from '@/types/invitation/remote';

export const postAccount = async ({ cardId, name, phoneNumber }: PostAccountReq) => {
  const { data } = await married.post('/attendees/account', {
    cardId,
    name,
    phoneNumber,
  });

  return data;
};
