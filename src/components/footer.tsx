import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import CC from "../images/cc.svg"

const FooterContainer = styled.footer`
  color: ${props => props.theme.colors.grey};
  display: flex;
  width: 100%;
  padding: 14px 18px;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media ${props => props.theme.breakpoint.md} {
    padding: 12px 15px;
  }

  @media ${props => props.theme.breakpoint.lg} {
    padding: 21px 25px;
  }

  @media ${props => props.theme.breakpoint.xl} {
    padding: 25px 35px;
  }

  .copyright {
    display: flex;
    flex: 0 0 100%;
    margin-bottom: 10px;

    img {
      display: inline-block;
      margin-right: 5px;
    }
  }

  .pages {
    li {
      display: inline-block;
      margin-right: 10px;

      @media ${props => props.theme.breakpoint.lg} {
        display: block;
      }
    }

    li:last-of-type {
      margin: 0;
    }
  }

  .credits {
    width: 100%;
    margin-bottom: 20px;

    @media ${props => props.theme.breakpoint.lg} {
      width: 50%;
      margin-bottom: 0;
    }

    span {
      display: inline-block;
      margin-right: 10px;
    }

    a {
      display: inline-block;
      margin-right: 10px;
    }
  }

  a {
    color: ${props => props.theme.colors.grey};
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.5s ease;
    white-space: nowrap;
  }

  a:hover {
    opacity: 0.6;
  }
`
const Footer = () => {
  return (
    <FooterContainer className="small-font">
      <div className="copyright">
        <img src={CC} alt="copyright" />
        bequasi
      </div>
      <div className="credits">
        <div>
          <span>Design:</span>
          <a
            href="http://www.alastairjones.com/"
            target="_blank"
            rel="noreferrer"
          >
            Alastair Jones
          </a>
          <a
            href="http://www.martapuchala.com/"
            target="_blank"
            rel="noreferrer"
          >
            Marta Puchalła
          </a>
        </div>
        <div>
          <span>Development:</span>
          <a href="https://adamjw3.github.io/" target="_blank" rel="noreferrer">
            Adam Wright
          </a>
        </div>
      </div>
      <ul className="pages">
        <li>
          <Link
            to="/cookie-policy/"
            state={{
              modal: true,
              noScroll: true,
            }}
          >
            Cookie policy
          </Link>
        </li>
        <li>
          <Link
            to="/privacy-policy/"
            state={{
              modal: true,
              noScroll: true,
            }}
          >
            Privacy policy
          </Link>
        </li>
      </ul>
    </FooterContainer>
  )
}

export default Footer
