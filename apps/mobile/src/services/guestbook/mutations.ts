import { useMutation } from '@tanstack/react-query';
import { postGuestBookCreate } from './api';
import { PostGuestBookCreateReq } from '@/types/guestbook/remote';

export const useGuestBookCreate = () => {
  const { mutate: guestBookCreate, ...restMutate } = useMutation({
    mutationFn: ({ cardId, name, content }: PostGuestBookCreateReq) =>
      postGuestBookCreate({ cardId, name, content }),
    onError: () => {
      alert('잠시후 다시 시도해주세요.');
    },
  });

  return { guestBookCreate, restMutate };
};
