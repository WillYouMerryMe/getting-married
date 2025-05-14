import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { IconShortArrow } from '@merried/icon';
import { Column, Row } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';

interface StartBackgroundProps {
  man: string;
  woman: string;
  date: string;
}

const StartBackground = ({ man, woman, date }: StartBackgroundProps) => {
  return (
    <StyledStartBackground>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <CustomText
          fontType="Heir of Light OTF"
          color={color.G0}
          size={16}
          weight={400}
          line={100}
        >
          {man}
        </CustomText>
        <CustomText
          fontType="Heir of Light OTF"
          color={color.G0}
          size={16}
          weight={400}
          line={100}
        >
          {date}
        </CustomText>
        <CustomText
          fontType="Heir of Light OTF"
          color={color.G0}
          size={16}
          weight={400}
          line={100}
        >
          {woman}
        </CustomText>
      </Row>
      <Column gap={15} alignItems="center">
        <CustomText
          fontType="BBB0003"
          color={color.letterYellow}
          size={44}
          weight={700}
          line={110}
        >
          THE START OF
          <br />
          OUR FOREVER
        </CustomText>
        <Circle>
          <IconShortArrow width={16} height={16} />
        </Circle>
      </Column>
    </StyledStartBackground>
  );
};

export default StartBackground;

const StyledStartBackground = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
  background:
    url('/guestbook.png') center/cover no-repeat,
    ${color.G100};
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
