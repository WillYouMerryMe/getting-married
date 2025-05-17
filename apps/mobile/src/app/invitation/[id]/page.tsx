'use client';

import AttendFloatButton from '@/components/invitation/AttendFloatButton/AttendFloatButton';
import CoupleInfo from '@/components/invitation/CoupleInfo/CoupleInfo';
import Direction from '@/components/invitation/Direction/Direction';
import Greeting from '@/components/invitation/Greeting/Greeting';
import StartBackground from '@/components/invitation/StartBackground/StartBackground';
import WeddingAlbum from '@/components/invitation/WeddingAlbum/WeddingAlbum';
import WeddingCalender from '@/components/invitation/WeddingCalender/WeddingCalender';
import WeddingIntro from '@/components/invitation/WeddingIntro/WeddingIntro';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import { Column, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const InvitationDetail = () => {
  const startRef = useRef<HTMLDivElement>(null);
  const [showAttend, setShowAttend] = useState(false);

  useEffect(() => {
    if (!startRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowAttend(!entry.isIntersecting),
      { rootMargin: '-20% 0px 0px 0px', threshold: 0 }
    );
    obs.observe(startRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <AppLayout backgroundColor={color.G0}>
      <Column width="100%" alignItems="center">
        <div ref={startRef} style={{ width: '100%' }}>
          <StartBackground man="JAEHO" woman="YUBIN" date="2025. 03. 20 SUN" />
        </div>
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
          <WeddingIntro
            vedioURL={
              'https://www.youtube.com/embed/-LtlYB6Iws8?rel=0&autoplay=1&mute=1&loop=1&playlist=-LtlYB6Iws8'
            }
          />
          <Direction
            address="경상남도 창원시 성산구 원이대로 332"
            detailAddress="그랜드 머큐어 앰배서더 창원"
            methods={{
              버스: '센트럴시티 앞 또는 고속터미널 앞(호남선) 하차 → 에스컬레이터 이용 → 신세계백화점 2층 불가리 매장 옆 아케이드 → 호텔 로비',
              지하철:
                '3, 7, 9호선 고속터미널역 하차\n- 3, 9호선 고속터미널역 7번 출구 → 나가기 전 우측 센트럴시티 연결 통로 → 에스컬레이터 이용 → 신세계백화점 2층 불가리 매장 옆 아케이드 → 호텔 로비\n\n- 7호선 고속터미널역 3번 출구 → 좌측 호텔 입구',
              자가용:
                '신세계 센트럴 주차장을 이용하시고, 직원에게 주차 인증을 받으시기 바랍니다. 자세한 사항은 유선번호\n(02-6282-6262)로 문의하시기 바랍니다.',
            }}
          />
          <Text fontType="P4" color={color.G80}>
            COPYRIGHT Kangwon Park. All rights reserved.
          </Text>
        </StyledInvitation>
      </Column>
      {showAttend && <AttendFloatButton />}
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
