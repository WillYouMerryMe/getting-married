import { useLoginMutation } from '@/services/auth/mutations';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const CallbackNaverContent = () => {
  const searchParams = useSearchParams();
  const { loginMutate } = useLoginMutation();
  const alreadyRun = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code && !alreadyRun.current) {
      alreadyRun.current = true;
      const url = window.location.origin;
      loginMutate({ code, provider: 'NAVER', redirectUri: `${url}${pathname}` });
    }
  }, [searchParams, loginMutate, pathname]);

  return <></>;
};

export default CallbackNaverContent;
