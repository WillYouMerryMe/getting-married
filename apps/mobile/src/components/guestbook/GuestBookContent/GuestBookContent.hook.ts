import { isOverlap } from '@/utils/geometry';
import { TextData } from '@/types/guestbook/client';

export const generateTexts = (
  container: HTMLElement,
  texts: string[],
  count: number
): TextData[] => {
  const style = window.getComputedStyle(container);
  const fontSize = parseFloat(style.fontSize) || 20;
  const { width: cw, height: ch } = container.getBoundingClientRect();
  const padding = 10;
  const result: TextData[] = [];

  const measuredTexts = texts
    .map((text) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      ctx.font = `${fontSize}px Ownglyph Kundo`;

      const lines = text.split('\n');
      const width = Math.max(...lines.map((l) => ctx.measureText(l).width));
      const height = lines.length * fontSize * 1.2;

      return { text, width, height };
    })
    .sort(() => 0.5 - Math.random())
    .slice(0, count);

  const rotates = Array.from({ length: 121 }, (_, i) => i - 60)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);

  measuredTexts.forEach(({ text, width, height }, i) => {
    const rotate = rotates[i];
    let isPlaced = false;

    for (let attempt = 0; attempt < 100 && !isPlaced; attempt++) {
      const x = Math.random() * (cw - width - padding * 2) + padding;
      const y = Math.random() * (ch - height - padding * 2) + padding;
      const item: TextData = { x, y, rotate, text, width, height };

      if (!result.some((placed) => isOverlap(placed, item, padding))) {
        result.push(item);
        isPlaced = true;
      }
    }

    if (!isPlaced) {
      result.push({
        x: Math.random() * (cw - width - padding * 2) + padding,
        y: Math.random() * (ch - height - padding * 2) + padding,
        rotate,
        text,
        width,
        height,
      });
    }
  });

  return result;
};
