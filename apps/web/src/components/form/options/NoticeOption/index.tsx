import { color } from '@merried/design-system';
import { Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { styled } from 'styled-components';

const NoticeOption = () => {
  return (
    <Column gap={28}>
      <Column gap={8}>
        <Row gap={8}>
          <ToggleButton isOpen={false} />
          <Text fontType="H3" color={color.G900}>
            안내사항
          </Text>
        </Row>
        <Text fontType="P3" color={color.G80}>
          하객 분들에게 전하시고 싶은 공지나 안내사항을 적어주세요.
        </Text>
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          제목
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="제목을 입력해주세요" />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          안내 문구<RequiredMark>*</RequiredMark>
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="안내 문구를 입력해주세요" />
      </Column>
    </Column>
  );
};

export default NoticeOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
