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
import { styled } from 'styled-components';
import { useCeremonyInfoStore } from '@/store/form/ceremonyInfo';

const CeremonyInfoOption = () => {
  const [ceremonyInfo, setCeremonyInfo] = useCeremonyInfoStore();

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
        <CalenderInput
          value={ceremonyInfo.calenderDate}
          onChange={(newDate) =>
            setCeremonyInfo((prev) => ({ ...prev, calenderDate: newDate }))
          }
        />
      </Column>

      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          예식장 이름<RequiredMark>*</RequiredMark>
        </Text>
        <Input
          width={384}
          platform="DESKTOP"
          placeholder="예식장 이름을 입력해주세요"
          value={ceremonyInfo.name}
          onChange={(e) => setCeremonyInfo((prev) => ({ ...prev, name: e.target.value }))}
        />
        <CheckBox
          checked={ceremonyInfo.isCalendarVisible}
          onChange={(checked) =>
            setCeremonyInfo((prev) => ({ ...prev, isCalendarVisible: checked }))
          }
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
