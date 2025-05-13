import React from 'react';
import { color } from '@merried/design-system';
import { IconArrow } from '@merried/icon';
import { Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { GIFT, GIFT_KEYS } from '@/constants/shop/constants';

interface GiftListProps {
  id: number;
  setId: (i: number) => void;
}

const GiftList = ({ id, setId }: GiftListProps) => {
  const prev = () => id > 0 && setId(id - 1);
  const next = () => id < GIFT_KEYS.length - 1 && setId(id + 1);

  const key = GIFT_KEYS[id];

  return (
    <StyledGiftList>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        {id > 0 ? (
          <Arrow onClick={prev}>
            <IconArrow width={16} height={16} direction="right" />
          </Arrow>
        ) : (
          <Spacer />
        )}
        <ItemImage src={`/images/${key}.svg`} />
        {id < GIFT_KEYS.length - 1 ? (
          <Arrow onClick={next}>
            <IconArrow width={16} height={16} direction="left" />
          </Arrow>
        ) : (
          <Spacer />
        )}
      </Row>

      <Text fontType="H3" color={color.G900}>
        {GIFT[key]}
      </Text>
    </StyledGiftList>
  );
};

export default GiftList;

const StyledGiftList = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 18px;
`;

const Arrow = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.div`
  width: 16px;
`;

const ItemImage = styled.div<{ src: string }>`
  width: 100%;
  aspect-ratio: 351 / 155;
  margin: 0 12px;
  background: url(${(p) => p.src}) center/contain no-repeat;
`;
