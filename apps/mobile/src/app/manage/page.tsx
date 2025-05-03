'use client';

import AttendeeList from '@/components/manage/AttendeeList/AttendeeList';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import { ActionButton, Column, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const Manage = () => {
  return (
    <AppLayout footer backgroundColor={color.G0}>
      <StyledManage>
        <Column gap={20}>
          <Text fontType="H2" color={color.G900}>
            참석자 관리
          </Text>
          <ActionButton icon="ADD_ICON" onClick={() => {}}>
            참석자 추가
          </ActionButton>
        </Column>
        <AttendeeList />
      </StyledManage>
    </AppLayout>
  );
};

export default Manage;

const StyledManage = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })}
  width: 100%;
  gap: 24px;
  padding: 71px 12px 115px;
`;
