import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  html, body {
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background: #32a2f6 url('/css/wallpaper.webp') no-repeat;
    background-position: 50%;
    background-size: cover;
    font-family: sans-serif;
  }

  a {
    color: #60607b;
    text-decoration: none;
    border: 1px solid transparent;

    &:hover {
      color: #025797;
      border-bottom-color: #025797;
    }
  }

  footer {
    text-align: center;
  }
`;

export default GlobalStyle;
