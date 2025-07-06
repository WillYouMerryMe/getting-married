import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface GuideProps {
  title?: string;
  content: string;
  font: string;
}

const Guide = ({ title, content, font }: GuideProps) => {
  return (
    <StyledGuide>
      <CustomText
        fontType={font}
        size={24}
        weight={400}
        line={100}
        color={color.G900}
      >
        {title}
      </CustomText>
      <CustomText
        fontType={font}
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
