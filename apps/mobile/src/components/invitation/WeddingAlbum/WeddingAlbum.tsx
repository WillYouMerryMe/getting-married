'use client';

import { useState } from 'react';
import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { IconLongArrow } from '@merried/icon';
import { Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface WeddingAlbumProps {
  albumList: string[];
  font: string;
  pointColor: string;
  title: string;
}

const WeddingAlbum = ({ albumList, title, pointColor, font }: WeddingAlbumProps) => {
  const [current, setCurrent] = useState(0);
  const total = albumList?.length || 0;

  const prev = () => total > 0 && setCurrent((c) => (c - 1 + total) % total);
  const next = () => total > 0 && setCurrent((c) => (c + 1) % total);

  if (!albumList || total === 0) return null;

  return (
    <StyledWeddingAlbum>
      <CustomText fontType={font} color={pointColor} size={24} weight={400} line={140}>
        {title}
      </CustomText>
      <AlbumImage src={albumList[current]} />
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <div onClick={prev}>
          <IconLongArrow width={32} height={32} direction="left" />
        </div>
        <Text fontType="P2" color={color.G900}>
          {current + 1}/{total}
        </Text>
        <div onClick={next}>
          <IconLongArrow width={32} height={32} direction="right" />
        </div>
      </Row>
    </StyledWeddingAlbum>
  );
};

export default WeddingAlbum;

const StyledWeddingAlbum = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 517px;
  background-color: #fdfbf0;
  padding: 18px 14px;
  gap: 16px;
`;

const AlbumImage = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url(${(p) => encodeURI(p.src)}) center/cover no-repeat;
`;
