import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Item from "../components/item"
import ItemScreen from "../components/itemScreen"
import Itempdf from "../components/itempdf"

const ScrollContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: top;
  justify-content: left;
  pointer-events: none;

  .column-1-2 {
    position: relative;
    width: 100%;

    @media ${props => props.theme.breakpoint.lg} {
      width: 50%;
    }
  }

  .column-2-2 {
    position: absolute;
    transform: translateX(-100%);

    @media ${props => props.theme.breakpoint.lg} {
      position: relative;
      width: 50%;
      transform: none;
    }
  }

  .column-fixed {
    display: block;
    position: fixed;
    bottom: 0;
    width: 50%;
    transform: translateY(0);
  }

  .item {
    background-color: #bdbdbd;
    min-height: 350px;
    width: 100%;
    padding: 14px 18px 14px 18px;
    position: relative;
    pointer-events: all;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.5s ease;

    @media ${props => props.theme.breakpoint.lg} {
      min-height: 450px;
      height: 50vh;
      padding: 21px 25px;
      scroll-snap-align: center;
    }

    @media ${props => props.theme.breakpoint.xl} {
      padding: 25px 35px;
    }

    &:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  .item-pdf {
    background-color: #ffffff;

    &:nth-child(even) {
      background-color: #ffffff;
    }
  }

  .item-snap {
    background-color: #edffde !important;

    &:nth-child(even) {
      background-color: #edffde !important;
    }
  }

  .heading {
    margin-bottom: 13px;

    @media ${props => props.theme.breakpoint.lg} {
      margin-bottom: 25px;
    }
  }

  .item-screen {
    background-color: transparent;
    height: 100vh;
    pointer-events: none;
    opacity: 0;

    @media ${props => props.theme.breakpoint.lg} {
      height: 110vh;
      scroll-snap-align: center;
    }
  }

  .mobile-pdf {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;

    @media ${props => props.theme.breakpoint.lg} {
      display: none;
    }
  }

  .pdf-link-name-mobile {
    overflow: hidden;
    margin-top: 15px;

    @media ${props => props.theme.breakpoint.lg} {
      display: none;
    }

    span {
      display: inline-block;
      text-decoration: none;
      border: 1px solid ${props => props.theme.colors.formHover};
      color: ${props => props.theme.colors.formHover};
      padding: 8px 15px;
    }
  }

  .pdf {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    text-decoration: none;
    color: black;
  }

  .pdf-link {
    text-decoration: none;
  }

  .pdf-icon-wrapper {
    display: inline-block;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  .pdf-icon {
    animation: rotateImage 3.5s infinite;
    display: block;
    max-width: 80%;
    margin: 0 auto;

    @media ${props => props.theme.breakpoint.sm} {
      max-width: 100%;
    }

    @media ${props => props.theme.breakpoint.lg} {
      width: 406px;
    }

    @media ${props => props.theme.breakpoint.xl} {
      width: 480px;
    }
  }

  .pdf-link-name {
    display: none;

    @media ${props => props.theme.breakpoint.lg} {
      display: inline-block;
      position: absolute;
      bottom: 20px;
      right: 20px;
      color: ${props => props.theme.colors.black};
      width: 100%;
      text-align: right;
      overflow: hidden;
    }

    span {
      display: inline-block;
      transform: translateY(100%);
      transition: transform 0.5s ease 0.1s;

      &.snap {
        transform: translateY(0);
      }
    }
  }

  @keyframes rotateImage {
    from {
      transform: rotateY(0turn);
    }
    to {
      transform: rotateY(1turn);
    }
  }
`

export const query = graphql`
  {
    prismicOrder(data: {}) {
      data {
        order {
          item {
            document {
              ... on PrismicItem {
                id
                data {
                  description {
                    text
                  }
                  title {
                    text
                  }
                  icon {
                    alt
                    url
                    localFile {
                      childImageSharp {
                        fluid(quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                      extension
                      publicURL
                    }
                  }
                  download {
                    url
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const items = ({ handleInview }) => {
  const data = useStaticQuery(query)

  const items = data.prismicOrder.data.order

  const middle = items.length / 2

  return (
    <ScrollContainer id="scroller">
      <div className="column-1-2" id="left-column">
        <ItemScreen name="intro" handleInview={handleInview} />
        {items.map((item, index) => {
          if (index == middle) {
            return (
              <React.Fragment key={index}>
                <ItemScreen name="middle" handleInview={handleInview} />
                <Item data={item.item.document.data}></Item>
              </React.Fragment>
            )
          }
          return (
            <React.Fragment key={index}>
              <Item data={item.item.document.data}></Item>
            </React.Fragment>
          )
        })}
        <ItemScreen name="form" handleInview={handleInview} />
      </div>
      <div className="column-2-2">
        <div className="column-fixed" id="right-column">
          <div className="item-screen"></div>
          {items.reverse().map((item, index) => {
            if (index == middle) {
              return (
                <React.Fragment key={index}>
                  <div className="item-screen"></div>
                  <Itempdf data={item.item.document.data}></Itempdf>
                </React.Fragment>
              )
            }
            return (
              <React.Fragment key={index}>
                <Itempdf data={item.item.document.data}></Itempdf>
              </React.Fragment>
            )
          })}
          <div className="item-screen"></div>
        </div>
      </div>
    </ScrollContainer>
  )
}

export default items
