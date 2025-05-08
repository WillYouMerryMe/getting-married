import { color } from '@merried/design-system';
import { IconArrow } from '@merried/icon';
import { BrandBadge, Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const MyInfo = () => {
  return (
    <StyledMyInfo onClick={() => {}}>
      <Column gap={6}>
        <Row gap={8} alignItems="center">
          <Text fontType="H3_140per" color={color.G900}>
            박강원님
          </Text>
          <BrandBadge type="NAVER" />
        </Row>
        <Text fontType="P3" color={color.G60}>
          pkw0227@gmail.com
        </Text>
      </Column>
      <IconArrow width={18} height={18} direction="left" />
    </StyledMyInfo>
  );
};

export default MyInfo;

const StyledMyInfo = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 51px;
`;
