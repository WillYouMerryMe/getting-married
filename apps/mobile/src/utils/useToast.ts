import { atom, useRecoilState } from 'recoil';

export type ToastType = 'ERROR' | 'SUCCESS';

const toastState = atom({
  key: 'toastState',
  default: {
    showToast: false,
    toastMessage: '',
    toastType: 'SUCCESS' as 'ERROR' | 'SUCCESS',
  },
});

export const useToast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const show = (message: string, type: 'ERROR' | 'SUCCESS' = 'SUCCESS') => {
    setToast({
      showToast: true,
      toastMessage: message,
      toastType: type,
    });
    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        showToast: false,
      }));
    }, 3000);
  };

  return {
    showToast: toast.showToast,
    toastMessage: toast.toastMessage,
    toastType: toast.toastType,
    show,
  };
};
