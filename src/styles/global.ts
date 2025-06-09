import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    line-height: 1.5;
    min-height: 100%;
  }

  body {
    font-family: ${(props) => props.theme.fontFamily.ruda};
    font-size: ${(props) => props.theme.fontSize.base};
    background-color: ${(props) => props.theme.colors.bgColor};
    font-weight: 400;
    width: 100%;
    height: 100%;
  }
`
