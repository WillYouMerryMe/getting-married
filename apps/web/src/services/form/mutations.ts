import { useRouter } from 'next/navigation';
import { postCards } from './apis';
import { useMutation } from '@tanstack/react-query';
import { ROUTES } from '@/constants/common/constant';

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
