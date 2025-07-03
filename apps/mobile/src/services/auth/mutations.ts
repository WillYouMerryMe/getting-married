import { PostLoginReq } from '@/types/auth/remote';
import { useMutation } from '@tanstack/react-query';
import { postLogin, postLogout } from './api';
import { useRouter } from 'next/navigation';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { Storage } from '@/apis/storage/storage';

export const useLoginMutation = () => {
  const router = useRouter();

  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: ({ code, provider }: PostLoginReq) => postLogin({ code, provider }),
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res;
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      router.replace(ROUTES.HOME);
    },
    onError: () => {
      localStorage.clear();
      alert('로그인에 실패했습니다. 잠시후 시도해주세요.');
      router.push(ROUTES.LOGIN);
    },
  });

  return { loginMutate, ...restMutation };
};

export const useLogoutMutation = () => {
  const router = useRouter();

  const { mutate: logoutMutate, ...restMutation } = useMutation({
    mutationFn: (token: string) => postLogout(token),
    onSuccess: () => {
      router.replace(ROUTES.LOGIN);
    },
    onError: () => {
      localStorage.clear();
      alert('잠시후 다시 시도해주세요.');
    },
  });

  return { logoutMutate, ...restMutation };
};
