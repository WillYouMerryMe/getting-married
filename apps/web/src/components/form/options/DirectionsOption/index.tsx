import { color } from '@merried/design-system';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { useState } from 'react';
import { styled } from 'styled-components';

const DirectionsOption = () => {
  const [showSubway, setShowSubway] = useState(false);
  const [showBus, setShowBus] = useState(false);
  const [showParkingLot, setShowParkingLot] = useState(false);

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={false} />
        <Text fontType="H3" color={color.G900}>
          오시는 길
        </Text>
      </Row>

      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          예식장 주소<RequiredMark>*</RequiredMark>
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="예식장 주소를 입력해주세요" />
      </Column>
      <Column gap={8}>
        <CheckBox label="지하철" checked={showSubway} onChange={setShowSubway} />
        {showSubway && (
          <Input
            width={384}
            platform="DESKTOP"
            placeholder="식장과 가까운 지하철 역에서 오는 법을 설명해주세요"
          />
        )}
      </Column>
      <Column gap={8}>
        <CheckBox label="버스" checked={showBus} onChange={setShowBus} />
        {showBus && (
          <Input
            width={384}
            platform="DESKTOP"
            placeholder="식장과 가까운 정류장에서 오는 법을 설명해주세요"
          />
        )}
      </Column>
      <Column gap={8}>
        <CheckBox
          label="주차 공간"
          checked={showParkingLot}
          onChange={setShowParkingLot}
        />
        {showParkingLot && (
          <Input
            width={384}
            platform="DESKTOP"
            placeholder="주차 공간에 대해 설명해주세요"
          />
        )}
      </Column>
    </Column>
  );
};

export default DirectionsOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
