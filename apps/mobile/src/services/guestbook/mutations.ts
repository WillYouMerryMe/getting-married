import { useMutation } from '@tanstack/react-query';
import { postGuestBook, postGuestBookCreate } from './api';
import { PostGuestBookCreateReq } from '@/types/guestbook/remote';
import { useToast } from '@/utils/useToast';

export const useGuestBookCreate = () => {
  const { show } = useToast();
  const { mutate: guestBookCreate, ...restMutate } = useMutation({
    mutationFn: ({ cardId, name, content }: PostGuestBookCreateReq) =>
      postGuestBookCreate({ cardId, name, content }),
    onSuccess: () => {
      show('방명록 작성에 성공했습니다', 'SUCCESS');
    },
    onError: () => {
      show('방명록 작성에 실패했습니다', 'ERROR');
    },
  });

  return { guestBookCreate, restMutate };
};

export const useGuestBook = (cardId: string) => {
  const { mutate: guestBookMutate, ...restMutate } = useMutation({
    mutationFn: ({ password }: { password: string }) => postGuestBook(cardId, password),
  });

  return { guestBookMutate, restMutate };
};
