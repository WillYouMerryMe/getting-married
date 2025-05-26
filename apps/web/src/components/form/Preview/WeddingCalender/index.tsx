'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { color } from '@merried/design-system';
import { IconOval } from '@merried/icon';
import styled from 'styled-components';
import { flex } from '@merried/utils';
import { Column } from '@merried/ui';
import { useCeremonyInfoValueStore } from '@/store/form/ceremonyInfo';

dayjs.locale('ko');

const WeddingCalender = () => {
  const { calenderDate, isCalendarVisible, name, isToggle } = useCeremonyInfoValueStore();

  const d = dayjs(calenderDate);
  const year = d.year();
  const month = d.month() + 1;
  const today = d.date();
  const weekday = d.format('dd');

  const firstDay = d.startOf('month').day();
  const totalDays = d.endOf('month').date();

  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];
  while (cells.length % 7) cells.push(null);

  if (!isToggle) return null;

  return (
    <Wrapper>
      {isCalendarVisible && (
        <>
          <IconOval width={145} height={43}>
            <Label>
              {year}
              {month}
              {today}
            </Label>
          </IconOval>
          <Grid>
            {['일', '월', '화', '수', '목', '금', '토'].map((wd) => (
              <Cell key={wd}>{wd}</Cell>
            ))}
            {cells.map((num, i) => (
              <Cell key={i} $active={num === today}>
                {num || ''}
              </Cell>
            ))}
          </Grid>
        </>
      )}

      <Column>
        <Info>{`${year}년 ${month}월 ${today}일 ${weekday}요일`}</Info>
        <Info>{name}</Info>
      </Column>
    </Wrapper>
  );
};

export default WeddingCalender;

const Wrapper = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  gap: 24px;
  width: 100%;
`;

const Label = styled.div`
  font-family: 'Ownglyph Kundo';
  font-size: 22px;
  color: ${color.G0};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 46.71px);
  grid-auto-rows: 48px;
  row-gap: 12px;
  justify-items: center;
  align-items: center;
`;

const Cell = styled.div<{ $active?: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  font-family: 'Ownglyph Kundo';
  font-size: 16px;
  width: ${(p) => (p.$active ? '40px' : '46.71px')};
  height: ${(p) => (p.$active ? '40px' : '48px')};
  color: ${(p) => (p.$active ? color.G0 : color.G900)};
  background: ${(p) => (p.$active ? color.pointYellow : 'transparent')};
  border-radius: ${(p) => (p.$active ? '50%' : '0')};
`;

const Info = styled.div`
  font-family: 'Ownglyph Kundo';
  font-size: 18px;
  color: ${color.G900};
  text-align: center;
`;
