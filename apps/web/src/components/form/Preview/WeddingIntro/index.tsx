import CustomText from '@/components/common/CustomText/CustomText';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';
import { useWeddingIntroValueStore } from '@/store/form/weddingIntro';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const WeddingIntro = () => {
  const { videoURL, title, isToggle } = useWeddingIntroValueStore();
  const { invitationFont } = useInvitationSetupValueStore();

  const convertYouTubeUrlToEmbed = (url: string): string => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  };

  if (!videoURL || !isToggle) return null;
  return (
    <StyledWeddingIntro>
      <CustomText
        fontType={invitationFont}
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
