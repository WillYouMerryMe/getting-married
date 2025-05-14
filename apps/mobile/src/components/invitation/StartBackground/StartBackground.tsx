import { color, getTemplateFontStyle } from '@merried/design-system';
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
        <TopTitle>{man}</TopTitle>
        <TopTitle>{date}</TopTitle>
        <TopTitle>{woman}</TopTitle>
      </Row>
      <Column gap={15} alignItems="center">
        <BottomTitle>
          THE START OF
          <br />
          OUR FOREVER
        </BottomTitle>
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
  background: url('/guestbook.png') center/cover no-repeat;
  padding: 54px 22px 24px;
`;

const TopTitle = styled.div`
  ${getTemplateFontStyle('template1')}
  color: ${color.G0};
`;

const BottomTitle = styled.div`
  ${getTemplateFontStyle('template1', 'BBB0003')}
  color: ${color.letterYellow};
  text-align: center;
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
