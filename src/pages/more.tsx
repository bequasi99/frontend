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
                  active
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
        conferences {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  active
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
                  active
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
                  active
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
        talks {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  active
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
        research {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  active
                  start_date(formatString: "YYYY")
                  end_date(formatString: "YYYY")
                  description {
                    raw
                  }
                }
              }
            }
          }
        }
        other {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  active
                  start_date(formatString: "YYYY")
                  end_date(formatString: "YYYY")
                  description {
                    raw
                  }
                }
              }
            }
          }
        }
        memberships {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  active
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
        experiments {
          event {
            document {
              ... on PrismicEvent {
                id
                data {
                  active
                  start_date(formatString: "YYYY")
                  end_date(formatString: "YYYY")
                  description {
                    raw
                  }
                }
              }
            }
          }
        }
        current {
          document {
            ... on PrismicEvent {
              id
              data {
                active
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
  const pre = ['research', 'education'].map(n => ({ 
    blockName: n, 
    events: resume[n].map(e => e.event.document.data)
  }));
  const post = ['experiments', 'teaching', 'conferences', 'talks', 'awards', 'memberships', 'other'].map(n => ({ 
    blockName: n, 
    events: resume[n].map(e => e.event.document.data)
  }));
  //individual components
  const profile_photo = resume.profile_photo.url;
  const bio = resume.biography.raw;
  const publications = resume.publications.map(e => e.publication.raw);
  console.log(publications);
  const current = resume.current.document.data;
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
                current={current}
                pre={pre}
                publications={publications}
                post={post}
              />
            </MoreContainer>
          </Layout>)}
    </ModalRoutingContext.Consumer>
  )
}

export default More
