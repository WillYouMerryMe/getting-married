import { color } from '@merried/design-system';
import { Column, Row, Text } from '@merried/ui';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <Row justifyContent="space-between">
        <Column gap={100}>
          <Text fontType="H2" color={color.G900}>
            우리 결혼할래요?
          </Text>
          <Text fontType="P3" color={color.G80}>
            메리위드마이바디 대표 : 박강원
            <br />
            경기도 의정부시 행복로 66
          </Text>
        </Column>
        <Row gap={77}>
          <Column gap={12}>
            <Text fontType="P3" color={color.G80}>
              공지사항
            </Text>
            <Text fontType="P3" color={color.G80}>
              회원정보
            </Text>
          </Column>
          <Column gap={12}>
            <Text fontType="P3" color={color.G80}>
              이용약관
            </Text>
            <Text fontType="P3" color={color.G80}>
              개인정보처리방침
            </Text>
          </Column>
        </Row>
      </Row>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.div`
  min-width: fit-content;
  height: 246px;
  padding: 36px 203px 40px 120px;
  background: ${color.G10};
  margin-top: auto;
`;
