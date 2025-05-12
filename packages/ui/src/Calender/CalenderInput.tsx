import { useState } from 'react';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import Text from '../Text/Text';
import { IconCalendar } from '@merried/icon';
import Calendar from './Calender';

const CalenderInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const formattedDate = `${selectedDate.getFullYear()}.${selectedDate.getMonth() + 1}.${selectedDate.getDate()}`;

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <StyledCalenderInput onClick={toggleCalendar}>
        <Text fontType="P3" color={color.G900}>
          {formattedDate}
        </Text>
        <IconCalendar />
      </StyledCalenderInput>
      {isOpen && <Calendar initialDate={selectedDate} onDateSelect={handleDateSelect} />}
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
