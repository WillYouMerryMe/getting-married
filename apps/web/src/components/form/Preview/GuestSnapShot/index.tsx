import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import GuestSnapShotContent from './GuestSnapShotContent';
import { useGuestSnapValueStore } from '@/store/form/guestSnap';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';

const GuestSnapShot = () => {
  const { isToggle, title } = useGuestSnapValueStore();
  const { invitationFont } = useInvitationSetupValueStore();

  if (!isToggle) return null;

  return (
    <StyledGuestSnapShot>
      <Column gap={12} alignItems="center">
        <CustomText
          fontType={invitationFont}
          size={24}
          weight={400}
          line={100}
          color={color.G900}
        >
          {title || '게스트 스냅'}
        </CustomText>
        <CustomText
          fontType={invitationFont}
          size={18}
          weight={400}
          line={140}
          color={color.G80}
        >
          하나뿐일 특별한 사진을 남겨주세요!
          <br />
          많은 참여 부탁드립니다.
        </CustomText>
      </Column>
      <GuestSnapShotContent />
    </StyledGuestSnapShot>
  );
};

export default GuestSnapShot;

const StyledGuestSnapShot = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 20px;
`;
