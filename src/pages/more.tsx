//import styled from "styled-components"
import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Layout from "../components/layout"
import Resume from "../components/resume"


export const query = graphql`
  {
    prismicResume {
      data {
        biography {
          raw
        }
        profile_photo {
          url
        }
        sections {
          section {
            document {
              ... on PrismicSection {
                id
                data {
                  title
                  events {
                    event {
                      document {
                        ... on PrismicEvent {
                          id
                          data {
                            end_date(formatString: "YYYY")
                            start_date(formatString: "YYYY")
                            active
                            description {
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
          }
        }
      }
      last_publication_date(formatString: "MMMM YYYY")
    }
  }

`

const MoreContainer = styled.div`
  position: relative;
  padding: 82px 18px 20px 18px;
  overflow-x: hidden;
  @media ${props => props.theme.breakpoint.lg} {
    padding: 82px 216px 50px 25px;
  }
  
  @media ${props => props.theme.breakpoint.xl} {
    padding: 82px 410px 75px 25px;
  }
  
  @media ${props => props.theme.breakpoint.xxl} {
    padding: 82px 575px 100px 25px;
  }

  background-color: #fff;
  width: 100%;
  .close {
    color: black;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 12px;
    margin-right: 18px;
    
    @media ${props => props.theme.breakpoint.lg} {
      position: fixed;
      margin-top: 21px;
      margin-right: 15px;
      :hover {
        color: #2a2937;
      }
    }
    
    @media ${props => props.theme.breakpoint.xl} {
      margin-top: 16px;
      margin-right: 25px;
    }
    
    @media ${props => props.theme.breakpoint.xxl} {
      margin-right: 25px;
    }
  }

  h2,
  h3,
  p, ul, li {
    margin-bottom: 30px;
  }

  ul, li {
    list-style: initial;
    padding: revert;
  }
  em {
    font-style: revert;
  }
  strong {
    font-weight: 700;
  }
  a {
    text-decoration: underline;
    cursor: pointer;
    color: #000;
  }
  a:visited {
    color: #000;
  }
`

const generateDate = (data) => `${data.start_date}${data.start_date !== data.end_date || data.active ? '-' : ''}${data.start_date === data.end_date ? '' : data.end_date.slice(2)}`;

const groupEventsByYear = (keys, data) => {
  return keys.map(n => ({ 
    blockName: n, 
    events: data[n]
      .filter(e => e && e.event && e.event.document && e.event.document.data)
      .map(e => e.event.document.data).reduce((curr, event) => {
        //generate key of event
        const eventKey = generateDate(event);

        //if unique add to ordering
        curr.order.includes(eventKey) ? null : curr.order = [...curr.order, eventKey];
        //spread event in list
        if (curr[eventKey]) {
          curr[eventKey] = {
            ...curr[eventKey],
            descriptions: [...curr[eventKey].descriptions, event.description.raw]
          }
        } else {
          curr[eventKey] = {
            date: eventKey,
            descriptions: [event.description.raw]
          }
        }
        return curr;
      }, {
        order: []
      })
    }));
}

const More = () => {
  const data = useStaticQuery(query)
  const resume = data.prismicResume.data;
  const sections = resume.sections.map(s => s.section.document.data).reduce((prev, curr) => {
    prev[curr.title] = curr.events;
    prev.order = [...prev.order, curr.title]
    return prev;
  }, {
    order: []
  });
  
  const listings = groupEventsByYear(sections.order, sections);
  
  //individual components
  const profile_photo = resume.profile_photo.url;
  const bio = resume.biography.raw;

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (<Layout>
            <MoreContainer className="medium-font">
              <Link to={modal ? closeTo : "/"} className="close large-font">
                or Less -
              </Link>
              <Resume 
                photo={profile_photo}
                bio={bio}
                listings={listings}
              />
              <p>Last Updated {data.prismicResume.last_publication_date}</p>
            </MoreContainer>
          </Layout>)}
    </ModalRoutingContext.Consumer>
  )
}

export default More
