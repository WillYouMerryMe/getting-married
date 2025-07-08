import { married } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { GetCardListRes, GetCardRes, PostCardReq, PutCardReq } from '@/types/form/remote';
import axios from 'axios';

export const postCards = async (params: PostCardReq) => {
  const { data } = await married.post('/cards', params, authorization());

  return data;
};

export const getCardsList = async () => {
  const { data } = await married.get<GetCardListRes[]>('/cards/list', {
    ...authorization(),
  });

  return data;
};

export const deleteCards = async (id: string) => {
  const { data } = await married.delete(`/cards/${id}`, { ...authorization() });

  return data;
};

export const getCards = async (id: string) => {
  const { data } = await married.get<GetCardRes>(`/cards/${id}`, { ...authorization() });

  return data;
};

export const postGuestSnapshots = async (cardId: string, password: string) => {
  const { data } = await married.post<string[]>(
    `/guestSnapshots`,
    { cardId, password },
    authorization()
  );

  return data;
};

export const putCardsUpdate = async (params: PutCardReq) => {
  const { data } = await married.put('/cards/update', params, authorization());

  return data;
};

export const getPresigned = async (fileName: string) => {
  const { data } = await married.get('/files/presigned', {
    params: { fileName },
    ...authorization(),
  });

  return data;
};

export const putPresigned = async (file: File, url: string) => {
  const response = await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return response;
};

export const getDownloadUrl = async (uploadedUrl: string) => {
  const withoutQuery = uploadedUrl.split('?')[0];
  const fileKey = withoutQuery.replace(/^https:\/\/[^/]+\//, '');
  const decodedFileKey = decodeURIComponent(fileKey);

  const { data } = await married.get('/files/download', {
    params: { fileDomain: decodedFileKey },
    ...authorization(),
  });

  return data as string;
};
