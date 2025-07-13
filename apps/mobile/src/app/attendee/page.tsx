'use client';

import AttendeeList from '@/components/attendee/AttendeeList/AttendeeList';
import Toast from '@/components/common/Toast/Toast';
import AppLayout from '@/layouts/AppLayout';
import { useToast } from '@/utils/useToast';
import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const Attendee = () => {
  const { showToast, toastMessage, toastType } = useToast();

  return (
    <AppLayout footer backgroundColor={color.G0}>
      <StyledAttendee>
        <Text fontType="H2" color={color.G900}>
          참석자 관리
        </Text>
        <AttendeeList />
      </StyledAttendee>
      {showToast && <Toast type={toastType}>{toastMessage}</Toast>}
    </AppLayout>
  );
};

export default Attendee;

const StyledAttendee = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })}
  width: 100%;
  height: 100vh;
  gap: 24px;
  padding: 71px 12px 115px;
`;
