import { useState } from 'react';

export type ToastType = 'SUCCESS' | 'ERROR';

interface ToastState {
  label: string;
  type: ToastType;
}

let setToastGlobal: (toast: ToastState | null) => void;

export const useToastController = () => {
  const [toast, _setToast] = useState<ToastState | null>(null);

  setToastGlobal = _setToast;

  return toast;
};

export const showToast = (label: string, type: ToastType) => {
  if (setToastGlobal) {
    setToastGlobal({ label, type });
    setTimeout(() => setToastGlobal(null), 3000);
  } else {
    console.warn('ToastProvider가 마운트되어 있지 않음');
  }
};
