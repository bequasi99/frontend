import React from "react"
import styled from "styled-components"
import arrow from "../images/arrow-down.svg"

const Scroll = styled.div`
  display: inline-block;
  padding: 14px 18px 60px 18px;
  color: ${props => props.theme.colors.white};
  line-height: 0;

  @media ${props => props.theme.breakpoint.md} {
    padding: 12px 15px;
  }
  @media ${props => props.theme.breakpoint.lg} {
    padding: 21px 25px;
  }

  @media ${props => props.theme.breakpoint.xl} {
    padding: 25px 35px;
  }

  .svg-holder {
    margin-left: 10px;
    display: inline-flex;
    align-self: center;
  }

  svg {
    height: 0.8em;
    width: 0.8em;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow-bounce;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }

  @keyframes arrow-bounce {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-25px);
    }
    50% {
      transform: translateY(0);
    }
    64% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`

const IntroContent = () => {
  return (
    <div id="introContent">
      <div className="item">
        <p className="large-font">
          be quasi is a research project that uses design to help people work
          creatively and organisations better know how people work.
        </p>
      </div>
      <Scroll className="large-font">
        Please scroll
        <div className="svg-holder">
          <svg
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.01607 23L0.995804 17.9797L0.963623 17.143H4.72882L4.69664 0L7.30331 0L7.33549 17.143H11.0041L11.0363 17.9797L6.01607 23Z"
              fill="white"
            />
          </svg>
        </div>
      </Scroll>
    </div>
  )
}

export default IntroContent
