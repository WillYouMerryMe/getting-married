import CustomText from '@/components/common/CustomText/CustomText';
import { getWeddingDate } from '@/utils/getWeddingDate';
import { color } from '@merried/design-system';
import { IconShortArrow } from '@merried/icon';
import { Column, Row } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Template01Props {
  groom: string;
  bride: string;
  date: string;
  letteringColor: string;
  lettering: string[];
  font: string;
}

const Template01 = ({
  groom,
  bride,
  date,
  font,
  letteringColor,
  lettering,
}: Template01Props) => {
  return (
    <StyledTemplate01>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <CustomText
          fontType="Heir of Light OTF"
          color={color.G0}
          size={16}
          weight={400}
          line={100}
        >
          {groom}
        </CustomText>
        <CustomText
          fontType="Heir of Light OTF"
          color={color.G0}
          size={16}
          weight={400}
          line={100}
        >
          {getWeddingDate(date)}
        </CustomText>
        <CustomText
          fontType="Heir of Light OTF"
          color={color.G0}
          size={16}
          weight={400}
          line={100}
        >
          {bride}
        </CustomText>
      </Row>
      <Column gap={15} alignItems="center">
        <CustomText
          fontType={font}
          color={letteringColor}
          size={44}
          weight={700}
          line={110}
        >
          {lettering}
        </CustomText>
        <Circle>
          <IconShortArrow width={16} height={16} />
        </Circle>
      </Column>
    </StyledTemplate01>
  );
};

export default Template01;

const StyledTemplate01 = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
  padding: 54px 22px 24px;
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
