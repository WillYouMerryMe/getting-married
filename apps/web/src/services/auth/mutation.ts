import { useMutation } from '@tanstack/react-query';
import { postLogin } from './api';
import { Storage } from '@/apis/storage/storage';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

export const useLoginMutation = () => {
  const router = useRouter();
  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: postLogin,
    onSuccess: ({ accessToken, refreshToken, provider }) => {
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      Storage.setItem('type', provider);
      router.replace(ROUTES.MAIN);
    },
    onError: (error) => {
      Storage.clear();
      console.error('로그인 중 에러 발생:', error);
      router.replace(ROUTES.MAIN);
    },
  });

  return { loginMutate, ...restMutation };
};
