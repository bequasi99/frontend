import React from "react"
import styled from "styled-components"
import arrow from "../images/arrow-down.svg"

const Scroll = styled.div`
  display: inline-block;
  padding: 14px 18px 60px 18px;
  color: ${props => props.theme.colors.white};
  line-height: 0;

  @media ${props => props.theme.breakpoint.md} {
    padding: 18px 15px;
  }

  @media ${props => props.theme.breakpoint.lg} {
    padding: 29px 25px;
  }

  @media ${props => props.theme.breakpoint.xl} {
    padding: 29px 25px;
  }

  .svg-holder {
    margin-left: 10px;
    display: inline-flex;
    align-self: center;
  }

  img {
    height: 0.8em;
    width: 0.8em;
  }
`

const IntroContent = () => {
  return (
    <div id="introContent">
      <div className="item">
        <p className="large-font">
          <u>be quasi</u> is a research project that uses experimental design activities to help people work creatively and organisations better know how people work. Click below to download some activities.
        </p>
      </div>
      <Scroll className="large-font">
        Please scroll
        <div className="svg-holder">
          <img src={arrow} alt="arrow" />
        </div>
      </Scroll>
    </div>
  )
}

export default IntroContent
