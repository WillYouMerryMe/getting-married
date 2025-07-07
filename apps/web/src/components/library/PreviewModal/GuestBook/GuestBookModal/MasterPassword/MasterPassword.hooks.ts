import { useSetGuestBookStepStore } from '@/store/form/guestbookStep';
import { useState } from 'react';

export const useMasterPassword = (onClose: () => void, password: string) => {
  const setGuestBook = useSetGuestBookStepStore();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleCloseModal = () => {
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handlePasswordSubmit = () => {
    if (inputValue === password) {
      setGuestBook('방명록 확인');
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  return { error, inputValue, handleCloseModal, handleInputChange, handlePasswordSubmit };
};
