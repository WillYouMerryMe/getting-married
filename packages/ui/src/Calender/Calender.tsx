import { color, font } from '@merried/design-system';
import { IconNext, IconPrevious } from '@merried/icon';
import { flex } from '@merried/utils';
import { useState } from 'react';
import styled from 'styled-components';

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const Calendar = ({ initialDate = new Date(), onDateSelect }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const getFirstDayOfMonth = (date: { getFullYear(): number; getMonth(): number }) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay();
  };

  const getDaysInMonth = (date: Date) => {
    const daysInMonth: (number | null)[] = [];
    const firstDay = getFirstDayOfMonth(date);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      daysInMonth.push(null);
    }
    for (let i = 1; i <= lastDate; i++) {
      daysInMonth.push(i);
    }
    return daysInMonth;
  };

  const changeMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <StyledCalendar>
      <Header>
        <NavButton
          onClick={() => changeMonth(-1)}
          aria-label="이전 달"
          title="이전 달로 이동"
        >
          <IconPrevious width={20} height={20} />
        </NavButton>
        <DateDisplay>
          {selectedDate.getFullYear()}.{selectedDate.getMonth() + 1}.
          {selectedDate.getDate()}
        </DateDisplay>
        <NavButton
          onClick={() => changeMonth(1)}
          aria-label="다음 달"
          title="다음 달로 이동"
        >
          <IconNext width={20} height={20} />
        </NavButton>
      </Header>
      <WeekWrapper>
        {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
          <StyledDay key={idx}>{day}</StyledDay>
        ))}
      </WeekWrapper>
      <DateGrid role="grid">
        {daysInMonth.map((day, idx) => {
          if (day === null) {
            return <DateCellEmpty key={idx} role="presentation" />;
          }
          const cellDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
          );
          const isPast = cellDate < today;
          const isToday = cellDate.getTime() === today.getTime();
          const isSelected =
            !isPast &&
            day === selectedDate.getDate() &&
            currentDate.getMonth() === selectedDate.getMonth() &&
            currentDate.getFullYear() === selectedDate.getFullYear();

          return (
            <DateCell
              key={idx}
              $isSelected={isSelected}
              $isPast={isPast}
              tabIndex={isPast ? -1 : 0}
              role="gridcell"
              aria-selected={isSelected}
              aria-disabled={isPast}
              aria-label={`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${day}일${isPast ? ' (지난 날짜)' : ''}${isToday ? ' (오늘)' : ''}`}
              onClick={() => {
                if (isPast) return;
                setSelectedDate(cellDate);
                onDateSelect?.(cellDate);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (!isPast) {
                    setSelectedDate(cellDate);
                    onDateSelect?.(cellDate);
                  }
                }
              }}
            >
              {day}
            </DateCell>
          );
        })}
      </DateGrid>
    </StyledCalendar>
  );
};

export default Calendar;

const StyledCalendar = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  max-width: 384px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10.04px;
  padding: 30px;
  gap: 27.61px;
  box-shadow:
    0px 36px 10px 0px rgba(99, 99, 99, 0),
    0px 23px 9px 0px rgba(99, 99, 99, 0.01),
    0px 13px 8px 0px rgba(99, 99, 99, 0.05),
    0px 6px 6px 0px rgba(99, 99, 99, 0.09),
    0px 1px 3px 0px rgba(99, 99, 99, 0.1);
`;

const Header = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
`;

const NavButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2em;
`;

const DateDisplay = styled.span`
  ${font.H4}
  color: ${color.G900};
`;

const WeekWrapper = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center' })}
  gap: 10px;
`;

const StyledDay = styled.div`
  ${font.Button3}
  color: ${color.G60};
  width: 37.65px;
  height: 25.1px;
  text-align: center;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  width: 100%;
`;

const DateCell = styled.div<{
  $isSelected: boolean;
  $isPast: boolean;
}>`
  text-align: center;
  padding: 9.41px 6.27px;
  border-radius: 999px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? `${color.primary}` : 'transparent'};
  color: ${({ $isSelected }) => ($isSelected ? '#fff' : 'inherit')};
  cursor: ${({ $isPast }) => ($isPast ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $isPast }) => ($isPast ? 'none' : 'auto')};
`;

const DateCellEmpty = styled.div`
  visibility: hidden;
`;
