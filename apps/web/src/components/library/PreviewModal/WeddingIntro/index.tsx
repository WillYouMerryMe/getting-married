import CustomText from '@/components/common/CustomText/CustomText';
import { CustomFontType } from '@/types/form/client';
import { PutCardReq } from '@/types/form/remote';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Props {
  data: PutCardReq;
}

const WeddingIntro = ({ data }: Props) => {
  if (!data || !data?.videoGallery) return null;

  const videoGallery = data.videoGallery;
  const invitationFont = data.invitationSetting.font;

  const videoURL = videoGallery.url;
  const title = videoGallery.title;

  const convertYouTubeUrlToEmbed = (url: string): string => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
    );
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  };

  if (!videoURL) return null;

  return (
    <StyledWeddingIntro>
      <CustomText
        fontType={invitationFont as CustomFontType}
        color={color.G900}
        size={24}
        line={100}
        weight={400}
      >
        {title || '식전 영상'}
      </CustomText>
      <WeddingVideo src={convertYouTubeUrlToEmbed(videoURL)} />
    </StyledWeddingIntro>
  );
};

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
