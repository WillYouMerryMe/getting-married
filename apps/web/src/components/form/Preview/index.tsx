import { color } from '@merried/design-system';
import { IconShortArrow } from '@merried/icon';
import { Column, Row, Text, ToggleButton } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';

interface Props {
  id?: string;
}

const Preview = ({ id }: Props) => {
  return (
    <StyledPreview>
      <ImageLayer>
        <Circle>
          <IconShortArrow width={16} height={16} />
        </Circle>
      </ImageLayer>
      <Row gap={8} alignItems="center">
        <ToggleButton isOpen={true} />
        <Column gap={4}>
          <Text fontType="H4" color={color.G900}>
            자동 포커스
          </Text>
          <Text fontType="P3" color={color.G80}>
            수정하는 부분을 따라 포커스가 바뀝니다.
          </Text>
        </Column>
      </Row>
    </StyledPreview>
  );
};
export default Preview;

const StyledPreview = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 375px;
  gap: 20px;
`;

const ImageLayer = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' })}
  background-image: url('/templateFull1.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 812px;
`;

const Circle = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 44px;
  height: 44px;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(14.699999809265137px);
  margin-bottom: 24px;
  cursor: pointer;
`;
