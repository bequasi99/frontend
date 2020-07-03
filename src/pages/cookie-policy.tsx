import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const CookiePolicyContainer = styled.div`
  position: relative;
  padding: 5% 15% 5% 15%;

  .close {
    color: black;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 15px;
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
            <Link to={closeTo} className="close large-font">
              Close
            </Link>
          ) : (
            <header>
              <h1>Website Title</h1>
            </header>
          )}

          <h2 className="medium-font">Cookie policy</h2>
          <p className="medium-font">
            This Cookie Policy explains how Be Quasi uses cookies and similar
            technologies to recognize you when you visit the website
            https://www.bequasi.com/ (Site). It explains what these
            technologies are and why they are used as well as your rights to
            control the use of them.
            </p>
          <p className="medium-font">
            In some cases, Be Quasi may use
            cookies to collect personal information or that which becomes
            personal information when combined with other information.
          </p>
          <h3 className="medium-font">1. What are cookies?</h3>
          <p className="medium-font">
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work or to work more
            efficiently, as well as to provide reporting information. Cookies
            set by the website owner (in this case, Be Quasi) are called ‘first
            party cookies'. Cookies set by parties other than the website owner
            are called ‘third party cookies'. Third-party cookies enable third
            party features or functionality to be provided on or through the
            website (e.g. like advertising, interactive content and analytics).
            The parties that set these third-party cookies can recognize your
            computer both when it visits the website in question and also when
            it visits certain other websites.
          </p>
          <h3 className="medium-font">2. Why does Be Quasi use cookies?</h3>
          <p className="medium-font">
            Be Quasi uses first and third-party cookies for several reasons.
            Some cookies are required for technical reasons in order for the
            Site to operate and are referred to as ‘essential' or ‘strictly
            necessary' cookies. Other cookies enable tracking and targeting the
            interests of the Site users to enhance the experience on the Site
            and any Online Properties. Third parties serve cookies through the
            Site for advertising, analytics and other purposes. This is
            described in more detail below. The specific types of first and
            third-party cookies served through the Site and the purposes they
            perform are described below (please note that the specific cookies
            served may vary depending on the specific Online Properties you
            visit).
          </p>
          <h3 className="medium-font">3. How can I control cookies?</h3>
          <p className="medium-font">
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie rights by setting your preferences in
            the Cookie Consent Manager. The Cookie Consent Manager allows you to
            select which categories of cookies you accept or reject. Essential
            cookies cannot be rejected as they are strictly necessary to provide
            you with services. The Cookie Consent Manager can be found in the
            notification banner and on the Site. If you choose to reject
            cookies, you may still use the Site though your access to some
            functionality and areas of the Site may be restricted. You may also
            set or amend your web browser controls to accept or refuse cookies.
            As the means by which you can refuse cookies through your web
            browser controls vary from browser-to-browser, you should visit your
            browser's help menu for more information.
          </p>
          <h3 className="medium-font">
            4. Where can I get further information?
          </h3>
          <p className="medium-font">
            If you have any questions about Be Quasi’s use of cookies or other
            technologies, please email: info@bequasi.com
          </p>
        </CookiePolicyContainer>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default CookiePolicy
