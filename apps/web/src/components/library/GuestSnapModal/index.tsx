import { color } from '@merried/design-system';
import { IconArrow, IconDelete, IconShortArrow } from '@merried/icon';
import { Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import Image from 'next/image';
import { useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  'template1.png',
  'template2.png',
  'template3.png',
  'template1.png',
  'template2.png',
  'template3.png',
  'template1.png',
  'template2.png',
  'template3.png',
  'template1.png',
  'template2.png',
  'template3.png',
  'template1.png',
  'template2.png',
  'template3.png',
];

const GuestSnapModal = ({ isOpen, onClose }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };
  const handleBackClick = () => {
    setSelectedIndex(null);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
    onClose();
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const thumbnailGroup =
    selectedIndex !== null ? images.slice(selectedIndex, selectedIndex + 8) : [];

  return (
    <BlurBackground $isOpen={isOpen}>
      {selectedIndex === null ? (
        <StyledGuestSnapModal>
          <Row width="100%" justifyContent="space-between" alignItems="flex-start">
            <Text fontType="H1" color={color.G900}>
              게스트 스냅 사진 보기
            </Text>
            <IconDelete
              style={{ cursor: 'pointer' }}
              stroke={color.G80}
              width={20}
              height={20}
              onClick={handleCloseModal}
            />
          </Row>

          <ImageContainer>
            {images.map((img, idx) => (
              <MiniImage
                key={idx}
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => handleImageClick(idx)}
              />
            ))}
          </ImageContainer>
        </StyledGuestSnapModal>
      ) : (
        <StyledGuestSnapDetailModal>
          <IconArrow
            direction="left"
            style={{ position: 'absolute', top: 45, left: 52 }}
            onClick={handleBackClick}
          />
          <IconShortArrow
            style={{ position: 'absolute', top: 272, left: 235 }}
            onClick={handlePrev}
          />
          <Column width={470} alignItems="center" gap={28}>
            <Image src={'/marker.svg'} height={584} alt="safd" />
            <Text fontType="P2" color={color.G900}>
              {selectedIndex! + 1} / {images.length}
            </Text>
            <Row gap={8}>
              {thumbnailGroup.map((img, idx) => (
                <MiniThumb
                  key={idx}
                  src={img}
                  alt={`썸네일 ${idx}`}
                  onClick={() => setSelectedIndex(selectedIndex! + idx)}
                  $active={idx === 0}
                />
              ))}
            </Row>
          </Column>

          <IconShortArrow
            style={{ position: 'absolute', top: 272, right: 235 }}
            onClick={handleNext}
          />
        </StyledGuestSnapDetailModal>
      )}
    </BlurBackground>
  );
};

export default GuestSnapModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 1001;
  padding: 0px 12px;
`;

const StyledGuestSnapModal = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 1100px;
  height: 780px;
  padding: 56px 40px 0px 40px;
  gap: 32px;

  border-radius: 16px;
  background: #fff;
`;

const ImageContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  gap: 12px;
`;

const MiniImage = styled.div`
  width: 136px;
  height: 169px;
  flex-shrink: 0;
  border-radius: 4px;
  background: lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const StyledGuestSnapDetailModal = styled.div`
  width: 1100px;
  height: 780px;

  border-radius: 16px;
  background: #fff;
`;

const MiniThumb = styled.img<{ $active: boolean }>`
  width: 56px;
  height: 70px;
  border-radius: 4px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid ${({ $active }) => ($active ? color.primary : 'transparent')};
  box-shadow: ${({ $active }) => ($active ? '0 0 0 2px white' : 'none')};
`;
