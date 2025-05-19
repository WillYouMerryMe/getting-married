import { color } from '@merried/design-system';
import { Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { styled } from 'styled-components';

const VideoOption = () => {
  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={false} />
        <Text fontType="H3" color={color.G900}>
          영상
        </Text>
      </Row>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          영상 제목
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="제목을 입력해주세요" />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          유튜브 URL<RequiredMark>*</RequiredMark>
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="URL을 입력해주세요" />
      </Column>
    </Column>
  );
};

export default VideoOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
