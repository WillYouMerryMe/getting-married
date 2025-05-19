'use client';

import ButtonGroup from '@/components/common/ButtonGroup/ButtonGroup';
import { color } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Button, Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditModal = ({ isOpen, onClose }: EditModalProps) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledEditModal>
        <Row width="100%" alignItems="center" justifyContent="space-between">
          <Text fontType="H3" color={color.G900}>
            박강원
          </Text>
          <div onClick={handleCloseModal}>
            <IconDelete width={20} height={20} stroke={color.G900} />
          </div>
        </Row>
        <Column gap={24} width="100%">
          <ButtonGroup
            title="참석 여부"
            buttons={[
              { label: '참석', onClick: () => {} },
              { label: '불참석', onClick: () => {} },
            ]}
          />
          <ButtonGroup
            title="축의금 여부"
            buttons={[
              { label: 'O', onClick: () => {} },
              { label: 'X', onClick: () => {} },
            ]}
          />
          <ButtonGroup
            title="식사 여부"
            buttons={[
              { label: 'O', onClick: () => {} },
              { label: 'X', onClick: () => {} },
            ]}
          />
        </Column>
        <Button onClick={() => {}} styleType='SECOND' width="100%">닫기</Button>
      </StyledEditModal>
    </BlurBackground>
  );
};

export default EditModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  z-index: 10;
  padding: 0px 12px;
`;

const StyledEditModal = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })}
  width: 100%;
  height: 510px;
  background-color: ${color.G0};
  border-radius: 16px;
  padding: 32px 16px 24px 16px;
  gap: 40px;
`;
