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
  }
`

const Event = ({start_date, end_date, description, active, key}) => (<EventContainer key={key}>
  <p className="date">{start_date}{start_date !== end_date || active ? '-' : ''}{start_date === end_date ? '' : `${end_date.slice(2)}`}</p>
  <div className="description">
    {RichText.render(description.raw)}
  </div>
</EventContainer>)

export default Event