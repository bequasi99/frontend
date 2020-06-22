import React from "react"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"

const Cookie = styled.div`
  .cookieConsent {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffffff;
    width: 80%;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 8px 25px;
    line-height: 130%;

    @media ${props => props.theme.breakpoint.md} {
      flex-direction: row;
      height: 80px;
      padding: 22px 25px;
    }

    @media ${props => props.theme.breakpoint.lg} {
      width: 50%;
    }

    @media ${props => props.theme.breakpoint.xl} {
      width: 40%;
    }

    @media ${props => props.theme.breakpoint.xxl} {
      width: 35%;
    }

    div {
      padding-right: 20px;
      padding-top: 8px;
      padding-bottom: 10px;
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
