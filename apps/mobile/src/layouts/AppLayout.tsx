'use client';

import { flex } from '@merried/utils';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <StyledAppLayout>{children}</StyledAppLayout>;
};

export default AppLayout;

const StyledAppLayout = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  height: 100vh;
`;
