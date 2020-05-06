import React from "react"
import styled from "styled-components"
import ContactForm from "../components/contactForm"
import IntroContent from "../components/introContent"
import MainContent from "../components/mainContent"

const FixedContainer = styled.div`
  background-color: ${props => props.theme.colors.black};
  display: block;
  height: 100%;
  width: 100%;
  overflow: hideen;
  position: fixed;

  #mainContent {
    background-color: ${props => props.theme.colors.black};
    display: flex;
    flex: 1;
    align-items: top;
    justify-content: left;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: -1;
  }

  #contactForm {
    background-color: ${props => props.theme.colors.black};
    display: flex;
    flex: 1;
    align-items: top;
    justify-content: left;
    height: 100%;
    width: 100%;
    overflow: hideen;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: -1;
  }

  #introContent {
    background-color: ${props => props.theme.colors.black};
    display: flex;
    flex: 1;
    align-items: top;
    justify-content: left;
    height: 100%;
    width: 100%;
    overflow: hideen;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: -1;
  }

  .bg {
    background-color: ${props => props.theme.colors.black};
    display: flex;
    flex: 1;
    align-items: top;
    justify-content: left;
    height: 100%;
    width: 100%;
    overflow: hideen;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
  }

  .item {
    color: white;
    /*height: 100vh;*/
    padding: 14px 18px;
    width: 100%;

    @media ${props => props.theme.breakpoint.md} {
      padding: 12px 15px;
    }

    @media ${props => props.theme.breakpoint.lg} {
      padding: 21px 25px;
    }

    @media ${props => props.theme.breakpoint.xl} {
      padding: 25px 35px;
    }
  }
`
const FixedContent = () => {
  return (
    <FixedContainer>
      <div className="bg"></div>
      <IntroContent></IntroContent>
      <MainContent></MainContent>
      <ContactForm></ContactForm>
    </FixedContainer>
  )
}

export default FixedContent
