import { color } from '@merried/design-system';
import { IconArrow, IconDelete, IconDownload, IconLongArrow } from '@merried/icon';
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
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
  '/template1.png',
  '/template2.png',
  '/template3.png',
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

  const handleDownload = () => {
    const imageUrl = images[selectedIndex!];
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `guest_snap_${selectedIndex! + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <IconLongArrow
            stroke={color.G600}
            width={30}
            height={30}
            style={{ position: 'absolute', top: 45, left: 52 }}
            onClick={handleBackClick}
          />
          <IconArrow
            direction="right"
            width={40}
            height={40}
            style={{ position: 'absolute', top: 272, left: 235 }}
            onClick={handlePrev}
          />
          <Column width="100%" justifyContent="center" alignItems="center" gap={28}>
            <ImageWrapper style={{ backgroundImage: `url(${images[selectedIndex!]})` }}>
              <DownloadContainer onClick={handleDownload}>
                <IconDownload />
                <Text fontType="Button4" color={color.G0}>
                  다운로드
                </Text>
              </DownloadContainer>
            </ImageWrapper>
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
          <IconArrow
            direction="left"
            width={40}
            height={40}
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
  height: 100%;
  overflow-y: auto;
  grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  gap: 11px 10px;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
  position: relative;
  width: 1100px;
  height: 780px;

  border-radius: 16px;
  background: #fff;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 470px;
  height: 584px;
  border-radius: 8px;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

const DownloadContainer = styled.div`
  ${flex({ alignItems: 'center' })}
  position: absolute;
  top: 24px;
  right: 20px;
  padding: 4px 12px;
  gap: 4px;
  border-radius: 999px;
  background: rgba(26, 26, 26, 0.5);
  z-index: 10;
  cursor: pointer;
`;
