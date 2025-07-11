import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import KakaoMap from './KakaoMap';
import { ActionButton, Column, Row, Text } from '@merried/ui';
import BrandButton from './BrandButton';
import Transportation from './Transportation';
import { TRANSPORT_TYPES, BRAND } from '@/constants/form/constants';
import { CustomFontType } from '@/types/form/client';
import { PutCardReq } from '@/types/form/remote';

interface Props {
  data: PutCardReq;
}

const Direction = ({ data }: Props) => {
  if (!data || !data.locationGuide) return null;

  const { address, isSubway, subwayDetail, isBus, busDetail, hasParking, parkingDetail } =
    data.locationGuide;

  const { pointColor, font: invitationFont } = data.invitationSetting;

  const [mainAddress = '', buildingName = ''] = address.split('/');

  const methods = {
    subway: subwayDetail,
    bus: busDetail,
    car: parkingDetail,
  };

  const show = {
    subway: isSubway,
    bus: isBus,
    car: hasParking,
  };

  const entries = TRANSPORT_TYPES.filter((type) => {
    const hasMethod = !!methods[type];
    const shouldShow = show[type] !== false;
    return hasMethod && shouldShow;
  }).map((type) => ({
    type,
    method: methods[type]!,
  }));

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(mainAddress);
  };

  return (
    <StyledDirection>
      <Column gap={16} width="100%">
        <CustomText
          fontType={invitationFont as CustomFontType}
          color={color.G900}
          size={24}
          line={100}
          weight={400}
        >
          오시는 길
        </CustomText>
        <KakaoMap address={mainAddress} />
      </Column>

      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Column gap={4} alignItems="flex-start">
          <Text fontType="P2" color={color.G80}>
            {mainAddress}
          </Text>
          <Text fontType="H4" color={color.G900}>
            {buildingName}
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
            address={mainAddress}
          />
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
  gap: 32px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.G40};
`;
