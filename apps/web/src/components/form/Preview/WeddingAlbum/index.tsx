import { useEffect, useMemo, useState } from 'react';
import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { IconLongArrow } from '@merried/icon';
import { Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { useGalleryImageValueStore } from '@/store/form/galleryImage';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';

const WeddingAlbum = () => {
  const { title, imageList, isToggle } = useGalleryImageValueStore();
  const { pointColor, invitationFont } = useInvitationSetupValueStore();

  const [current, setCurrent] = useState(0);
  const total = imageList?.length || 0;

  const prev = () => total > 0 && setCurrent((c) => (c - 1 + total) % total);
  const next = () => total > 0 && setCurrent((c) => (c + 1) % total);

  const currentImageUrl = useMemo(() => {
    if (!imageList || imageList.length === 0) return '';

    const currentItem = imageList[current];
    if (typeof currentItem === 'string') return currentItem;
    return URL.createObjectURL(currentItem);
  }, [imageList, current]);

  useEffect(() => {
    if (!imageList || imageList.length === 0) return;

    const currentItem = imageList[current];
    if (currentItem instanceof File) {
      const url = URL.createObjectURL(currentItem);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageList, current]);

  if (!imageList || total === 0 || !isToggle) return null;

  return (
    <StyledWeddingAlbum>
      <CustomText
        fontType={invitationFont}
        color={pointColor}
        size={24}
        weight={400}
        line={140}
      >
        {title}
      </CustomText>
      <AlbumImage src={currentImageUrl} />
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <div onClick={prev}>
          <IconLongArrow width={32} height={32} direction="left" />
        </div>
        <Text fontType="P2" color={color.G900}>
          {current + 1}/{total}
        </Text>
        <div onClick={next}>
          <IconLongArrow width={32} height={32} direction="right" />
        </div>
      </Row>
    </StyledWeddingAlbum>
  );
};

export default WeddingAlbum;

const StyledWeddingAlbum = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 517px;
  background-color: #fdfbf0;
  padding: 18px 14px;
  gap: 16px;
`;

const AlbumImage = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url(${(p) => p.src}) center/cover no-repeat;
`;
