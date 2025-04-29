'use client';

import type { ReactNode } from 'react';
import { styled } from 'styled-components';
import { flex } from '@merried/utils';
import Header from '@/components/common/Header/Header';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <StyledAppLayout>
      <Header />
      <Section>{children}</Section>
    </StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  flex: 1;
  min-width: fit-content;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
