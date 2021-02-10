import { createGlobalStyle } from 'styled-components';
import desk from '../assets/images/desk.jpg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    background-image: url(${desk});
    background-size: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: #F8D948;
    background-blend-mode: multiply;
    background-position: center;
    background-position-y: 70px;
    /* background-blend-mode: normal; */
    /* background-blend-mode: hard-light; */
    /* background-blend-mode: difference;    */
    /* background-blend-mode: light;  */
    font-size: 10px;
    opacity: .95;

  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }



  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

   .main_top {
    margin-top: 5%;
  }

  .main_bottom {
    margin-bottom: 50%;
  }

  .footer_margin {
    margin-bottom: 5%;
  }

  #about_text {
    display: grid;
    list-style: none;
    grid-template-columns: 1fr 1fr;
  }

  #horological_text {
    /* display: grid; */
    list-style: square;
    /* grid-template-columns: 1fr; */
  }

  .sorry {
    font-size: 1.5rem;
    color: green;
    margin-top: -30px;
    @media (min-width: 800px) {
      display: none;
    }
  }
`;

export default GlobalStyles;
