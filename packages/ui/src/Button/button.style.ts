import { css } from 'styled-components';
import { color } from '@merried/design-system';
import { isBrightHexColor, darkenHexColor } from '@merried/utils';

export const getButtonStyle = {
  DEFAULT: css`
    background-color: ${color.primary};
    color: ${color.G0};
    &:hover {
      background-color: #ffadc0;
    }
  `,
  SECOND: css`
    background-color: ${color.G20};
    color: ${color.G300};
    &:hover {
      background-color: #eeeeee;
    }
  `,
  SELECT: css`
    background-color: ${color.G10};
    border: 1px solid ${color.G50};
    color: ${color.G300};
    &:hover {
      background-color: #f5f3f3;
    }
  `,
  DISABLED: css`
    background-color: ${color.G40};
    color: ${color.G100};
  `,
  WARNING: css`
    background-color: ${color.red};
    color: ${color.G0};
    &:hover {
      background-color: #e43636;
    }
  `,
};

export const getButtonSize = {
  SMALL: css`
    width: 166px;
    height: 52px;
    padding: 18px 69px;
  `,
  MEDIUM: css`
    width: 185px;
    height: 50px;
    padding: 17px 40px;
  `,
  LARGE: css`
    width: 319px;
    height: 50px;
    padding: 18px 120px;
  `,
  VERY_LARGE: css`
    width: 351px;
    height: 52px;
    padding: 19px 137px;
  `,
};

export const getDesktopButtonSize = {
  SMALL: css`
    width: 105px;
    height: 42px;
    padding: 14px 34px;
  `,
  LARGE: css`
    width: 336px;
    height: 50px;
    padding: 14px 80px;
  `,
};

export const getPointColorStyle = (pointColor?: string) => {
  if (!pointColor) return '';
  const textColor = isBrightHexColor(pointColor) ? color.G900 : color.G0;
  const hoverColor = darkenHexColor(pointColor);
  return css`
    background-color: ${pointColor};
    color: ${textColor};
    &:hover {
      background-color: ${hoverColor};
    }
  `;
};
