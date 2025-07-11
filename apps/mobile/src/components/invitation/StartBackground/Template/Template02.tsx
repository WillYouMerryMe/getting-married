import CustomText from '@/components/common/CustomText/CustomText';
import { getWeddingDate } from '@/utils/getWeddingDate';
import { color } from '@merried/design-system';
import { IconShortArrow } from '@merried/icon';
import { Column, Row } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Template02Props {
  groom: string;
  bride: string;
  date: string;
  letteringColor: string;
  lettering: string[];
  font: string;
}

const Template02 = ({
  groom,
  bride,
  date,
  font,
  letteringColor,
  lettering,
}: Template02Props) => {
  const TemplateFont: Record<string, { size: number; weight: number }> = {
    'Ownglyph Kundo': { size: 32, weight: 400 },
    Diphylleia: { size: 44, weight: 400 },
    DOSGothic: { size: 32, weight: 500 },
    KoreanCNMB: { size: 32, weight: 400 },
    LeeSeoyun: { size: 32, weight: 400 },
    MapoDacapo: { size: 32, weight: 400 },
    'Ownglyph Baek Subin': { size: 32, weight: 400 },
    'Nelna Yesam': { size: 32, weight: 400 },
    'White Angelica': { size: 32, weight: 400 },
  };

  const { size, weight } = TemplateFont[font] || { size: 32, weight: 400 };

  return (
    <StyledTemplate02>
      <CustomText
        fontType={font}
        size={size}
        color={letteringColor}
        weight={weight}
        line={100}
        space="pre"
      >
        {lettering}
      </CustomText>
      <Column alignItems="center">
        <Column alignItems="center" gap={8}>
          <Row gap={12} alignItems="center">
            <CustomText
              fontType="Paperlogy"
              color={color.G0}
              size={15}
              weight={300}
              line={100}
            >
              {groom}
            </CustomText>
            <CustomText
              fontType="Paperlogy"
              color={color.G0}
              size={15}
              weight={300}
              line={100}
            >
              {bride}
            </CustomText>
          </Row>
          <CustomText
            fontType="Paperlogy"
            color={color.G0}
            size={15}
            weight={300}
            line={100}
          >
            {getWeddingDate(date)}
          </CustomText>
        </Column>
        <Circle>
          <IconShortArrow width={16} height={16} />
        </Circle>
      </Column>
    </StyledTemplate02>
  );
};

export default Template02;

const StyledTemplate02 = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
  padding: 116px 0px 24px;
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
