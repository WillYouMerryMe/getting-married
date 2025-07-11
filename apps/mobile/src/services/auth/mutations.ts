import { PostLoginReq } from '@/types/auth/remote';
import { useMutation } from '@tanstack/react-query';
import { postLogin, postLogout } from './api';
import { useRouter } from 'next/navigation';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { Storage } from '@/apis/storage/storage';
import { useToast } from '@/utils/useToast';

export const useLoginMutation = () => {
  const router = useRouter();
  const invitationId = Storage.getItem('invitationId');
  const { show } = useToast();

  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: ({ code, provider }: PostLoginReq) => postLogin({ code, provider }),
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res;
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);

      if (invitationId) {
        router.replace(`${ROUTES.INVITATION}/${invitationId}`);
      } else {
        router.replace(ROUTES.HOME);
      }
      show('로그인에 성공했습니다', 'SUCCESS');
    },
    onError: () => {
      localStorage.clear();
      show('로그인에 실패했습니다', 'ERROR');
      router.replace(ROUTES.LOGIN);
    },
  });

  return { loginMutate, ...restMutation };
};

export const useLogoutMutation = () => {
  const router = useRouter();
  const { show } = useToast();

  const { mutate: logoutMutate, ...restMutation } = useMutation({
    mutationFn: (token: string) => postLogout(token),
    onSuccess: () => {
      localStorage.clear();
      router.replace(ROUTES.LOGIN);
      show('로그아웃에 성공했습니다', 'ERROR');
    },
    onError: () => {
      localStorage.clear();
      show('로그아웃에 실패했습니다', 'ERROR');
    },
  });

  return { logoutMutate, ...restMutation };
};
