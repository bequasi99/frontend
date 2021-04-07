import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkContainer = styled.span`
  a {
    color: ${props => props.theme.colors.yellow};
    cursor: pointer;
    line-height: 128%;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: translateY(0);
    text-decoration: none;
  }

`

const MainContent = () => {
  return (
    <div id="mainContent" className="item">
      <p className="large-font">
        be quasi is being developed by Tim Miller as a type of design-led social research 
        called quasi-design. <LinkContainer>
          <Link
            className="large-font link"
            to="/more/"
            state={{
              modal: true,
              noScroll: true,
            }}>
            More +
          </Link>
        </LinkContainer>
      </p>
    </div>
  )
}

export default MainContent
