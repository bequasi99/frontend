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
      last_publication_date(formatString: "MMMM YYYY")
    }
  }
`

const PrivacyPolicyContainer = styled.div`
  position: relative;
  padding: 82px 18px 20px 18px;
  width: 100%;
  @media ${props => props.theme.breakpoint.lg} {
    padding: 82px 216px 50px 25px;
  }
  
  @media ${props => props.theme.breakpoint.xl} {
    padding: 82px 410px 75px 25px;
  }
  
  @media ${props => props.theme.breakpoint.xxl} {
    padding: 82px 575px 100px 25px;
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
  p, ul {
    margin-bottom: 30px;
  }

  ul, li {
    list-style: initial;
    padding: revert;
  }
  li {
    margin-bottom: 8px;
    @media ${props => props.theme.breakpoint.xl} {
      margin-bottom: 10px;
    }
    @media ${props => props.theme.breakpoint.xxl} {
      margin-bottom: 20px;
    }
  }
  em {
    font-style: revert;
  }
  strong {
    font-weight: 700;
  }
  a {
    text-decoration: underline;
    cursor: pointer;
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
                <p>Last Updated {data.prismicLegal.last_publication_date}</p>
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
              <p>Last Updated {data.prismicLegal.last_publication_date}</p>
            </PrivacyPolicyContainer>
          </Layout>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

export default PrivacyPolicy
