import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useMasterPassword = (onClose: () => void, password: string, id: string) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleCloseModal = () => {
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handlePasswordSubmit = () => {
    if (inputValue === password) {
      router.push(`${ROUTES.GUESTBOOK}/${id}`);
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  return { error, inputValue, handleCloseModal, handleInputChange, handlePasswordSubmit };
};
