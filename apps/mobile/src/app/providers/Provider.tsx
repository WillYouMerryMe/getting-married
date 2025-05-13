'use client';

import { ReactNode } from 'react';
import { GlobalStyle } from '@merried/design-system';
import { RecoilRoot } from 'recoil';
import { OverlayProvider } from '@toss/use-overlay';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <OverlayProvider>
        <GlobalStyle />
        {children}
      </OverlayProvider>
    </RecoilRoot>
  );
};

export default Provider;
