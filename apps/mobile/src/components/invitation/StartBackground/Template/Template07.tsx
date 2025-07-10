import CustomText from '@/components/common/CustomText/CustomText';
import { IconShortArrow } from '@merried/icon';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Template07Props {
  letteringColor: string;
  lettering: string[];
  font: string;
}

const Template07 = ({ letteringColor, lettering, font }: Template07Props) => {
  const TemplateFont: Record<string, { weight: number; line: number }> = {
    BBB0003: { weight: 700, line: 105 },
    'Ownglyph Kundo': { weight: 400, line: 105 },
    Diphylleia: { weight: 400, line: 105 },
    DOSGothic: { weight: 500, line: 105 },
    KoreanCNMM: { weight: 400, line: 105 },
    LeeSeoyun: { weight: 400, line: 105 },
    MapoDacapo: { weight: 400, line: 105 },
    'Ownglyph Baek Subin': { weight: 400, line: 105 },
    'Nelna Yesam': { weight: 400, line: 105 },
  };

  const { weight, line } = TemplateFont[font] || {
    weight: 400,
    line: 100,
  };

  return (
    <StyledTemplate07>
      <TextBox>
        <CustomText
          fontType={font}
          color={letteringColor}
          size={60}
          weight={weight}
          line={line}
          space="pre"
        >
          {lettering}
        </CustomText>
      </TextBox>
      <Circle>
        <IconShortArrow width={16} height={16} />
      </Circle>
    </StyledTemplate07>
  );
};

export default Template07;

const StyledTemplate07 = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  })}
  width: 100%;
  height: 100vh;
  padding-bottom: 24px;
  background-image: url('/images/template7Backgroud.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Circle = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 44px;
  height: 44px;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(14.699999809265137px);
`;

const TextBox = styled.div`
  position: absolute;
  top: 68.8%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
