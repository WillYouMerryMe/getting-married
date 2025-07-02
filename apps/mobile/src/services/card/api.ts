import { married } from '@/apis/instance/instance';
import authorization from '@/apis/token/token';
import { CardListRes } from '@/types/card/remote';

export const getCardList = async () => {
  const { data } = await married.get<CardListRes>('/cards/list', authorization());

  return data;
};
