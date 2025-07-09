import { ROUTES } from '@/constants/common/constant';
import { useGuestBook } from '@/services/guestbook/mutations';
import { useSetGuestBookStore } from '@/stores/guestbook/guestBook';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useMasterPassword = (onClose: () => void, password: string, id: string) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { guestBookMutate } = useGuestBook(id);
  const router = useRouter();
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
            router.push(`${ROUTES.GUESTBOOK}/${id}`);
            setGuestBook(data);
          },
        }
      );
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  return { error, inputValue, handleCloseModal, handleInputChange, handlePasswordSubmit };
};
