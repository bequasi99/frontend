import React from "react"
import { Normalize } from "styled-normalize"
import styled, { ThemeProvider } from "styled-components"
import theme from "./theme-styles"
import GlobalStyles from "./global-styles"
import CookieBar from "../components/cookieBar"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  position: relative;
`

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Normalize />
      <GlobalStyles />
      <Main>{children}</Main>
      <CookieBar></CookieBar>
    </AppContainer>
  </ThemeProvider>
)

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
