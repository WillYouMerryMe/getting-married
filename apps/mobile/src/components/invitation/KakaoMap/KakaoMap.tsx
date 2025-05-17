'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

interface KakaoMapProps {
  address: string;
}

const KakaoMap = ({ address }: KakaoMapProps) => {
  const [coordinates, setCoordinates] = useState({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const { x, y } = result[0];
        setCoordinates({ lat: parseFloat(y), lng: parseFloat(x) });
      }
    });
  }, [address]);

  return (
    <StyledKakaoMap>
      <StyledMap
        center={coordinates}
        style={{ width: '100%', height: '100%' }}
        level={3}
        draggable={false}
        zoomable={false}
        scrollwheel={false}
        disableDoubleClickZoom={true}
        isPanto={true}
      >
        <CustomOverlayMap position={coordinates} yAnchor={0.9}>
          <Image src={'/maker.svg'} width={24} height={36} alt="maker" />
        </CustomOverlayMap>
      </StyledMap>
    </StyledKakaoMap>
  );
};

export default KakaoMap;

const StyledKakaoMap = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledMap = styled(Map)`
  width: 100%;
  height: 100%;
`;
