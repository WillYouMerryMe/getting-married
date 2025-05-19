import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface GuideProps {
  content: string;
}

const Guide = ({ content }: GuideProps) => {
  return (
    <StyledGuide>
      <CustomText
        fontType="Ownglyph Kundo"
        size={24}
        weight={400}
        line={100}
        color={color.G900}
      >
        안내사항
      </CustomText>
      <CustomText
        fontType="Ownglyph Kundo"
        size={18}
        weight={400}
        line={140}
        color={color.G80}
      >
        {content}
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
