'use client';

import CoupleInfo from '@/components/invitation/CoupleInfo/CoupleInfo';
import Greeting from '@/components/invitation/Greeting/Greeting';
import StartBackground from '@/components/invitation/StartBackground/StartBackground';
import WeddingAlbum from '@/components/invitation/WeddingAlbum/WeddingAlbum';
import WeddingCalender from '@/components/invitation/WeddingCalender/WeddingCalender';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import { Column, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const InvitationDetail = () => {
  return (
    <AppLayout backgroundColor={color.G0}>
      <Column width="100%" alignItems="center">
        <StartBackground man="JAEHO" woman="YUBIN" date="2025. 03. 20 SUN" />
        <StyledInvitation>
          <Greeting />
          <CoupleInfo
            coupleList={[
              { father: '박OO', mother: '이OO', gender: 'SON', name: '박아들' },
              { father: '최OO', mother: '이OO', gender: 'DAUGHTER', name: '최딸' },
            ]}
          />
          <WeddingCalender date="20250515" />
          <WeddingAlbum
            albumList={['/guestbook.png', '/images/album.svg', '/images/type01.svg']}
          />
          <Text fontType="P4" color={color.G80}>
            COPYRIGHT Kangwon Park. All rights reserved.
          </Text>
        </StyledInvitation>
      </Column>
    </AppLayout>
  );
};

export default InvitationDetail;

const StyledInvitation = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: 100%;
  padding: 32px 12px 100px;
  gap: 100px;
`;
