import { createGlobalStyle } from 'styled-components';
import Fonts from '../assets';

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

@font-face {
    font-family: 'BBB0003';
    src: url(${Fonts.BBB0003}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ownglyph Kundo';
    src: url(${Fonts.OwnglyphKundo}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Diphylleia';
    src: url(${Fonts.Diphylleia}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DOSGothic';
    src: url(${Fonts.DOSGothic}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input[type="checkbox"],
input[type="radio"] {
  accent-color: #1470ff;
  cursor: pointer;
}


a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}

label {
  cursor: pointer;
}

input,
textarea {
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  border: none;
  outline: none;
}

input:focus {
  outline: none;
}

button {
  outline: none;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
`;

export default GlobalStyle;
