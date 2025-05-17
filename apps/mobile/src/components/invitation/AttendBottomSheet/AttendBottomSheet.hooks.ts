import { useState } from 'react';

export const useInput = () => {
  const [count, setCount] = useState('1');

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // 빈값 허용, 아니면 숫자만 허용
    if (raw === '' || /^\d+$/.test(raw)) {
      setCount(raw);
    }
  };

  const handleCountBlur = () => {
    // blur 시 빈값이거나 1 미만이면 1로 복구
    const num = parseInt(count, 10);
    if (isNaN(num) || num < 1) {
      setCount('1');
    }
  };

  return { handleCountChange, handleCountBlur, count };
};
