'use client';

import InviteContent from '@/components/attendee/InviteContent/InviteContent';
import { ROUTES } from '@/constants/common/constant';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Invite = () => {
  const router = useRouter();

  const handleMoveManage = () => {
    router.push(ROUTES.MANAGE);
  };

  return (
    <AppLayout
      header
      footer
      name="참석자 추가"
      onClick={handleMoveManage}
      backgroundColor={color.G0}
    >
      <StyledInvite>
        <InviteContent />
      </StyledInvite>
    </AppLayout>
  );
};

export default Invite;

const StyledInvite = styled.div`
  width: 100%;
  padding: 136px 12px 142px;
`;
