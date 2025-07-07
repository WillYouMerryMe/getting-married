import { married } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { GetCardListRes, PostCardReq } from '@/types/form/remote';
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
