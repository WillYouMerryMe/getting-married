import { color } from '@merried/design-system';
import {
  CalenderInput,
  CheckBox,
  Column,
  Input,
  Row,
  Text,
  ToggleButton,
} from '@merried/ui';
import { useState } from 'react';
import { styled } from 'styled-components';

const CeremonyInfoOption = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [calenderDate, setCalenderDate] = useState<Date>(new Date());

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={false} />
        <Text fontType="H3" color={color.G900}>
          예식 정보
        </Text>
      </Row>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          예식 날짜<RequiredMark>*</RequiredMark>
        </Text>
        <CalenderInput value={calenderDate} onChange={setCalenderDate} />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          예식장 이름<RequiredMark>*</RequiredMark>
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="예식장 이름을 입력해주세요" />
        <CheckBox
          checked={isCalendarVisible}
          onChange={setIsCalendarVisible}
          label="캘린더 보임"
        />
      </Column>
    </Column>
  );
};

export default CeremonyInfoOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
