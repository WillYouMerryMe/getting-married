import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface GreetingProps {
  pointColor: string;
  font: string;
  title: string;
  content: string;
}

const Greeting = ({ pointColor, font, title, content }: GreetingProps) => {
  return (
    <StyledGreeting>
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
        <CustomText fontType={font} color={pointColor} size={24} weight={400} line={100}>
          {title}
        </CustomText>
        <CustomText fontType={font} color={color.G900} size={18} weight={400} line={140}>
          {content}
        </CustomText>
      </Column>
    </StyledGreeting>
  );
};

export default Greeting;

const StyledGreeting = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 32px;
`;
