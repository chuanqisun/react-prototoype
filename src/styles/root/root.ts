import { createGlobalStyle } from 'styled-components';

export const RootStyles = createGlobalStyle`
  html, body, #app {
    height: 100%;
    display: flow-root; /* prevent margin collapse */
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #333;
  }
`;
