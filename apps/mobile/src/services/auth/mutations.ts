import { PostLoginReq } from '@/types/auth/remote';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from './api';
import { useRouter } from 'next/navigation';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { Cookie } from '@/apis/storage/cookie';

export const useLoginMutation = () => {
  const router = useRouter();

  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: ({ code, provider }: PostLoginReq) => postLogin({ code, provider }),
    onSuccess: (res) => {
      const { accessToken, refreshToken, provider } = res;
      Cookie.setItem(TOKEN.ACCESS, accessToken);
      Cookie.setItem(TOKEN.REFRESH, refreshToken);
      Cookie.setItem('type', provider);
      router.replace(ROUTES.HOME);
    },
    onError: () => {
      Cookie.removeAll();
      alert('로그인에 실패했습니다. 잠시후 시도해주세요.');
      router.push(ROUTES.LOGIN);
    },
  });

  return { loginMutate, ...restMutation };
};
