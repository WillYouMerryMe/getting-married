import CustomText from '@/components/common/CustomText/CustomText';
import { getWeddingDate } from '@/utils/getWeddingDate';
import { color } from '@merried/design-system';
import { IconShortArrow } from '@merried/icon';
import { Column, Row } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Template08Props {
  groom: string;
  bride: string;
  date: string;
  letteringColor: string;
  lettering: string[];
  font: string;
}

const Template08 = ({
  groom,
  bride,
  date,
  font,
  letteringColor,
  lettering,
}: Template08Props) => {
  return (
    <StyledTemplate08>
      <div style={{ transform: 'rotate(-9.332deg)' }}>
        <CustomText
          fontType={font}
          color={letteringColor}
          size={110}
          weight={700}
          line={100}
        >
          {lettering}
        </CustomText>
      </div>
      <Column alignItems="center" width="100%">
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
        <Circle>
          <IconShortArrow width={16} height={16} />
        </Circle>
      </Column>
    </StyledTemplate08>
  );
};

export default Template08;

const StyledTemplate08 = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
  padding: 33px 32px 24px;
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
