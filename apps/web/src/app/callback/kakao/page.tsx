'use client';

import { useLoginMutation } from '@/services/auth/mutation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const CallbackKakao = () => {
  const searchParams = useSearchParams();
  const { loginMutate } = useLoginMutation();
  const alreadyRun = useRef(false);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code && !alreadyRun.current) {
      alreadyRun.current = true;
      loginMutate({ code, provider: 'KAKAO' });
    }
  }, [searchParams, loginMutate]);

  return <></>;
};

export default CallbackKakao;
