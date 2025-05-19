import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface WeddingIntroProps {
  vedioURL: string;
}
const WeddingIntro = ({ vedioURL }: WeddingIntroProps) => (
  <StyledWeddingIntro>
    <CustomText
      fontType="Ownglyph Kundo"
      color={color.G900}
      size={24}
      line={100}
      weight={400}
    >
      식전 영상
    </CustomText>
    <WeddingVideo src={vedioURL} />
  </StyledWeddingIntro>
);

export default WeddingIntro;

const StyledWeddingIntro = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 16px;
`;

const WeddingVideo = styled.iframe.attrs<{ src: string }>((p) => ({
  src: p.src,
  allow: 'autoplay; encrypted-media',
  allowFullScreen: true,
}))`
  width: 100%;
  aspect-ratio: 16 / 9;
  height: 100%;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  display: block;
`;
