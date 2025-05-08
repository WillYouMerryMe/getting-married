'use client';

import MyInfoList from '@/components/my/MyInfoList/MyInfoList';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const My = () => {
  return (
    <AppLayout footer backgroundColor={color.G0}>
      <StyledMy>
        <Text fontType="H2" color={color.G900}>
          마이페이지
        </Text>
        <MyInfoList />
      </StyledMy>
    </AppLayout>
  );
};

export default My;

const StyledMy = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })}
  width: 100%;
  gap: 36px;
  padding: 71px 18px 115px;
`;
