'use client';

import Footer from '@/components/common/Footer/Footer';
import { flex } from '@merried/utils';
import { CSSProperties, ReactNode } from 'react';
import { styled } from 'styled-components';

interface AppLayoutProps {
  children: ReactNode;
  footer?: boolean;
  backgroundColor?: CSSProperties['backgroundColor'];
}

const AppLayout = ({ children, footer, backgroundColor }: AppLayoutProps) => {
  return (
    <>
      <StyledAppLayout style={{ backgroundColor }}>{children}</StyledAppLayout>
      {footer && <Footer />}
    </>
  );
};

export default AppLayout;

const StyledAppLayout = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  height: 100vh;
`;
