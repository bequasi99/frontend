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
        awards {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  end_date(formatString: "YYYY")
                  start_date(formatString: "YYYY")
                  description {
                    raw
                  }
                }
              }
            }
          }
        }
        conference {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  end_date(formatString: "YYYY")
                  start_date(formatString: "YYYY")
                  description {
                    raw
                  }
                }
              }
            }
          }
        }
        education {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  end_date(formatString: "YYYY")
                  start_date(formatString: "YYYY")
                  description {
                    raw
                  }
                }
              }
            }
          }
        }
        profile_photo {
          url
        }
        publications {
          publication {
            raw
          }
        }
        teaching {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  end_date(formatString: "YYYY")
                  start_date(formatString: "YYYY")
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

`

const MoreContainer = styled.div`
  position: relative;
  padding: 5% 15% 5% 15%;
  background-color: #fff;
  width: 100%;
  .close {
    color: black;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 15px;
    @media ${props => props.theme.breakpoint.lg} {
      position: fixed;
      :hover {
        color: #2a2937;
      }
    }
  }

  h2,
  h3,
  p {
    margin-bottom: 30px;
  }
`

const More = () => {
  const data = useStaticQuery(query)
  const resume = data.prismicResume.data;
  console.log(resume);
  //individual components
  const profile_photo = resume.profile_photo.url;
  const bio = resume.biography.raw;
  const education = resume.education.map(e => e.event.document.data);
  const conferences = resume.conference.map(e => e.event.document.data);
  const awards = resume.awards.map(e => e.event.document.data);
  const teaching = resume.teaching.map(e => e.event.document.data);
  const publications = resume.publications.map(e => e.publication.raw);

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
                education={education}
                conferences={conferences}
                awards={awards}
                teaching={teaching}
                publications={publications}
              />
            </MoreContainer>
          </Layout>)}
    </ModalRoutingContext.Consumer>
  )
}

export default More
