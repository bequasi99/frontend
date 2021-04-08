//import styled from "styled-components"
import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { RichText } from "prismic-reactjs"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Layout from "../components/layout"



export const query = graphql`
  {
    prismicLegal(data: {type: {eq: "Cookies"}}) {
      data {
        body {
          raw
        }
      }
    }
  }
`

const CookiePolicyContainer = styled.div`
  position: relative;
  padding: 82px 18px 156px 18px;
  @media ${props => props.theme.breakpoint.lg} {
    padding: 82px 216px 227px 25px;
  }
  
  @media ${props => props.theme.breakpoint.xl} {
    padding: 82px 410px 233px 25px;
  }
  
  @media ${props => props.theme.breakpoint.xxl} {
    padding: 82px 575px 268px 25px;
  }
  background-color: #fff;

  .close {
    color: black;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 12px;
    margin-right: 18px;
    
    @media ${props => props.theme.breakpoint.lg} {
      position: fixed;
      margin-top: 21px;
      margin-right: 15px;
      :hover {
        color: #2a2937;
      }
    }
    
    @media ${props => props.theme.breakpoint.xl} {
      margin-top: 16px;
      margin-right: 25px;
    }
    
    @media ${props => props.theme.breakpoint.xxl} {
      margin-right: 25px;
    }
  }

  h2,
  h3,
  p {
    margin-bottom: 30px;
  }
`

const CookiePolicy = () => {
  const data = useStaticQuery(query)

  const body = data.prismicLegal.data.body.raw;

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => {
        if (!modal) {
          return (
            <Layout>
              <CookiePolicyContainer className="medium-font">
                <Link to={"/"} className="close large-font">
                  Close
                </Link>
                {RichText.render(body)}
              </CookiePolicyContainer>
            </Layout>
          )
        } else return ( 
          <Layout>
            <CookiePolicyContainer className="medium-font">
              <Link to={closeTo} className="close large-font">
                Close
              </Link>
              {RichText.render(body)}
            </CookiePolicyContainer>
          </Layout>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

export default CookiePolicy
