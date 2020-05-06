const size = {
  xs: "320px",
  sm: "375px",
  md: "425px",
  lg: "768px",
  xl: "1024px",
  xxl: "1440px",
}

const theme = {
  colors: {
    form: "#19181D",
    formHover: "#2A2937",
    yellow: "#F8A2FA",
    yellowHover: "#EE7FF0",
    white: "#ffffff",
    black: "#000000",
    grey: "#6A6A6B",
    error: "#FF7C45",
  },
  breakpoint: {
    xs: `only screen and (min-width: ${size.xs})`,
    sm: `only screen and (min-width: ${size.sm})`,
    md: `only screen and (min-width: ${size.md})`,
    lg: `only screen and (min-width: ${size.lg})`,
    xl: `only screen and (min-width: ${size.xl})`,
    xxl: `only screen and (min-width: ${size.xxl})`,
  },
}

export default theme
