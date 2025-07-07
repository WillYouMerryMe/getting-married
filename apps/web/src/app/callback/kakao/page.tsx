'use client';

import { useLoginMutation } from '@/services/auth/mutations';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense } from 'react';

const CallbackKakaoContent = () => {
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

  return <div>로그인 처리 중...</div>;
};

const CallbackKakao = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <CallbackKakaoContent />
    </Suspense>
  );
};

export default CallbackKakao;
