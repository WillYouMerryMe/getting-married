import { AccountSchema } from '@/schemas/AccountSchema';
import { useSetAccountStepStore } from '@/stores/invitation/accountStep';
import { useState } from 'react';

export const useViewAccount = (onClose: () => void) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<{
    name?: string;
    phoneNumber?: string;
  }>({});
  const setAccountStep = useSetAccountStepStore();

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
      setAccountStep('계좌번호');
    }
  };

  return { handleCloseModal, handleInputChange, handleSubmit, errors, formData };
};
