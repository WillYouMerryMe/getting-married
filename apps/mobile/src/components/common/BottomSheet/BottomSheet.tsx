import React, { ReactNode } from 'react';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import useSwipeDown from '@/hooks/useSwipeDown';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  useBodyScrollLock(isOpen);
  const { dragY, dragging, handlers } = useSwipeDown(isOpen, onClose);

  return (
    <Background $isOpen={isOpen}>
      <StyledBottomSheet
        $isOpen={isOpen}
        $dragY={dragY}
        $dragging={dragging}
        {...handlers}
        onClick={(e) => e.stopPropagation()}
      >
        <Line />
        {children}
      </StyledBottomSheet>
    </Background>
  );
};

export default BottomSheet;

const Background = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: ${(p) => (p.$isOpen ? 'auto' : 'none')};
  opacity: ${(p) => (p.$isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  z-index: 10;
`;

const StyledBottomSheet = styled.div<{
  $isOpen: boolean;
  $dragY: number;
  $dragging: boolean;
}>`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' })}
  width: 100%;
  height: auto;
  background-color: ${color.G0};
  border-radius: 24px 24px 0 0;
  padding: 24px 12px 49px;
  touch-action: none;
  transform: ${(p) => (p.$isOpen ? `translateY(${p.$dragY}px)` : 'translateY(100%)')};
  transition: ${(p) => (p.$dragging ? 'none' : 'transform 0.3s ease-out')};
  box-shadow:
    -5px -15px 9px 0px rgba(199, 199, 199, 0.05),
    -2px -7px 7px 0px rgba(199, 199, 199, 0.09);
`;

const Line = styled.div`
  width: 80px;
  height: 4px;
  background-color: ${color.G900};
  border-radius: 4px;
`;
