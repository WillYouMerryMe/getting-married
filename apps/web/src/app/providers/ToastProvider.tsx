import { Toast } from '@/components/common';
import { useToastController } from '@/utils';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToastController();

  return (
    <>
      {children}
      {toast &&
        ReactDOM.createPortal(
          <Toast label={toast.label} type={toast.type} />,
          document.body
        )}
    </>
  );
};
