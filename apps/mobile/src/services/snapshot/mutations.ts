import { useMutation } from '@tanstack/react-query';
import { postGuestSnapShot } from './api';
import { PostGuestSnapShotReq } from '@/types/snapshot/remote';

export const useGusetSnapShotMutation = () => {
  const { mutate: guestSnapShotMutate, ...restMutate } = useMutation({
    mutationFn: ({ cardId, urls }: PostGuestSnapShotReq) =>
      postGuestSnapShot({ cardId, urls }),
    onSuccess: () => {
      alert('사진 전송이 완료되었습니다.');
    },
    onError: () => {
      alert('잠시후 다시 시도해주세요.');
    },
  });

  return { guestSnapShotMutate, ...restMutate };
};
