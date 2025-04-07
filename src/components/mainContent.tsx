import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkContainer = styled.div`
  display: inline-block;
  white-space: nowrap;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: translateY(0);
  :hover {
    transform: translateY(-5px);
  }
  a {
    cursor: pointer;
    line-height: 128%;
    color: ${props => props.theme.colors.yellow};
    text-decoration: none;
    :hover {
      color: #ee7ff0;
    }
  }
`

const MainContent = () => {
  return (
    <div id="mainContent" className="item">
      <p className="large-font">
        be quasi is being developed by Timothy Miller as a type of design research 
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
