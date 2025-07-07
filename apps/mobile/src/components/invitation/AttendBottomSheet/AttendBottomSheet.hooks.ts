import { useState } from 'react';

export const useInput = () => {
  const [count, setCount] = useState(1);

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === '' || /^\d+$/.test(raw)) {
      setCount(Number(raw));
    }
  };

  const handleCountBlur = () => {
    const num = parseInt(String(count), 10);
    if (isNaN(num) || num < 1) {
      setCount(1);
    }
  };

  return { handleCountChange, handleCountBlur, count };
};
