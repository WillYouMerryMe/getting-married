import { TextData } from '@/types/guestbook/client';

const getAABB = (x: number, y: number, w: number, h: number, rotate: number) => {
  const rad = (rotate * Math.PI) / 180;
  const absCos = Math.abs(Math.cos(rad));
  const absSin = Math.abs(Math.sin(rad));
  const boxW = w * absCos + h * absSin;
  const boxH = w * absSin + h * absCos;
  const cx = x + w / 2;
  const cy = y + h / 2;
  return {
    left: cx - boxW / 2,
    right: cx + boxW / 2,
    top: cy - boxH / 2,
    bottom: cy + boxH / 2,
  };
};

export const isOverlap = (a: TextData, b: TextData, padding: number) => {
  const A = getAABB(a.x, a.y, a.width, a.height, a.rotate);
  const B = getAABB(b.x, b.y, b.width, b.height, b.rotate);
  return !(
    A.right + padding < B.left ||
    A.left - padding > B.right ||
    A.bottom + padding < B.top ||
    A.top - padding > B.bottom
  );
};
