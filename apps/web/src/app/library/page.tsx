'use client';

import InvitationList from '@/components/library/InvitationList';
import AppLayout from '@/layouts/AppLayout';
import { useResetFormStores } from '@/store/form/recoilReset';
import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useEffect } from 'react';
import { styled } from 'styled-components';

const Library = () => {
  const { resetAllFormState } = useResetFormStores();

  useEffect(() => {
    resetAllFormState();
  }, []);

  return (
    <AppLayout>
      <StyledLibrary>
        <Text fontType="H1" color={color.G900}>
          저장된 청접장
        </Text>
        <InvitationListWrapper>
          <InvitationList />
        </InvitationListWrapper>
      </StyledLibrary>
    </AppLayout>
  );
};

export default Library;

const StyledLibrary = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 34px;
  width: 100%;
  height: 100vh;
  padding: 160px 120px 0px 120px;
  background: #fafafa;
`;

const InvitationListWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  ${flex({ flexDirection: 'column' })}
`;
