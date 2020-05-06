import React from "react"
import styled from "styled-components"
import arrow from "../images/arrow-down.svg"

const Scroll = styled.div`
  display: inline-block;
  padding: 14px 18px 60px 18px;
  color: ${props => props.theme.colors.white};

  @media ${props => props.theme.breakpoint.md} {
    padding: 12px 15px;
  }
  @media ${props => props.theme.breakpoint.lg} {
    padding: 21px 25px;
  }

  @media ${props => props.theme.breakpoint.xl} {
    padding: 25px 35px;
  }

  img {
    height: 65%;
    margin-left: 20px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow-bounce;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }

  @keyframes arrow-bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-25px);
    }
    50% {
      transform: scale(1.05, 0.95) translateY(0);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`

const IntroContent = () => {
  return (
    <div id="introContent">
      <div className="item">
        <p className="large-font">
          <u>be quasi</u> a research project that uses design to help people
          work more creatively and organisations better know people.
        </p>
      </div>
      <Scroll className="large-font">
        Please Scroll
        <img src={arrow} alt="Please scroll" />
      </Scroll>
    </div>
  )
}

export default IntroContent
