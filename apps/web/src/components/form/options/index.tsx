import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import {
  InvitationNameOption,
  InvitationSetupOption,
  MainScreenOption,
  InvitationMessageOption,
  GroomIntroOption,
  BrideIntroOption,
  CeremonyInfoOption,
  GalleryOption,
  VideoOption,
  DirectionsOption,
  AccountInfoOption,
  NoticeOption,
  GuestbookOption,
  GuestSnapOption,
  UrlShareStyleOption,
} from '@/components/form';

const Options = () => {
  return (
    <StyledOptions>
      <InvitationNameOption />
      <InvitationSetupOption />
      <MainScreenOption />
      <InvitationMessageOption />
      <GroomIntroOption />
      <BrideIntroOption />
      <CeremonyInfoOption />
      <GalleryOption />
      <VideoOption />
      <DirectionsOption />
      <AccountInfoOption />
      <NoticeOption />
      <GuestbookOption />
      <GuestSnapOption />
      <UrlShareStyleOption />
    </StyledOptions>
  );
};

export default Options;

const StyledOptions = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  padding-bottom: 100px;
  gap: 18px;
`;
