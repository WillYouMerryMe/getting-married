'use client';
export const dynamic = 'force-dynamic';

import { CallbackKakaoContent } from '@/components/login';
import { Suspense } from 'react';

const CallbackKakao = () => {
  return (
    <Suspense>
      <CallbackKakaoContent />
    </Suspense>
  );
};

export default CallbackKakao;
