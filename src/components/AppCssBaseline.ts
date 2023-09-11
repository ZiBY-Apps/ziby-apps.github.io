import { createGlobalStyle } from 'styled-components';

export const AppCssBaseline = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  html {
    min-width: 360px;
    overflow-y: hidden;
  }

  strong, b {
    font-weight: 500;
  }
`;
