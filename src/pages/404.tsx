import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  text-align: center;
  color: white;
  width: 100%;

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;

    &:hover {
      opacity: 0.8;
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container>
      <div>
        <h1 className="large-font">404: Not found</h1>
        <p className="medium-font">
          The page you were looking for could not be found.
        </p>
        <p className="medium-font">
          <Link to="/">Return Home</Link>
        </p>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
