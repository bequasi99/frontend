import React from 'react';
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import Event from './event'

const ResumeContainer = styled.div`
  width: 100%;
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    @media ${props => props.theme.breakpoint.lg} {
      width: 180px;
      height: 180px;
    }
  
    @media ${props => props.theme.breakpoint.xl} {
      width: 240px;
      height: 240px;
      margin-bottom: 25px;
    }
  
    @media ${props => props.theme.breakpoint.xxl} {
      width: 250px;
      height: 250px;
      margin-bottom: 30px;
    }
  }
  h2.resume {
    margin-bottom: 18px;
    text-transform: capitalize;
    @media ${props => props.theme.breakpoint.lg} {
      margin-bottom: 8px;
    }
  
    @media ${props => props.theme.breakpoint.xl} {
      margin-bottom: 10px;
    }
  
    @media ${props => props.theme.breakpoint.xxl} {
      margin-bottom: 20px;
    }
  }
  .block {
    margin-bottom: 35px;
    @media ${props => props.theme.breakpoint.lg} {
      margin-bottom: 30px;
    }
  
    @media ${props => props.theme.breakpoint.xl} {
      margin-bottom: 35px;
    }
  
    @media ${props => props.theme.breakpoint.xxl} {
      margin-bottom: 50px;
    }
  }
`

const Resume = ({
  photo, 
  bio,
  current,
  listings
}) => (<ResumeContainer>
  <div className="resumepage">
    <img src={photo} alt="profile" />
    <div className="block">
      {RichText.render(bio)}
    </div>
    <div className="block">
      <h2 className="resume">Current</h2>
      <Event {...current} />
    </div>
    {listings.map(({blockName, events}, i) => (
      <div className="block" key={i}>
        <h2 className="resume">{blockName}</h2>
        {events.order.map((y, i) => Event({
          ...events[y], 
          key: i, 
          last: i === (events.order.length - 1)
        }))}
      </div>
    ))}
  </div>
</ResumeContainer>)

export default Resume