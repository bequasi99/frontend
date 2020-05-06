import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import close from "../images/close.svg"

const PrivacyPolicyContainer = styled.div`
  position: relative;

  .close {
    color: black;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
  }

  h2 {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 30px;
  }
`

const PrivacyPolicy = () => {
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <PrivacyPolicyContainer>
          {modal ? (
            <Link to={closeTo} className="close medium-font">
              Close
            </Link>
          ) : (
            <header>
              <h1>Website Title</h1>
            </header>
          )}
          <h2 className="medium-font">Privacy notice</h2>
          <p className="medium-font">
            This Privacy Notice ("Privacy Notice") applies to the processing of
            personal data in connection with the provision of the Be Quasi
            website at www.bequasi.com (the "Site"), and all of the goods and
            services that we offer, including from the Site or other such
            locations around the world ("Services"). Be Quasi respects the
            privacy of every person who visits our Site or uses any Services and
            is committed to ensuring a safe online experience for all.
          </p>
          <p className="medium-font">
            1. Purpose of this privacy notice This Privacy Notice explains Be
            Quasi's approach to any personal data that might be collected from
            you or obtained about you from a third party and the purposes for
            which such data is processed. This Privacy Notice also sets out your
            rights in respect of our processing of your personal data.
          </p>
          <p className="medium-font">
            When Be Quasi talks about "personal data", this means any
            information relating to an identified or identifiable living
            individual. Individuals might be identified by reference to a name,
            an identification number, location data, an online identifier (such
            as an IP address) or to other factors that are specific to them,
            such as their physical appearance.
          </p>
          <p className="medium-font">
            This Privacy Notice informs you of the nature of the personal data
            about you that is processed and how you can request its deletion,
            whether it's being updated, transfered or if you would like access
            to it.
          </p>
          <p className="medium-font">
            This Privacy Notice is intended to assist you in making informed
            decisions when using the Site and Services. Please take a moment to
            read and understand it. It should be read in conjunction with the
            Cookie policy.
          </p>
          <p className="medium-font">
            This Privacy Notice only applies to the use of your personal data
            obtained by Be Quasi, whether from you directly or from a third
            party. It does not apply to personal data collected by third parties
            during your communications with those third parties or your use of
            their products or services (for example, where you follow links to
            third party websites over which be quasi has no control, or you
            purchase goods or services from those third parties).
          </p>
          <p className="medium-font">
            2. About be quasi The Site and our Services are made available by be
            quasi ("Be Quasi", "we", "us, "our"). Be quasi is the data
            controller responsible for your personal data.
          </p>
        </PrivacyPolicyContainer>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default PrivacyPolicy
