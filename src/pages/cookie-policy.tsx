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
  padding: 5% 15% 5% 15%;
  background-color: #fff;

  .close {
    color: black;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 15px;
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
          <CookiePolicyContainer className="medium-font">
            <Link to={closeTo} className="close large-font">
              Close
            </Link>
            {RichText.render(body)}
          </CookiePolicyContainer>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

export default CookiePolicy
