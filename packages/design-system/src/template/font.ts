import { css } from 'styled-components';
import fontPresetsJson from './presets/fontPresets.json';

type FontStyle = {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
};

type TemplateGlobal = {
  [section: string]: FontStyle;
};

type TemplateFonts = {
  [fontName: string]: {
    default?: FontStyle;
  };
};

type Templates = {
  [templateId: string]: {
    global: TemplateGlobal;
    fonts: TemplateFonts;
  };
};

const getTemplateFontStyleValue = (
  templates: Templates,
  templateId: string,
  key?: string
): FontStyle | undefined => {
  const template = templates[templateId];
  if (!template) return undefined;

  const { global, fonts } = template;

  if (!key) return global.default;

  const globalStyle = global[key];
  if (globalStyle && Object.keys(globalStyle).length > 0) {
    return globalStyle;
  }

  return fonts[key]?.default ?? global.default;
};

export const getTextStyle = (templateId: string, key?: string) => {
  const style = getTemplateFontStyleValue(fontPresetsJson as Templates, templateId, key);

  if (!style) return css``;

  const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } = style;

  return css`
    ${fontFamily && `font-family: ${fontFamily};`}
    ${fontSize && `font-size: ${fontSize}px;`}
    ${fontWeight && `font-weight: ${fontWeight};`}
    ${lineHeight && `line-height: ${lineHeight}%;`}
    ${letterSpacing && `letter-spacing: ${letterSpacing}px;`}
  `;
};
