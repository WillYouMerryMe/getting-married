import { RuleSet, css } from 'styled-components';

type FontName =
  | 'BBB0003'
  | 'OwnglyphKundo'
  | 'Diphylleia'
  | 'DOSGothic'
  | 'KoreanCNMM'
  | 'LeeSeoyun'
  | 'MapoDacapo'
  | 'OwnglyphBaekSubin'
  | 'NelnaYesam';

type FontStyleMap = {
  [templateId: string]: {
    [fontName in FontName]: RuleSet<object>;
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
    KoreanCNMM: css`
      font-family: 'KoreanCNMM';
      font-size: 44px;
      font-weight: 400;
      line-height: 110%;
    `,
    LeeSeoyun: css`
      font-family: 'LeeSeoyun';
      font-size: 44px;
      font-weight: 400;
      line-height: 110%;
    `,
    MapoDacapo: css`
      font-family: 'MapoDacapo';
      font-size: 44px;
      font-weight: 400;
      line-height: 110%;
    `,
    OwnglyphBaekSubin: css`
      font-family: 'Ownglyph Baek Subin';
      font-size: 44px;
      font-weight: 400;
      line-height: 110%;
    `,
    NelnaYesam: css`
      font-family: 'Nelna Yesam';
      font-size: 56px;
      font-weight: 400;
      line-height: 110%;
    `,
  },
};

const getFontStyle = (templateId: string, fontName: FontName) => {
  return styles[templateId]?.[fontName] ?? css``;
};

export default getFontStyle;
