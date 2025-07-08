import { usePostGuestSnapshot } from '@/services/form/mutations';
import { color } from '@merried/design-system';
import { IconArrow, IconDelete, IconDownload, IconLongArrow } from '@merried/icon';
import { Column, Input, Row, Text, DesktopButton } from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'PASSWORD' | 'LIST' | 'DETAIL';

const GuestSnapModal = ({ id, isOpen, onClose }: Props) => {
  const [step, setStep] = useState<Step>('PASSWORD');
  const [images, setImages] = useState<string[]>([]);
  const [password, setPassword] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { postGuestSnapshotMutate } = usePostGuestSnapshot(id, setStep, setImages);

  const handleSubmitPassword = () => {
    postGuestSnapshotMutate(password, {
      onSuccess: (imgs) => {
        setImages(imgs);
        setStep('LIST');
      },
    });
  };

  const handleClose = () => {
    setStep('PASSWORD');
    setImages([]);
    setSelectedIndex(null);
    onClose();
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    setStep('DETAIL');
  };

  const handleBackFromDetail = () => {
    setSelectedIndex(null);
    setStep('LIST');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[selectedIndex!];
    link.download = `guest_snap_${selectedIndex! + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      {step === 'PASSWORD' && (
        <StyledModal width="384px" height="335px" padding="40px 24px">
          <Column gap={48}>
            <Column gap={24}>
              <Row justifyContent="space-between" alignItems="flex-start">
                <Column gap={10}>
                  <Text fontType="H2" color={color.G900}>
                    게스트 스냅 확인
                  </Text>
                  <Text fontType="P2" color={color.G80}>
                    게스트 스냅의 마스터 비밀번호를 입력해주세요
                  </Text>
                </Column>
                <IconDelete
                  stroke={color.G80}
                  width={20}
                  height={20}
                  style={{ cursor: 'pointer' }}
                  onClick={handleClose}
                />
              </Row>
              <Input
                label="레이블"
                platform="DESKTOP"
                placeholder="입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Column>
            <DesktopButton
              size="LARGE"
              styleType="DEFAULT"
              onClick={handleSubmitPassword}
            >
              게스트 스냅 보기
            </DesktopButton>
          </Column>
        </StyledModal>
      )}

      {step === 'LIST' && (
        <StyledModal width="1100px" height="780px" padding="56px 40px">
          <Row width="100%" justifyContent="space-between" alignItems="flex-start">
            <Text fontType="H1" color={color.G900}>
              게스트 스냅 사진 보기
            </Text>
            <IconDelete
              stroke={color.G80}
              width={20}
              height={20}
              style={{ cursor: 'pointer' }}
              onClick={handleClose}
            />
          </Row>
          <ImageContainer>
            {images.map((img, idx) => (
              <MiniImage
                key={idx}
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => handleThumbnailClick(idx)}
              />
            ))}
          </ImageContainer>
        </StyledModal>
      )}

      {step === 'DETAIL' && selectedIndex !== null && (
        <StyledModal width="1100px" height="780px" position="relative">
          <IconLongArrow
            stroke={color.G600}
            width={30}
            height={30}
            style={{ position: 'absolute', top: 45, left: 52 }}
            onClick={handleBackFromDetail}
          />
          <IconArrow
            direction="right"
            width={40}
            height={40}
            style={{ position: 'absolute', top: 272, left: 235 }}
            onClick={handlePrev}
          />
          <Column width="100%" justifyContent="center" alignItems="center" gap={28}>
            <ImageWrapper style={{ backgroundImage: `url(${images[selectedIndex]})` }}>
              <DownloadContainer onClick={handleDownload}>
                <IconDownload />
                <Text fontType="Button4" color={color.G0}>
                  다운로드
                </Text>
              </DownloadContainer>
            </ImageWrapper>
            <Text fontType="P2" color={color.G900}>
              {selectedIndex + 1} / {images.length}
            </Text>
            <Row gap={8}>
              {thumbnailGroup.map((img, idx) => (
                <MiniThumb
                  key={idx}
                  src={img}
                  alt={`썸네일 ${idx}`}
                  onClick={() => setSelectedIndex(selectedIndex + idx)}
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
        </StyledModal>
      )}
    </BlurBackground>
  );
};

export default GuestSnapModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 1001;
  padding: 0 12px;
`;

const StyledModal = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
  position?: string;
}>`
  ${({ position }) => position && `position: ${position};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
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
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MiniImage = styled.div`
  width: 136px;
  height: 169px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 470px;
  height: 584px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
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
