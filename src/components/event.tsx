import React from 'react';
import styled from "styled-components"
import { RichText } from "prismic-reactjs"

const EventContainer = styled.div`
.date {
    vertical-align: top;
    margin-bottom: 6px;

    @media ${props => props.theme.breakpoint.lg} {
      display: inline-block;
      width: 70px;
      margin-right: 20px;
    }

    @media ${props => props.theme.breakpoint.xl} {
      display: inline-block;
      width: 90px;
      margin-right: 20px;
    }
    
    @media ${props => props.theme.breakpoint.xxl} {
      display: inline-block;
      width: 150px;
      margin-right: 40px;
    }
  }
  .description {
    vertical-align: top;
    width: 100%;
    
    @media ${props => props.theme.breakpoint.lg} {
      display: inline-block;
      width: 424px;
    }
    
    @media ${props => props.theme.breakpoint.xl} {
      display: inline-block;
      width: 480px;
    }
    
    @media ${props => props.theme.breakpoint.xxl} {
      width: 690px;
    }
  }
`

const Event = ({start_date, end_date, description, key}) => (<EventContainer key={key}>
  <p className="date">{start_date}{start_date === end_date ? '' : `-${end_date.slice(2)}`}</p>
  <div className="description">
    {RichText.render(description.raw)}
  </div>
</EventContainer>)

export default Event