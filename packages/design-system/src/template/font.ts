import { RuleSet, css } from 'styled-components';

type FontStyleMap = {
  [templateId: string]: {
    [fontName: string]: RuleSet<object>;
  };
};

const styles: FontStyleMap = {
  template1: {
    BBB0003: css`
      font-family: 'BBB0003';
      font-size: 44px;
      font-weight: 700;
      line-height: 110%;
    `,
    OwnglyphKundo: css`
      font-family: 'Ownglyph Kundo';
      font-size: 44px;
      font-weight: 400;
      line-height: 110%;
    `,
    Diphylleia: css`
      font-family: 'Diphylleia';
      font-size: 44px;
      font-weight: 400;
      line-height: 110%;
    `,
    DOSGothic: css`
      font-family: 'DOSGothic';
      font-size: 48px;
      font-weight: 500;
      line-height: 110%;
    `,
  },
};

const getFontStyle = (templateId: string, fontName: string) => {
  return styles[templateId]?.[fontName] ?? css``;
};

export default getFontStyle;
