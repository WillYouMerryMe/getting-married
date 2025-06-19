import { CustomText } from '@/components/common';
import { useInvitationMessageValueStore } from '@/store/form/invitationMessage';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';

const Greeting = () => {
  const { isToggle, title, message } = useInvitationMessageValueStore();
  const { pointColor, invitationFont } = useInvitationSetupValueStore();

  if (!isToggle) return null;

  return (
    <Column gap={32} alignItems="center">
      <CustomText
        fontType="YUniverse-B"
        color={pointColor}
        size={32}
        weight={700}
        line={100}
      >
        븿
      </CustomText>
      <Column gap={16} alignItems="center">
        <CustomText
          fontType={invitationFont}
          color={pointColor}
          size={24}
          weight={400}
          line={100}
        >
          {title || '초대글귀'}
        </CustomText>
        <CustomText
          fontType={invitationFont}
          color={color.G900}
          size={18}
          weight={400}
          line={140}
        >
          {message}
        </CustomText>
      </Column>
    </Column>
  );
};

export default Greeting;
