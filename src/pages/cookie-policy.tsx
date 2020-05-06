import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const CookiePolicyContainer = styled.div`
  position: relative;
  padding-right: 5%;

  .close {
    color: black;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
  }

  h2,
  h3,
  p {
    margin-bottom: 30px;
  }
`

const CookiePolicy = () => {
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <CookiePolicyContainer>
          {modal ? (
            <Link to={closeTo} className="close medium-font">
              Close
            </Link>
          ) : (
            <header>
              <h1>Website Title</h1>
            </header>
          )}

          <h2 className="medium-font">Cookie policy</h2>
          <p className="medium-font">
            This Cookie Policy explains how Bequasi ("Company", "we", "us", and
            "our") uses cookies and similar technologies to recognize you when
            you visit our websites at https://bequasi.com/, ("Websites"). It
            explains what these technologies are and why we use them, as well as
            your rights to control our use of them.
          </p>
          <p className="medium-font">
            In some cases we may use cookies to collect personal information, or
            that becomes personal information if we combine it with other
            information.
          </p>
          <h3 className="medium-font">What are cookies?</h3>
          <p className="medium-font">
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information. Cookies
            set by the website owner (in this case,Bequasi) are called "first
            party cookies". Cookies set by parties other than the website owner
            are called "third party cookies". Third party cookies enable third
            party features or functionality to be provided on or through the
            website (e.g. like advertising, interactive content and analytics).
            The parties that set these third party cookies can recognize your
            computer both when it visits the website in question and also when
            it visits certain other websites.
          </p>
          <h3 className="medium-font">Why do we use cookies?</h3>
          <p className="medium-font">
            We use first and third party cookies for several reasons. Some
            cookies are required for technical reasons in order for our Websites
            to operate, and we refer to these as "essential" or "strictly
            necessary" cookies. Other cookies also enable us to track and target
            the interests of our users to enhance the experience on our Online
            Properties. Third parties serve cookies through our Websites for
            advertising, analytics and other purposes. This is described in more
            detail below. The specific types of first and third party cookies
            served through our Websites and the purposes they perform are
            described below (please note that the specific cookies served may
            vary depending on the specific Online Properties you visit):
          </p>
          <h3 className="medium-font">How can I control cookies?</h3>
          <p className="medium-font">
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie rights by setting your preferences in
            the Cookie Consent Manager. The Cookie Consent Manager allows you to
            select which categories of cookies you accept or reject. Essential
            cookies cannot be rejected as they are strictly necessary to provide
            you with services. The Cookie Consent Manager can be found in the
            notification banner and on our website. If you choose to reject
            cookies, you may still use our website though your access to some
            functionality and areas of our website may be restricted. You may
            also set or amend your web browser controls to accept or refuse
            cookies. As the means by which you can refuse cookies through your
            web browser controls vary from browser-to-browser, you should visit
            your browser's help menu for more information.
          </p>
          <h3 className="medium-font">Where can I get further information?</h3>
          <p className="medium-font">
            If you have any questions about our use of cookies or other
            technologies, please email us at timmillern@gmail.com
          </p>
        </CookiePolicyContainer>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default CookiePolicy
