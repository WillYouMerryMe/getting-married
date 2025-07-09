import { color } from '@merried/design-system';
import { Button, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import styled from 'styled-components';

interface ButtonItem {
  label: string;
  onClick: () => void;
}

interface ButtonGroupProps {
  title?: string;
  buttons: ButtonItem[];
  pointColor?: string;
  active?: number | null;
}

const ButtonGroup = ({ title, buttons, pointColor, active }: ButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const selected = active ?? selectedButton;

  return (
    <StyledButtonGroup>
      {title && (
        <Text fontType="P2" color={color.G900}>
          {title}
        </Text>
      )}
      <Row alignItems="center" gap={19} width="100%">
        {buttons.map((button, index) => (
          <Button
            key={index}
            styleType={selected === index ? 'DEFAULT' : 'SECOND'}
            pointColor={pointColor}
            size="SMALL"
            width="100%"
            style={{ flex: 1, minWidth: 0 }}
            onClick={() => {
              if (active == null) setSelectedButton(index);
              button.onClick();
            }}
          >
            <Text fontType="Button2">{button.label}</Text>
          </Button>
        ))}
      </Row>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;

const StyledButtonGroup = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 100%;
  gap: 10px;
`;
