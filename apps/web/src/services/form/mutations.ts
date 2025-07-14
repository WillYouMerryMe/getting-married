import { useRouter } from 'next/navigation';
import { deleteCards, postCards, postGuestSnapshots, putCardsUpdate } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { KEY, ROUTES } from '@/constants/common/constant';
import { showToast } from '@/utils';

export const useCreateCardMutation = () => {
  const router = useRouter();

  const { mutate: createCardMutate, ...restMutation } = useMutation({
    mutationFn: postCards,
    onSuccess: () => {
      showToast('청첩장이 생성되었습니다.', 'SUCCESS');
      router.push(ROUTES.LIBRARY);
    },
    onError: () => {
      showToast('청첩장이 생성되지 않았습니다.', 'ERROR');
    },
  });

  return { createCardMutate, ...restMutation };
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteCardMutate, ...restMutation } = useMutation({
    mutationFn: (id: string) => deleteCards(id),
    onSuccess: () => {
      alert('카드가 성공적으로 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: [KEY.CARDS_LIST] });
    },
    onError: () => {
      alert('카드 삭제에 실패했습니다.');
    },
  });

  return { deleteCardMutate, ...restMutation };
};

export const usePutCardMutation = () => {
  const router = useRouter();

  const { mutate: putCardMutate, ...restMutation } = useMutation({
    mutationFn: putCardsUpdate,
    onSuccess: () => {
      alert('카드가 성공적으로 수정되었습니다.');
      router.push(ROUTES.LIBRARY);
    },
    onError: () => {
      alert('카드 수정에 실패했습니다.');
    },
  });

  return { putCardMutate, ...restMutation };
};

export const usePostGuestSnapshot = (
  cardId: string,
  setStep: (step: 'PASSWORD' | 'LIST' | 'DETAIL') => void,
  setImages: (imgs: string[]) => void
) => {
  const { mutate: postGuestSnapshotMutate, ...restMutation } = useMutation({
    mutationFn: (password: string) => postGuestSnapshots(cardId, password),
    onSuccess: (imgs) => {
      setImages(imgs);
      setStep('LIST');
    },
  });

  return { postGuestSnapshotMutate, ...restMutation };
};
