import { useMutation } from '@tanstack/react-query';
import { postGuestSnapShot } from './api';
import { PostGuestSnapShotReq } from '@/types/snapshot/remote';
import { useToast } from '@/utils/useToast';

export const useGusetSnapShotMutation = () => {
  const { show } = useToast();
  const { mutate: guestSnapShotMutate, ...restMutate } = useMutation({
    mutationFn: ({ cardId, urls }: PostGuestSnapShotReq) =>
      postGuestSnapShot({ cardId, urls }),
    onError: () => {
      show('사전 전송에 실패했습니다', 'ERROR');
    },
  });

  return { guestSnapShotMutate, ...restMutate };
};
