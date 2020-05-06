import { createGlobalStyle } from "styled-components"
import Reset from "./reset-styles"
import TypeStyles from "./type-styles"

const GlobalStyles = createGlobalStyle`
  ${Reset}

  html, body {
    box-sizing: border-box;
    scroll-snap-type: y mandatory;
     -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  text-rendering: optimizeLegibility;
  }
  
  *, *:before, *:after {
  box-sizing: inherit;
  }

  body {
    font-family: "Jungka-Regular", Arial, Helvetica, sans-serif;
    font-size: 62.5%; //1rem = 10px
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.formHover}
  }

  ${TypeStyles}

`

export default GlobalStyles
