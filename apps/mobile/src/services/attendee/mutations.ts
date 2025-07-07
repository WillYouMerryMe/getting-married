import { useMutation } from '@tanstack/react-query';
import { postAccount } from './api';
import { PostAccountReq } from '@/types/invitation/remote';
import { useSetAccountStepStore } from '@/stores/invitation/accountStep';

export const useAccount = () => {
  const setAccountStep = useSetAccountStepStore();

  const { mutate: accountMutate, ...restMutate } = useMutation({
    mutationFn: ({ cardId, name, phoneNumber }: PostAccountReq) =>
      postAccount({ cardId, name, phoneNumber }),
    onSuccess: () => {
      setAccountStep('계좌번호');
    },
    onError: () => {
      alert('잠시후 다시 시도해주시길 바랍니다.');
    },
  });

  return { accountMutate, ...restMutate };
};
