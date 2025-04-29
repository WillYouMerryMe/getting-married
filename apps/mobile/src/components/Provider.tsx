import { ReactNode } from 'react';
import { GlobalStyle } from '@merried/design-system';
import { RecoilRoot } from 'recoil';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      {children}
    </RecoilRoot>
  );
};

export default Provider;
