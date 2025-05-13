import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const SWIPE_THRESHOLD = 120;

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startYRef = useRef(0);

  useEffect(() => {
    if (isOpen) setDragY(0);
  }, [isOpen]);

  const handlePointerDown = (e: React.PointerEvent) => {
    startYRef.current = e.clientY;
    setDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const delta = e.clientY - startYRef.current;
    if (delta > 0) setDragY(delta);
  };

  const handlePointerUp = () => {
    setDragging(false);
    if (dragY > SWIPE_THRESHOLD) {
      onClose();
    } else {
      setDragY(0);
    }
  };

  return (
    <Background $isOpen={isOpen}>
      <StyledBottomSheet
        $isOpen={isOpen}
        $dragY={dragY}
        $dragging={dragging}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
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
  background: rgba(0, 0, 0, 0.3);
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
  height: 439px;
  background-color: ${color.G0};
  border-radius: 24px 24px 0 0;
  padding: 24px 12px 49px;
  touch-action: none;
  transform: ${(p) => (p.$isOpen ? `translateY(${p.$dragY}px)` : 'translateY(100%)')};
  transition: ${(p) => (p.$dragging ? 'none' : 'transform 0.3s ease-out')};
`;

const Line = styled.div`
  width: 80px;
  height: 4px;
  background-color: ${color.G900};
  border-radius: 4px;
`;
