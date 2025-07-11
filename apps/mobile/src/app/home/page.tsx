'use client';

import Toast from '@/components/common/Toast/Toast';
import InvitationList from '@/components/home/InvitationList/InvitationList';
import AppLayout from '@/layouts/AppLayout';
import { useToast } from '@/utils/useToast';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const Home = () => {
  const { showToast, toastMessage, toastType } = useToast();

  return (
    <AppLayout footer backgroundColor={color.G20}>
      <StyledHome>
        <InvitationList />
      </StyledHome>
      {showToast && <Toast type={toastType}>{toastMessage}</Toast>}
    </AppLayout>
  );
};

export default Home;

const StyledHome = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  padding: 71px 32px 105px;
  box-sizing: border-box;
`;
