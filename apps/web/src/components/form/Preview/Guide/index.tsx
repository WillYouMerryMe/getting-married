import CustomText from '@/components/common/CustomText/CustomText';
import { useNoticeValueStore } from '@/store/form/notice';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const Guide = () => {
  const { isToggle, title, message } = useNoticeValueStore();

  if (!isToggle) return null;

  return (
    <StyledGuide>
      <CustomText
        fontType="Ownglyph Kundo"
        size={24}
        weight={400}
        line={100}
        color={color.G900}
      >
        {title}
      </CustomText>
      <CustomText
        fontType="Ownglyph Kundo"
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
