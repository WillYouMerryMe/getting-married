import { color } from '@merried/design-system';
import { IconDragHandle } from '@merried/icon';
import {
  CalenderInput,
  CheckBox,
  Column,
  Input,
  Row,
  Text,
  ToggleButton,
} from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import { styled } from 'styled-components';

const CeremonyInfoOption = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [calenderDate, setCalenderDate] = useState<Date>(new Date());

  return (
    <StyledCeremonyInfoOption>
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
          <Input
            width={384}
            platform="DESKTOP"
            placeholder="예식장 이름을 입력해주세요"
          />
          <CheckBox
            checked={isCalendarVisible}
            onChange={setIsCalendarVisible}
            label="캘린더 보임"
          />
        </Column>
      </Column>
      <IconDragHandle />
    </StyledCeremonyInfoOption>
  );
};

export default CeremonyInfoOption;

const StyledCeremonyInfoOption = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-start' })}
  padding: 28px 20px;
  width: 548px;
  border-radius: 8px;
  background: ${color.G0};
`;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
