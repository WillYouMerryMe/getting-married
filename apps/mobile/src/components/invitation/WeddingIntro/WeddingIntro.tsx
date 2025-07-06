import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface WeddingIntroProps {
  url: string;
  title?: string;
  font: string;
}
const WeddingIntro = ({ url, title, font }: WeddingIntroProps) => (
  <StyledWeddingIntro>
    <CustomText fontType={font} color={color.G900} size={24} line={100} weight={400}>
      {title}
    </CustomText>
    <WeddingVideo src={url} />
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
