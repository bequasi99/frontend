import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import CC from "../images/cc.svg"

const FooterContainer = styled.footer`
  color: ${props => props.theme.colors.grey};
  display: flex;
  width: 100%;
  padding: 14px 18px 60px 18px;
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
    align-items: flex-start;
    margin-bottom: 10px;

    @media ${props => props.theme.breakpoint.md} {
      flex: 0 0 20%;
    }

    img {
      display: inline-block;
      margin-right: 5px;
    }

    a {
      line-height: 18px;
    }
  }

  .pages {
    flex: 0 0 100%;

    @media ${props => props.theme.breakpoint.lg} {
      flex: 0 0 40%;
    }

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
    flex: 0 0 100%;
    margin-bottom: 20px;

    @media ${props => props.theme.breakpoint.lg} {
      flex: 0 0 40%;
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
    transition: color 0.5s ease;
    white-space: nowrap;
  }

  a:hover {
    color: white;
  }
`
const Footer = () => {
  return (
    <FooterContainer className="small-font">
      <div className="copyright">
        <img src={CC} alt="copyright" />
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noreferrer"
        >
          be quasi
        </a>
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
