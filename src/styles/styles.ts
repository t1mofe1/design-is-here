import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
// #region clear
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
// #endregion

// #region fonts
@font-face {
  font-family: Golca;
  src:  url(/fonts/Golca.woff2) format('woff2'),
        url(/fonts/Golca.woff) format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: Micra;
  src:  url(/fonts/Micra.woff2) format("woff2"),
        url(/fonts/Micra.woff) format("woff"),
        url(/fonts/Micra.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
}
// #endregion

body {
  font-family: Micra, sans-serif;

  overflow-x: hidden;

  width: 100%;
  height: 100vh;

  &.lock {
    overflow: hidden;
  }
}

#root {
  width: 100%;
  height: 100%;

  background: #E7E7E7;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  overflow-x: hidden;

  cursor: url(cursor_default.png), auto;
}

// TYPOGRAPHY
html {
  font-size: 100%;
}

// #region h1
h1 {
    font-size: 2.25rem; // 36px
}
@media (min-width: 414px){
  h1 {
    font-size: calc(2.25rem + (((100vw - 20rem) / (90 - 20))) * (4.75 - 2.25)); // fluidly scale
  }
}
@media (min-width: 1440px){
  h1 {
    font-size: 4.75rem; // 76px
  }
}
// #endregion
`;
