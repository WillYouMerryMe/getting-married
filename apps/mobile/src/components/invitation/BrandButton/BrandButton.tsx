import { useToast } from '@/utils/useToast';
import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import Image from 'next/image';
import { useCallback } from 'react';
import styled from 'styled-components';

interface BrandButtonProps {
  src: string;
  name: '네이버지도' | '카카오맵';
  address: string;
}

const BrandButton = ({ src, name, address }: BrandButtonProps) => {
  const { show } = useToast();
  const handleClick = useCallback(() => {
    if (typeof window === 'undefined') return;
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
        const { y, x } = result[0];

        if (name === '카카오맵') {
          const url = `https://map.kakao.com/link/to/${encodeURIComponent(address)},${y},${x}`;
          window.open(url, '_blank');
        } else if (name === '네이버지도') {
          const url = `https://map.naver.com/p/search/${encodeURIComponent(address)}`;
          window.open(url, '_blank');
        }
      } else {
        show('주소를 찾을 수 없습니다', 'ERROR');
      }
    });
  }, [address, name, show]);

  return (
    <StyledBrandButton onClick={handleClick}>
      <Image width={20} height={20} src={src} alt="icon" />
      <Text fontType="Button2" color={color.G900}>
        {name}
      </Text>
    </StyledBrandButton>
  );
};

export default BrandButton;

const StyledBrandButton = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  height: 50px;
  background-color: #fafafa;
  border-radius: 8px;
  word-break: keep-all;
  gap: 8px;
`;
