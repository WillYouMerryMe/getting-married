import CustomText from '@/components/common/CustomText/CustomText';
import { formatTemplate05Date } from '@/utils/formatTemplate05Date';
import { IconShortArrow } from '@merried/icon';
import { Column, Row } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Template05Props {
  groom: string;
  bride: string;
  letteringColor: string;
  date: string;
  lettering: string[];
  font: string;
  picture: string;
}

const Template05 = ({
  groom,
  bride,
  font,
  date,
  letteringColor,
  lettering,
  picture,
}: Template05Props) => {
  const TemplateFont: Record<string, { size: number; weight: number }> = {
    BBB0003: { size: 52, weight: 700 },
    'Ownglyph Kundo': { size: 52, weight: 400 },
    Diphylleia: { size: 52, weight: 400 },
    DOSGothic: { size: 52, weight: 500 },
    KoreanCNMM: { size: 52, weight: 400 },
    LeeSeoyun: { size: 52, weight: 400 },
    MapoDacapo: { size: 52, weight: 400 },
    'Ownglyph Baek Subin': { size: 52, weight: 400 },
    'White Angelica': { size: 52, weight: 400 },
  };

  const { size, weight } = TemplateFont[font] || { size: 32, weight: 400 };

  return (
    <StyledTemplate05>
      <WeddingPicture $picture={picture} />
      <Column gap={7} alignItems="center">
        <Column gap={24} alignItems="center">
          <CustomText
            fontType={font}
            size={size}
            weight={weight}
            line={100}
            color={letteringColor}
            space="pre"
          >
            {lettering}
          </CustomText>
          <Column gap={10} alignItems="center">
            <Row gap={16}>
              <CustomText
                fontType="Paperlogy"
                size={18}
                weight={400}
                line={120}
                color={letteringColor}
              >
                {groom}
              </CustomText>
              <CustomText
                fontType="Paperlogy"
                size={18}
                weight={400}
                line={120}
                color={letteringColor}
              >
                {bride}
              </CustomText>
            </Row>
            <CustomText
              fontType="Paperlogy"
              size={18}
              weight={400}
              line={120}
              color={letteringColor}
            >
              {formatTemplate05Date(date)}
            </CustomText>
          </Column>
        </Column>
        <Circle>
          <IconShortArrow width={16} height={16} />
        </Circle>
      </Column>
    </StyledTemplate05>
  );
};

export default Template05;

const StyledTemplate05 = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
  padding: 14px 12px 24px;
`;

const Circle = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 44px;
  height: 44px;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(174, 174, 174, 0.35);
  backdrop-filter: blur(14.699999809265137px);
`;

const WeddingPicture = styled.div<{ $picture: string }>`
  width: 100%;
  height: 514px;
  aspect-ratio: 649.6 / 812;
  background: url(${(p) => p.$picture || '/template05.png'}) lightgray 50% / cover
    no-repeat;
`;
