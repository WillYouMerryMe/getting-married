'use client';

import { CallbackNaverContent } from '@/components/login';
import { Suspense } from 'react';

const CallbackNaver = () => {
  return (
    <Suspense>
      <CallbackNaverContent />
    </Suspense>
  );
};

export default CallbackNaver;
