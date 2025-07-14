import { useRouter } from 'next/navigation';
import { deleteCards, postCards, postGuestSnapshots, putCardsUpdate } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { KEY, ROUTES } from '@/constants/common/constant';
import { showToast } from '@/utils';
import { AxiosError } from 'axios';

export const useCreateCardMutation = () => {
  const router = useRouter();

  const { mutate: createCardMutate, ...restMutation } = useMutation({
    mutationFn: postCards,
    onSuccess: () => {
      showToast('청첩장이 생성되었습니다.', 'SUCCESS');
      router.push(ROUTES.LIBRARY);
    },
    onError: (error: AxiosError) => {
      const statusCode = error.response?.status;

      if (statusCode === 400) {
        showToast('필수 정보를 입력해주세요.', 'ERROR');
      } else {
        showToast('청첩장이 생성되지 않았습니다.', 'ERROR');
      }
    },
  });

  return { createCardMutate, ...restMutation };
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteCardMutate, ...restMutation } = useMutation({
    mutationFn: (id: string) => deleteCards(id),
    onSuccess: () => {
      showToast('청첩장이 삭제되었습니다.', 'SUCCESS');
      queryClient.invalidateQueries({ queryKey: [KEY.CARDS_LIST] });
    },
    onError: () => {
      showToast('청첩장이 삭제되지 않았습니다.', 'ERROR');
    },
  });

  return { deleteCardMutate, ...restMutation };
};

export const usePutCardMutation = () => {
  const router = useRouter();

  const { mutate: putCardMutate, ...restMutation } = useMutation({
    mutationFn: putCardsUpdate,
    onSuccess: () => {
      showToast('청첩장이 수정되었습니다.', 'SUCCESS');
      router.push(ROUTES.LIBRARY);
    },
    onError: () => {
      showToast('청첩장이 수정되지 않았습니다.', 'ERROR');
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
