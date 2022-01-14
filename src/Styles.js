import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
      box-sizing: border-box;
  }

  *, button, a {
    font-family: 'Roboto', sans-serif !important;
  }

  html{
    overflow: hidden;
  }
`