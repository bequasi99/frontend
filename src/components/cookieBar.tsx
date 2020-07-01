import React from "react"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"

const Cookie = styled.div`
  .cookieConsent {
    display: flex;
    align-items: center;
    font-size: 12px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffffff;
    width: 80%;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 8px 25px;
    line-height: 125%;

    @media ${props => props.theme.breakpoint.md} {
      flex-direction: row;
      height: 80px;
      padding: 22px 25px;
    display: flex;
    align-items: center;
    }

    @media ${props => props.theme.breakpoint.lg} {
      width: 50%;
    display: flex;
    align-items: center;
    }

    @media ${props => props.theme.breakpoint.xl} {
      width: 40%;
    display: flex;
    align-items: center;
    }

    @media ${props => props.theme.breakpoint.xxl} {
      width: 37%;
    display: flex;
    align-items: center;
    }

    div {
      padding: 4px 10px 10px 0px;
    display: flex;
    align-items: center;
    }
  }

  button {
    font-size: 12px;
    display: inline-block;
    text-decoration: none;
    border: 1px solid ${props => props.theme.colors.formHover};
    color: ${props => props.theme.colors.formHover};
    padding: 8px 15px;

    @media ${props => props.theme.breakpoint.md} {
      margin-left: auto;
      flex: 0 0 120px;
    }
  }
`

const CookieBar = () => {
  return (
    <Cookie>
      <CookieConsent
        buttonText="Accept + Close"
        disableStyles={true}
        cookieName="gatsby-gdpr-google-analytics"
      >
        This website uses cookies to improve your browsing experience
      </CookieConsent>
    </Cookie>
  )
}

export default CookieBar
