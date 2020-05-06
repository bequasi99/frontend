import React from "react"
import styled from "styled-components"

const RotateImage = styled.div`
  background-color: ${props => props.theme.colors.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5000;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 320px) and (max-width: 900px) and (orientation: landscape) {
    display: flex;
  }

  svg {
    width: 45%;
    margin-bottom: 10px;
  }

  span {
    color: white;
  }
`

const Rotate = () => {
  return (
    <RotateImage>
      <svg viewBox="0 0 134 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M133.4 27.4004L126 34.9004M126 34.9004L118.5 27.4004M126 34.9004V18.0004C126 8.80039 118.6 1.40039 109.4 1.40039C102.8 1.40039 97.1 5.30039 94.4 10.9004M1 36.4004L8.4 29.0004M8.4 29.0004L15.9 36.4004M8.4 29.0004V45.9004C8.4 55.1004 15.8 62.5004 25 62.5004C31.6 62.5004 37.3 58.6004 40 53.0004M23.2 52.9004C21.8 52.9004 20.7 51.8004 20.7 50.4004V13.4004C20.7 12.0004 21.8 10.9004 23.2 10.9004H111.1C112.5 10.9004 113.6 12.0004 113.6 13.4004V50.4004C113.6 51.8004 112.5 52.9004 111.1 52.9004H23.2Z"
          stroke="white"
        />
      </svg>
      <span className="medium-font ">Rotate to portrait</span>
    </RotateImage>
  )
}

export default Rotate
