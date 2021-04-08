//import styled from "styled-components"
import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { RichText } from "prismic-reactjs"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Layout from "../components/layout"



export const query = graphql`
  {
    prismicLegal(data: {type: {eq: "Privacy"}}) {
      data {
        body {
          raw
        }
      }
    }
  }
`

const PrivacyPolicyContainer = styled.div`
  position: relative;
  padding: 82px 18px 156px 18px;
  @media ${props => props.theme.breakpoint.lg} {
    padding: 82px 216px 227px 15px;
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
    margin-right: 18px;
    @media ${props => props.theme.breakpoint.lg} {
      margin-right: 15px;
    }
    
    @media ${props => props.theme.breakpoint.xl} {
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

const PrivacyPolicy = () => {
  const data = useStaticQuery(query)

  const body = data.prismicLegal.data.body.raw;

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => {
        if (!modal) {
          return (
            <Layout>
              <PrivacyPolicyContainer className="medium-font">
                <Link to={"/"} className="close large-font">
                  Close
                </Link>
                {RichText.render(body)}
              </PrivacyPolicyContainer>
            </Layout>
          )
        } else return ( 
          <Layout>
            <PrivacyPolicyContainer className="medium-font">
              <Link to={closeTo} className="close large-font">
                Close
              </Link>
              {RichText.render(body)}
            </PrivacyPolicyContainer>
          </Layout>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

export default PrivacyPolicy
