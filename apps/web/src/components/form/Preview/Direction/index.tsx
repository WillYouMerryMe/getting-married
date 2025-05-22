import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import KakaoMap from './KakaoMap';
import { ActionButton, Column, Row, Text } from '@merried/ui';
import BrandButton from './BrandButton';
import Transportation from './Transportation';
import { TRANSPORT_TYPES, BRAND } from '@/constants/form/constants';
import { useDirectionsValueStore } from '@/store/form/directions';

const Direction = () => {
  const { address, show, methods } = useDirectionsValueStore();

  const entries = TRANSPORT_TYPES.filter((type) => {
    const hasMethod = !!methods?.[type];
    const shouldShow = show?.[type] !== false;
    return hasMethod && shouldShow;
  }).map((type) => ({
    type,
    method: methods[type]!,
  }));

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
  };

  if (!address) return null;

  return (
    <StyledDirection>
      <Column gap={16} width="100%">
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.G900}
          size={24}
          line={100}
          weight={400}
        >
          오시는 길
        </CustomText>
        <KakaoMap address={address} />
      </Column>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Column gap={4} alignItems="flex-start">
          <Text fontType="P2" color={color.G80}>
            {address}
          </Text>
          <Text fontType="H4" color={color.G900}>
            지금은 없어용...
          </Text>
        </Column>
        <ActionButton onClick={handleCopyAddress} background={color.pointYellow}>
          <Text fontType="Button3" color={color.G900}>
            복사하기
          </Text>
        </ActionButton>
      </Row>
      <Row width="100%" alignItems="center" gap={19}>
        {BRAND.map(({ src, name }) => (
          <BrandButton key={name} src={src} name={name} onClick={() => {}} />
        ))}
      </Row>
      <Line />
      <Column gap={20}>
        {entries.map(({ type, method }) => (
          <Transportation key={type} type={type} method={method} />
        ))}
      </Column>
    </StyledDirection>
  );
};

export default Direction;

const StyledDirection = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: auto;
  gap: 32px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.G40};
`;
