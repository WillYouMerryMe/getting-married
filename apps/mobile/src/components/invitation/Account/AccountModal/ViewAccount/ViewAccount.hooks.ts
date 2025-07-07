import { AccountSchema } from '@/schemas/AccountSchema';
import { useAccount } from '@/services/attendee/mutations';
import { useState } from 'react';

export const useViewAccount = (onClose: () => void, id: string) => {
  const { accountMutate } = useAccount();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<{
    name?: string;
    phoneNumber?: string;
  }>({});

  const handleCloseModal = () => {
    onClose();
  };

  const handleInputChange =
    (field: 'name' | 'phoneNumber') => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = () => {
    const result = AccountSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        phoneNumber: fieldErrors.phoneNumber?.[0],
      });
    } else {
      accountMutate({
        cardId: id,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
      });
    }
  };

  return { handleCloseModal, handleInputChange, handleSubmit, errors, formData };
};
