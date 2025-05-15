import { useState, useRef, useEffect } from 'react';

interface SwipeHandlers {
  onPointerDown: React.PointerEventHandler;
  onPointerMove: React.PointerEventHandler;
  onPointerUp: React.PointerEventHandler;
}

export default function useSwipeDown(
  isOpen: boolean,
  onClose: () => void,
  threshold = 120
): { dragY: number; dragging: boolean; handlers: SwipeHandlers } {
  const startY = useRef(0);
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (isOpen) setDragY(0);
  }, [isOpen]);

  const onPointerDown: SwipeHandlers['onPointerDown'] = (e) => {
    startY.current = e.clientY;
    setDragging(true);
  };
  const onPointerMove: SwipeHandlers['onPointerMove'] = (e) => {
    if (!dragging) return;
    const delta = e.clientY - startY.current;
    if (delta > 0) setDragY(delta);
  };
  const onPointerUp: SwipeHandlers['onPointerUp'] = () => {
    setDragging(false);
    if (dragY > threshold) onClose();
    else setDragY(0);
  };

  return { dragY, dragging, handlers: { onPointerDown, onPointerMove, onPointerUp } };
}
