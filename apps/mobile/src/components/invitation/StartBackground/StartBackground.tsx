import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import Template01 from './Template/Template01';
import Template02 from './Template/Template02';
import Template03 from './Template/Template03';
import Template04 from './Template/Template04';
import Template05 from './Template/Template05';
import Template06 from './Template/Template06';
import Template07 from './Template/Template07';
import Template08 from './Template/Template08';

interface StartBackgroundProps {
  groom: string;
  bride: string;
  date: string;
  picture: string;
  letteringColor: string;
  lettering: string[];
  font: string;
  templateId: string;
}

const templateComponentMap: Record<string, React.FC<StartBackgroundProps>> = {
  '1': Template01,
  '2': Template02,
  '3': Template03,
  '4': Template04,
  '5': Template05,
  '6': Template06,
  '7': Template07,
  '8': Template08,
};

const StartBackground = ({
  groom,
  bride,
  date,
  picture,
  letteringColor,
  lettering,
  font,
  templateId,
}: StartBackgroundProps) => {
  const Template = templateComponentMap[templateId];

  return (
    <StyledStartBackground $backgroundImg={picture} $templateId={templateId}>
      {Template ? (
        <Template
          groom={groom}
          bride={bride}
          date={date}
          letteringColor={letteringColor}
          lettering={lettering}
          font={font}
          templateId={templateId}
          picture={picture}
        />
      ) : null}
    </StyledStartBackground>
  );
};

export default StartBackground;

const StyledStartBackground = styled.div<{ $backgroundImg: string; $templateId: string }>`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
  background-color: ${color.G0};
  overflow-x: hidden;

  ${(p) =>
    p.$templateId !== '5' &&
    `
      background-image: url(${p.$backgroundImg || '/guestbook.png'});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;
