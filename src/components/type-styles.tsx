import { css } from "styled-components"
import { fluidRange } from "polished"

const TypeStyles = css`
  @font-face {
    font-family: "Jungka-Regular";
    src: url("/fonts/Jungka-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  .small-font {
    line-height: 150%;
    letter-spacing: 0.02em;
    ${fluidRange({
      prop: "font-size",
      fromSize: "12px",
      toSize: "12px",
    })};

    @media ${props => props.theme.breakpoint.md} {
      line-height: 150%;
      letter-spacing: 0.02em;
      ${fluidRange({
        prop: "font-size",
        fromSize: "12px",
        toSize: "12px",
      })};
    }

    @media ${props => props.theme.breakpoint.lg} {
      line-height: 167%;
      letter-spacing: 0.005em;
      ${fluidRange({
        prop: "font-size",
        fromSize: "12px",
        toSize: "15px",
      })};
    }

    @media ${props => props.theme.breakpoint.xl} {
      line-height: 173%;
      letter-spacing: 0.01em;
      ${fluidRange({
        prop: "font-size",
        fromSize: "15px",
        toSize: "15px",
      })};
    }
  }

  .medium-font {
    line-height: 130%;
    letter-spacing: 0.015em;
    ${fluidRange({
      prop: "font-size",
      fromSize: "17px",
      toSize: "16px",
    })};

    @media ${props => props.theme.breakpoint.md} {
      line-height: 130%;
      ${fluidRange({
        prop: "font-size",
        fromSize: "16px",
        toSize: "19px",
      })};
    }

    @media ${props => props.theme.breakpoint.lg} {
      line-height: 128%;
      letter-spacing: 0.02em;
      ${fluidRange({
        prop: "font-size",
        fromSize: "19px",
        toSize: "30px",
      })};
    }

    @media ${props => props.theme.breakpoint.xl} {
      line-height: 119%;
      letter-spacing: 0.015em;
      ${fluidRange({
        prop: "font-size",
        fromSize: "30px",
        toSize: "30px",
      })};
    }
  }

  .large-font {
    line-height: 117%;
    ${fluidRange({
      prop: "font-size",
      fromSize: "28px",
      toSize: "28px",
    })};

    @media ${props => props.theme.breakpoint.md} {
      line-height: 110%;
      ${fluidRange({
        prop: "font-size",
        fromSize: "37px",
        toSize: "49px",
      })};
    }

    @media ${props => props.theme.breakpoint.lg} {
      line-height: 110%;
      ${fluidRange({
        prop: "font-size",
        fromSize: "49px",
        toSize: "72px",
      })};
    }

    @media ${props => props.theme.breakpoint.xl} {
      line-height: 107%;
      ${fluidRange({
        prop: "font-size",
        fromSize: "72px",
        toSize: "72px",
      })};
    }
  }
`

export default TypeStyles
