import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`

@font-face {
  font-family: Golca;
  src:  url(/fonts/Golca.woff2) format("woff2"),
        url(/fonts/Golca.woff) format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: Micra;
  src:  url(/fonts/Micra.woff2) format("woff2"),
        url(/fonts/Micra.woff) format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: #E7E7E7;
  // overflow-x: hidden;

  font-family: Micra, sans-serif;

  width: 100%;
  height: 100vh;

  overflow: hidden;

  cursor: url(cursor_default.png), auto;
}

#root {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  overflow: hidden;
}

`;
