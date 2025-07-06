import { married } from '@/apis/instance/instance';
import authorization from '@/apis/token/token';
import { CardDetailRes, CardListRes } from '@/types/card/remote';

export const getCardList = async () => {
  const { data } = await married.get<CardListRes>('/cards/list', authorization());

  return data;
};

export const getCardDetail = async (id: string) => {
  const { data } = await married.get<CardDetailRes>(`/cards/${id}`, authorization());

  return data;
};
