import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import Text from '../Text/Text';
import { IconCalendar } from '@merried/icon';
import Calender from './Calender';
import { useState } from 'react';

interface Props {
  value: Date;
  onChange: (date: Date) => void;
}

const CalenderInput = ({ value = new Date(), onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = `${value.getFullYear()}.${value.getMonth() + 1}.${value.getDate()}`;

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDateSelect = (date: Date) => {
    onChange(date);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <StyledCalenderInput onClick={toggleCalendar}>
        <Text fontType="P3" color={color.G900}>
          {formattedDate}
        </Text>
        <IconCalendar />
      </StyledCalenderInput>
      {isOpen && (
        <CalenderWrapper>
          <Calender initialDate={value} onDateSelect={handleDateSelect} />
        </CalenderWrapper>
      )}
    </Wrapper>
  );
};

export default CalenderInput;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const StyledCalenderInput = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
  width: 384px;
  height: 42px;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid ${color.G70};
  background: ${color.G0};
  cursor: pointer;
`;

const CalenderWrapper = styled.div`
  margin-top: 4px;
`;
