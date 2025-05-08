import { color } from '@merried/design-system';
import { BrandBadge, Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const MyInfo = () => {
  return (
    <StyledMyInfo onClick={() => {}}>
      <Column gap={4}>
        <Row gap={8} alignItems="center">
          <Text fontType="H3" color={color.G900}>
            박강원님
          </Text>
          <BrandBadge type="NAVER" />
        </Row>
        <Text fontType="P3" color={color.G60}>
          pkw0227@gmail.com
        </Text>
      </Column>
      <div onClick={() => {}}>
        <Text fontType="P3" color={color.G100}>
          로그아웃
        </Text>
      </div>
    </StyledMyInfo>
  );
};

export default MyInfo;

const StyledMyInfo = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 51px;
`;
