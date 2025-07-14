import { CustomText } from '@/components/common';
import { CustomFontType } from '@/types/form/client';
import { PutCardReq } from '@/types/form/remote';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';

interface Props {
  data: PutCardReq;
}

const Greeting = ({ data }: Props) => {
  if (!data || !data?.invitationMessage) return null;

  const title = data.invitationMessage.title;
  const content = data.invitationMessage.content;
  const pointColor = data.invitationSetting.pointColor;
  const font = data.invitationSetting.font;

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
          fontType={font as CustomFontType}
          color={pointColor}
          size={24}
          weight={400}
          line={100}
        >
          {title || '초대글귀'}
        </CustomText>
        <CustomText
          fontType={font as CustomFontType}
          color={color.G900}
          size={18}
          weight={400}
          line={140}
        >
          {content}
        </CustomText>
      </Column>
    </Column>
  );
};

export default Greeting;
