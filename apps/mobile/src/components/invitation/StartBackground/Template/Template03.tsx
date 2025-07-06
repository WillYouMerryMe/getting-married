import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { IconShortArrow } from '@merried/icon';
import { Column, Row } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Template03Props {
  groom: string;
  bride: string;
  letteringColor: string;
  lettering: string[];
  font: string;
}

const Template03 = ({
  groom,
  bride,
  font,
  letteringColor,
  lettering,
}: Template03Props) => {
  return (
    <StyledTemplate03>
      <Row width="100%" justifyContent="space-between" alignItems="center">
        <CustomText
          fontType="Paperlogy"
          color={color.G0}
          size={14}
          weight={300}
          line={100}
        >
          {groom}
        </CustomText>
        <CustomText
          fontType="Paperlogy"
          color={color.G0}
          size={14}
          weight={300}
          line={100}
        >
          {bride}
        </CustomText>
      </Row>
      <Column gap={22.07} alignItems="center">
        <Column gap={44.93}>
          <CustomText
            fontType="Paperlogy"
            color={color.G0}
            size={16}
            weight={300}
            line={140}
            align="center"
          >
            가장 아름다울 날,
            <br />
            여러분을 초대합니다.
          </CustomText>
          <CustomText
            fontType={font}
            color={letteringColor}
            size={75}
            weight={700}
            line={100}
          >
            {lettering}
          </CustomText>
        </Column>
        <Circle>
          <IconShortArrow width={16} height={16} />
        </Circle>
      </Column>
    </StyledTemplate03>
  );
};

export default Template03;

const StyledTemplate03 = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
  padding: 40px 22px 24px;
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
