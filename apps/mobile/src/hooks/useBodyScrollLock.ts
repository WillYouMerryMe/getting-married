import { useEffect } from 'react';

export default function useBodyScrollLock(lock: boolean) {
  useEffect(() => {
    document.body.style.overflow = lock ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lock]);
}
