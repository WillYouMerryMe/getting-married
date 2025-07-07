import { useRouter } from 'next/navigation';
import { deleteCards, postCards } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { KEY, ROUTES } from '@/constants/common/constant';

export const useCreateCardMutation = () => {
  const router = useRouter();

  const { mutate: createCardMutate, ...restMutation } = useMutation({
    mutationFn: postCards,
    onSuccess: () => {
      alert('성공적으로 생성됨');
      router.push(ROUTES.LIBRARY);
    },
    onError: (error) => {
      alert('실패');
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
