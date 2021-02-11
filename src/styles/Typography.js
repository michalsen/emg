import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/GaramondPremrPro-LtDisp.otf';
import bold_font from '../assets/fonts/GaramondPremrPro-Subh.otf';
import trinite_font from '../assets/fonts/TriniteNo3-RomanCondTab.otf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Trinite;
    src: url(${trinite_font});
  }
  html {
    font-family: Trinite, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2 {
    font-weight: bold;
    margin: 0;
  }
  h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: blue;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
