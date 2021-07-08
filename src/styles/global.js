import OpenSans from '../assets/fonts/OpenSansRegular.ttf';
import OpenSansBold from '../assets/fonts/OpenSansBold.ttf';
import QuickSand from '../assets/fonts/Quicksand_Light.otf';
import QuickSandBold from '../assets/fonts/Quicksand_Bold.otf';
import Rubik from '../assets/fonts/Rubik-Regular.ttf';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }


  html, body, #root {
    height: 100%;
  }


  @font-face {
    font-family: 'Quicksand';
    font-display: block;
    src: url('${QuickSand}') format('opentype');
  }
  @font-face {
    font-family: 'QuicksandBold';
    font-display: block;
    src: url('${QuickSandBold}') format('opentype');
  }

  @font-face {
    font-family: 'Opensans';
    font-display: block;
    src: url('${OpenSans}') format('opentype');
  }
  @font-face {
    font-family: 'OpenSansBold';
    font-display: block;
    src: url('${OpenSansBold}') format('opentype');
  }

  @font-face {
    font-family: 'Rubik';
    font-display: block;
    src: url('${Rubik}') format('opentype');
  }


 
  html{
    scroll-behavior: smooth;
  }
  body,
  p {
    font-family: "Lato", sans-serif;
  }
  h2 {
    font-family: SuvinilNormal
  }

  .modal-backdrop {
    background-color: #121212;
    opacity: 0.87 !important;
  }
`;
