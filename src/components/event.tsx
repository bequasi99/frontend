import React from 'react';
import styled from "styled-components"
import { RichText } from "prismic-reactjs"

const EventContainer = styled.div`
  padding: 0px;
  @media ${props => props.theme.breakpoint.lg} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .date {
    vertical-align: top;
    margin-bottom: 6px;
    text-align: justify;
    @media ${props => props.theme.breakpoint.lg} {
      position: static;
      left: 0%;
      display: inline-block;
      width: 21.59%;
    }
  }
  .description {
    vertical-align: top;
    @media ${props => props.theme.breakpoint.lg} {
      position: static;
      width: 82.95%;
      display: inline-block;
    }
    p {
      margin: 0;
    }
    .pushdown {
      margin-bottom: 8px;
      @media ${props => props.theme.breakpoint.xl} {
        margin-bottom: 10px;
      }
      @media ${props => props.theme.breakpoint.xxl} {
        margin-bottom: 20px;
      }
    }
  }
`

const Event = ({date, descriptions, key, last}) => {
  return (<EventContainer key={key}>
    <p className="date">{date}</p>
    <div className="description">
      {descriptions.map((description, i) => (
        <div key={i} className={(i !== (descriptions.length - 1)) || !last ? "pushdown" : ""}>
          {RichText.render(description)}
        </div>
      ))}
    </div>
  </EventContainer>)
}

export default Event