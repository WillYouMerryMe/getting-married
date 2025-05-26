import CustomText from '@/components/common/CustomText/CustomText';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';
import { useNoticeValueStore } from '@/store/form/notice';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const Guide = () => {
  const { isToggle, title, message } = useNoticeValueStore();
  const { invitationFont } = useInvitationSetupValueStore();

  if (!isToggle) return null;

  return (
    <StyledGuide>
      <CustomText
        fontType={invitationFont}
        size={24}
        weight={400}
        line={100}
        color={color.G900}
      >
        {title}
      </CustomText>
      <CustomText
        fontType={invitationFont}
        size={18}
        weight={400}
        line={140}
        color={color.G80}
      >
        {message}
      </CustomText>
    </StyledGuide>
  );
};

export default Guide;

const StyledGuide = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: 100%;
  gap: 12px;
`;
