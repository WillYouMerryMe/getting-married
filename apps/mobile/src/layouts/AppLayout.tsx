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
    <StyledAppLayout style={{ backgroundColor }}>
      <LayoutWrapper>{children}</LayoutWrapper>
      {footer && <Footer />}
    </StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  min-height: 100vh;
`;

const LayoutWrapper = styled.main`
  flex: 1;
  width: 100%;
`;
