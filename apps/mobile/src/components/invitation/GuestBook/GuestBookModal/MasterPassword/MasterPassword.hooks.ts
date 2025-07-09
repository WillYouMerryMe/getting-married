import { useGuestBook } from '@/services/guestbook/mutations';
import { useSetGuestBookStore } from '@/stores/guestbook/guestBook';
import { useSetGuestBookStepStore } from '@/stores/invitation/guestbookStep';
import { useState } from 'react';

export const useMasterPassword = (
  onClose: () => void,
  password: string,
  cardId: string
) => {
  const setGuestBookStep = useSetGuestBookStepStore();
  const [inputValue, setInputValue] = useState('');
  const { guestBookMutate } = useGuestBook(cardId);
  const [error, setError] = useState('');
  const setGuestBook = useSetGuestBookStore();

  const handleCloseModal = () => {
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handlePasswordSubmit = () => {
    if (inputValue === password) {
      guestBookMutate(
        { password: password },
        {
          onSuccess: (data) => {
            setGuestBook(data);

            setGuestBookStep('방명록 확인');
          },
        }
      );
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  return { error, inputValue, handleCloseModal, handleInputChange, handlePasswordSubmit };
};
