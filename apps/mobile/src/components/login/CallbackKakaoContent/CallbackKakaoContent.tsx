import { useLoginMutation } from '@/services/auth/mutations';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const CallbackKakaoContent = () => {
  const searchParams = useSearchParams();
  const { loginMutate } = useLoginMutation();
  const alreadyRun = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code && !alreadyRun.current) {
      alreadyRun.current = true;
      const url = window.location.origin;
      loginMutate({ code, provider: 'KAKAO', redirectUri: `${url}${pathname}` });
    }
  }, [searchParams, loginMutate, pathname]);

  return <></>;
};

export default CallbackKakaoContent;
