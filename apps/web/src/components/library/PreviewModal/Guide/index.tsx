import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { useCardsQuery } from '@/services/form/queries';
import { CustomFontType } from '@/types/form/client';

interface Props {
  id: string;
}

const Guide = ({ id }: Props) => {
  const { data } = useCardsQuery(id);

  if (!data || !data?.guestNotice) return null;

  const notice = data.guestNotice;
  const invitationFont = data.invitationSetting.font;

  const { title, content: message } = notice;

  return (
    <StyledGuide>
      <CustomText
        fontType={invitationFont as CustomFontType}
        size={24}
        weight={400}
        line={100}
        color={color.G900}
      >
        {title || '안내사항'}
      </CustomText>
      <CustomText
        fontType={invitationFont as CustomFontType}
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
  gap: 12px;
`;
