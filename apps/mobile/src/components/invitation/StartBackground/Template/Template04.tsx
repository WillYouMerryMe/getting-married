import CustomText from '@/components/common/CustomText/CustomText';
import { formatDateToDotYMDWithDay } from '@/utils/formatDateToDotYMDWithDay';
import { color } from '@merried/design-system';
import { IconShortArrow } from '@merried/icon';
import { Column, Row } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Template04Props {
  groom: string;
  bride: string;
  letteringColor: string;
  date: string;
  lettering: string[];
  font: string;
}

const Template04 = ({
  groom,
  bride,
  font,
  date,
  letteringColor,
  lettering,
}: Template04Props) => {
  const TemplateFont: Record<string, { size: number; weight: number; line: number }> = {
    'Ownglyph Kundo': { size: 48, weight: 400, line: 120 },
    Diphylleia: { size: 40, weight: 400, line: 120 },
    DOSGothic: { size: 40, weight: 500, line: 120 },
    KoreanCNMM: { size: 40, weight: 400, line: 120 },
    LeeSeoyun: { size: 40, weight: 400, line: 120 },
    MapoDacapo: { size: 40, weight: 400, line: 120 },
    'Ownglyph Baek Subin': { size: 48, weight: 400, line: 100 },
    'Nelna Yesam': { size: 40, weight: 400, line: 120 },
  };

  const { size, weight, line } = TemplateFont[font] || {
    size: 32,
    weight: 400,
    line: 100,
  };

  return (
    <StyledTemplate04>
      <Column gap={8} alignItems="center">
        <Row gap={9}>
          <CustomText
            fontType="Paperlogy"
            color={color.G0}
            size={14}
            weight={400}
            line={120}
          >
            {groom}
          </CustomText>
          <CustomText
            fontType="Paperlogy"
            color={color.G0}
            size={14}
            weight={400}
            line={120}
          >
            |
          </CustomText>
          <CustomText
            fontType="Paperlogy"
            color={color.G0}
            size={14}
            weight={400}
            line={120}
          >
            {bride}
          </CustomText>
        </Row>
        <CustomText
          fontType={font}
          color={letteringColor}
          size={size}
          weight={weight}
          line={line}
          space="pre"
        >
          {lettering}
        </CustomText>
        <CustomText
          fontType="Paperlogy"
          color={color.G0}
          size={12}
          weight={600}
          line={100}
        >
          {formatDateToDotYMDWithDay(date)}
        </CustomText>
      </Column>
      <Circle>
        <IconShortArrow width={16} height={16} />
      </Circle>
    </StyledTemplate04>
  );
};

export default Template04;

const StyledTemplate04 = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  })}
  width: 100%;
  height: 100vh;
  padding-bottom: 24px;
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
