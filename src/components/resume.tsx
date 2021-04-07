import React from 'react';
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import Event from './event'

const ResumeContainer = styled.div`
  width: 100%;
  .resumepage {
    @media ${props => props.theme.breakpoint.lg} {
      width: 514px;
    }
  
    @media ${props => props.theme.breakpoint.xl} {
      width: 590px;
    }
  
    @media ${props => props.theme.breakpoint.xxl} {
      width: 890px;
    }
  }
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
  education, 
  conferences, 
  awards, 
  teaching, 
  publications
}) => (<ResumeContainer>
  <div className="resumepage">
    <img src={photo} alt="profile" />
    <div className="block">
      {RichText.render(bio)}
    </div>
    <div className="block">
      <h2 className="resume">Education</h2>
      {education.map((e, i) => Event({...e, key: i}))}
    </div>
    <div className="block">
      <h2 className="resume">Publication</h2>
      {publications.map((e, i) => RichText.render({...e, key: i}))}
    </div>
    <div className="block">
      <h2 className="resume">Teaching</h2>
      {teaching.map((e, i) => Event({...e, key: i}))}
    </div>
    <div className="block">
      <h2 className="resume">Conference</h2>
      {conferences.map((e, i) => Event({...e, key: i}))}
    </div>
    <div className="block">
      <h2 className="resume">Awards</h2>
      {awards.map((e, i) => Event({...e, key: i}))}
    </div>
  </div>
</ResumeContainer>)

export default Resume