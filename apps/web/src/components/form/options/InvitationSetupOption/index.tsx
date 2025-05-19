import { LETTERING_COLORS } from '@/constants/form/constants';
import { color } from '@merried/design-system';
import { Column, Dropdown, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import { styled } from 'styled-components';

const InvitationSetupOption = () => {
  const [invitationFont, setInvitationFont] = useState<string>('Ownglyph kundo');
  const [letteringColor, setLetteringColor] = useState<string>(color.letterYellow);

  return (
    <StyledInvitationSetupOption>
      <Column gap={28}>
        <Text fontType="H3" color={color.G900}>
          청접장 전체 설정
          <Text fontType="P3_160per" color={color.red}>
            *
          </Text>
        </Text>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            포인트 색상(메인 화면 적용 X)
          </Text>
          <Dropdown
            option="COLOR"
            name="invitation-point-color"
            value={letteringColor}
            data={LETTERING_COLORS}
            onChange={setLetteringColor}
          />
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            폰트(메인 화면 적용 X)
          </Text>
          <Dropdown
            option="DEFAULT"
            name="invitation-font"
            value={invitationFont}
            data={['Ownglyph kundo']}
            onChange={setInvitationFont}
          />
        </Column>
      </Column>
    </StyledInvitationSetupOption>
  );
};

export default InvitationSetupOption;

const StyledInvitationSetupOption = styled.div`
  ${flex({ alignItems: 'flex-start' })}
  padding: 28px 20px;
  width: 548px;
  border-radius: 8px;
  background: ${color.G0};
`;
