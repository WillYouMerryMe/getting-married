'use client';

import AttendeeList from '@/components/attendee/AttendeeList/AttendeeList';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const Attendee = () => {
  return (
    <AppLayout footer backgroundColor={color.G0}>
      <StyledAttendee>
        <Text fontType="H2" color={color.G900}>
          참석자 관리
        </Text>
        <AttendeeList />
      </StyledAttendee>
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
  gap: 24px;
  padding: 71px 12px 115px;
`;
