'use client';

import { useLoginMutation } from '@/services/auth/mutations';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const CallbackNaver = () => {
  const searchParams = useSearchParams();
  const { loginMutate } = useLoginMutation();
  const alreadyRun = useRef(false);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code && !alreadyRun.current) {
      alreadyRun.current = true;
      loginMutate({ code, provider: 'NAVER' });
    }
  }, [searchParams, loginMutate]);

  return <></>;
};

export default CallbackNaver;
