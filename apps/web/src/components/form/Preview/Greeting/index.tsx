import { CustomText } from '@/components/common';
import { useInvitationMessageValueStore } from '@/store/form/InvitationMessage';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';

const Greeting = () => {
  const invitationMessage = useInvitationMessageValueStore();

  return (
    <Column gap={32} alignItems="center">
      <CustomText
        fontType="YUniverse-B"
        color={color.pointYellow}
        size={32}
        weight={700}
        line={100}
      >
        븿
      </CustomText>
      <Column gap={16} alignItems="center">
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.pointYellow}
          size={24}
          weight={400}
          line={100}
        >
          {invitationMessage.title}
        </CustomText>
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.G900}
          size={18}
          weight={400}
          line={140}
        >
          {invitationMessage.message}
        </CustomText>
      </Column>
    </Column>
  );
};

export default Greeting;
