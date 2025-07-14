'use client';

import { ReactNode } from 'react';
import { GlobalStyle } from '@merried/design-system';
import { RecoilRoot } from 'recoil';
import { OverlayProvider } from '@toss/use-overlay';
import { ToastProvider } from './ToastProvider';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <ToastProvider>
        <OverlayProvider>
          <GlobalStyle />
          {children}
        </OverlayProvider>
      </ToastProvider>
    </RecoilRoot>
  );
};

export default Provider;
