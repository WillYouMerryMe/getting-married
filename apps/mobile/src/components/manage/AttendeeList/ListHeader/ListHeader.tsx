import { color } from '@merried/design-system';
import { Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const ListHeader = () => {
  return (
    <StyledListHeader>
      <Text fontType="Button3" color={color.G80}>
        이름
      </Text>
      <Row alignItems="center" gap={20}>
        <Text fontType="Button3" color={color.G80}>
          참석
        </Text>
        <Text fontType="Button3" color={color.G80}>
          축의금
        </Text>
        <Text fontType="Button3" color={color.G80}>
          식권
        </Text>
      </Row>
    </StyledListHeader>
  );
};

export default ListHeader;

const StyledListHeader = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 58px;
  background-color: ${color.G10};
  border-radius: 8px;
  padding: 18px 16px;
`;
