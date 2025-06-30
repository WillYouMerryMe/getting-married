'use client';

import InvitationList from '@/components/library/InvitationList';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';

const Library = () => {
  return (
    <AppLayout>
      <StyledLibrary>
        <Text fontType="H1" color={color.G900}>
          저장된 청접장
        </Text>
        <InvitationList />
      </StyledLibrary>
    </AppLayout>
  );
};

export default Library;

const StyledLibrary = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 34px;
  width: 100%;
  min-height: 100vh;
  padding: 80px 120px 0px 120px;

  background: #fafafa;
`;
