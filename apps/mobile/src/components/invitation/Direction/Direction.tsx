import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import KakaoMap from '../KakaoMap/KakaoMap';
import { ActionButton, Column, Row, Text } from '@merried/ui';
import BrandButton from '../BrandButton/BrandButton';
import Transportation from './Transportation/Transportation';
import { BRAND } from '@/constants/invitation/data';
import { TRANSPORT_TYPES, TransportType } from '@/constants/invitation/constants';
import { useToast } from '@/utils/useToast';

interface DirectionProps {
  address: string;
  detailAddress: string;
  methods?: Partial<Record<TransportType, string>>;
  pointColor: string;
}

const Direction = ({
  address,
  detailAddress,
  methods = {},
  pointColor,
}: DirectionProps) => {
  const { show } = useToast();
  const entries = TRANSPORT_TYPES.filter((type) => !!methods[type]).map((type) => ({
    type,
    method: methods[type]!,
  }));

  const onlyFront = address.split('/')[0] || '';

  const handleCopyAddress = () => {
    navigator.clipboard
      .writeText(onlyFront)
      .then(() => {
        show('복사했습니다', 'SUCCESS');
      })
      .catch(() => {
        show('복사에 실패했습니다', 'ERROR');
      });
  };

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
        <KakaoMap address={onlyFront} />
      </Column>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Column gap={4} alignItems="flex-start">
          <Text fontType="P2" color={color.G80}>
            {onlyFront}
          </Text>
          <Text fontType="H4" color={color.G900}>
            {detailAddress}
          </Text>
        </Column>
        <ActionButton onClick={handleCopyAddress} background={pointColor}>
          <Text fontType="Button3" color={color.G900}>
            복사하기
          </Text>
        </ActionButton>
      </Row>
      <Row width="100%" alignItems="center" gap={19}>
        {BRAND.map(({ src, name }) => (
          <BrandButton
            key={name}
            src={src}
            name={name as '네이버지도' | '카카오맵'}
            address={onlyFront}
          />
        ))}
      </Row>
      <Line />
      <Column gap={20} alignItems="flex-start" width="100%">
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
