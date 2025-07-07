import { color } from '@merried/design-system';
import { DesktopButton, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import styled from 'styled-components';

interface ButtonItem {
  label: string;
  onClick: () => void;
}

interface DesktopButtonGroupProps {
  title?: string;
  buttons: ButtonItem[];
  pointColor?: string;
  height?: string;
}

const DesktopButtonGroup = ({
  title,
  buttons,
  pointColor,
  height = '42px',
}: DesktopButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  return (
    <StyledButtonGroup>
      {title && (
        <Text fontType="P3" color={color.G900}>
          {title}
        </Text>
      )}
      <Row alignItems="center" gap={19} width="100%">
        {buttons.map((button, index) => (
          <DesktopButton
            key={index}
            styleType={selectedButton === index ? 'DEFAULT' : 'SECOND'}
            pointColor={pointColor}
            size="SMALL"
            width="100%"
            style={{ flex: 1, minWidth: 0, height: `${height}` }}
            onClick={() => {
              setSelectedButton(index);
              button.onClick();
            }}
          >
            <Text fontType="Button3">{button.label}</Text>
          </DesktopButton>
        ))}
      </Row>
    </StyledButtonGroup>
  );
};

export default DesktopButtonGroup;

const StyledButtonGroup = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 100%;
  gap: 10px;
`;
