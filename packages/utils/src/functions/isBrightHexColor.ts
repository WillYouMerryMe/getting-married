const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  let normalized = hex.replace('#', '');
  if (normalized.length === 3) {
    normalized = normalized
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const r = parseInt(normalized.substring(0, 2), 16);
  const g = parseInt(normalized.substring(2, 4), 16);
  const b = parseInt(normalized.substring(4, 6), 16);

  return { r, g, b };
};

export const isBrightHexColor = (hex: string): boolean => {
  const { r, g, b } = hexToRgb(hex);

  const toLinear = (value: number) =>
    value <= 10.31475 ? value / 3294.6 : Math.pow((value / 255 + 0.055) / 1.055, 2.4);

  const rLinear = toLinear(r);
  const gLinear = toLinear(g);
  const bLinear = toLinear(b);

  const luminance = 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;

  return luminance > 0.5;
};
