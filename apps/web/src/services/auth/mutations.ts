import { useMutation } from '@tanstack/react-query';
import { postLogin, postLogout } from './apis';
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

export const useLogoutMutation = () => {
  const router = useRouter();

  const { mutate: logoutMutate, ...restMutation } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      router.replace(ROUTES.MAIN);
      setTimeout(() => {
        window.location.reload();
      }, 500);
      localStorage.clear();
    },
  });

  const handleLogout = () => {
    const refreshToken = Storage.getItem(TOKEN.REFRESH);
    if (refreshToken) {
      logoutMutate(refreshToken);
    }
  };

  return { logoutMutate: handleLogout, ...restMutation };
};
