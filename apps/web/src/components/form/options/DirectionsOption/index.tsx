import { FindAddressModal } from '@/components/common';
import { color } from '@merried/design-system';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { useOverlay } from '@toss/use-overlay';
import { styled } from 'styled-components';
import { useDirectionsStore } from '@/store/form/directions';
import { useIsToggleHandler } from '@/hooks/useIsToggleHandler';

const DirectionsOption = () => {
  const overlay = useOverlay();
  const [directions, setDirections] = useDirectionsStore();

  const openFindAddressModal = () => {
    overlay.open(({ isOpen, close }) => (
      <FindAddressModal
        isOpen={isOpen}
        onClose={close}
        value={directions.address}
        setValue={(value) => setDirections((prev) => ({ ...prev, address: value }))}
      />
    ));
  };

  const handleShowChange = (type: keyof typeof directions.show) => (value: boolean) => {
    setDirections((prev) => ({
      ...prev,
      show: {
        ...prev.show,
        [type]: value,
      },
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDirections((prev) => ({
      ...prev,
      methods: {
        ...prev.methods,
        [name]: value,
      },
    }));
  };
  const handleToggleChange = useIsToggleHandler(setDirections);

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={directions.isToggle} onToggle={handleToggleChange} />
        <Text fontType="H3" color={color.G900}>
          오시는 길
        </Text>
      </Row>

      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          예식장 주소<RequiredMark>*</RequiredMark>
        </Text>
        <Input
          width={384}
          platform="DESKTOP"
          placeholder="예식장 주소를 입력해주세요"
          value={directions.address}
          onClick={openFindAddressModal}
          readOnly
        />
      </Column>

      <Column gap={8}>
        <CheckBox
          label="지하철"
          checked={directions.show.subway}
          onChange={handleShowChange('subway')}
        />
        {directions.show.subway && (
          <Input
            name="subway"
            width={384}
            platform="DESKTOP"
            placeholder="식장과 가까운 지하철 역에서 오는 법을 설명해주세요"
            value={directions.methods.subway}
            onChange={handleInputChange}
          />
        )}
      </Column>

      <Column gap={8}>
        <CheckBox
          label="버스"
          checked={directions.show.bus}
          onChange={handleShowChange('bus')}
        />
        {directions.show.bus && (
          <Input
            name="bus"
            width={384}
            platform="DESKTOP"
            placeholder="식장과 가까운 정류장에서 오는 법을 설명해주세요"
            value={directions.methods.bus}
            onChange={handleInputChange}
          />
        )}
      </Column>

      <Column gap={8}>
        <CheckBox
          label="주차 공간"
          checked={directions.show.car}
          onChange={handleShowChange('car')}
        />
        {directions.show.car && (
          <Input
            name="car"
            width={384}
            platform="DESKTOP"
            placeholder="주차 공간에 대해 설명해주세요"
            value={directions.methods.car}
            onChange={handleInputChange}
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
