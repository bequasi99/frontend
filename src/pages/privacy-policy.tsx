import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import close from "../images/close.svg"

const PrivacyPolicyContainer = styled.div`
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
            <Link to={closeTo} className="close large-font">
              Close
            </Link>
          ) : (
            <header>
              <h1>Website Title</h1>
            </header>
          )}
          <h2 className="medium-font">Privacy notice</h2>
          <p className="medium-font">
            This Privacy Notice applies to the processing of personal data in
            connection with the Be Quasi website at https://www.bequasi.com
            ('Site'), and all of the goods and services offered, including from
            the Site or other such locations around the world ('Services'). Be
            Quasi respects the privacy of every person who visits the Site or
            uses any Services and is committed to ensuring a safe online
            experience for all.
          </p>
          <h3 className="medium-font">1. Purpose of this privacy notice</h3>
          <p className="medium-font">
            This Privacy Notice explains Be Quasi’s approach to any personal
            data that might be collected from you or obtained about you from a
            third-party and the purposes for which such data is processed. This
            Privacy Notice also sets out your rights in respect of the
            processing of your personal data.
            <br /> <br />
            When Be Quasi talks about 'personal data', this means any
            information relating to an identified or identifiable living
            individual. Individuals might be identified by reference to a name,
            an identification number, location data, an online identifier (such
            as an IP address) or to other factors that are specific to them,
            such as their physical appearance.
            <br /> <br />
            This Privacy Notice informs you of the nature of the personal data
            about you that is processed and how you can request its deletion or
            for it to be updated, transferred or if you would like access to it.
            <br /> <br />
            This Privacy Notice is intended to assist you in making informed
            decisions when using the Site and Services. Please take a moment to
            read and understand it. It should be read in conjunction with the
            Cookie Policy.
            <br /> <br />
            This Privacy Notice only applies to the use of your personal data
            obtained by Be Quasi, whether from you directly or from a third
            party. It does not apply to personal data collected by third parties
            during your communications with those third parties or your use of
            their products or services (for example, where you follow links to
            third party websites over which Be Quasi has no control, or you
            purchase goods or services from those third parties).
          </p>
          <h3 className="medium-font">2. About Be Quasi </h3>
          <p className="medium-font">
            The Site and Services are made available by Be Quasi. Be Quasi is
            the data controller responsible for your personal data.
          </p>
          <h3 className="medium-font">3. How to contact Be Quasi</h3>
          <p className="medium-font">
            If you have any questions about this Privacy Notice or want to
            exercise your rights set out in this Privacy Notice, you can contact
            Be Quasi by: Sending an email to info@bequasi.com
          </p>
          <h3 className="medium-font">
            4. How Be Quasi collects and receives personal data.
          </h3>
          <p className="medium-font">
            Be Quasi collects and receives personal data using different
            methods:
            <br /> <br />
            - Personal data you provide to us You may provide Be Quasi your
            personal data directly. <br /> <br />
            This will be the case when, for example, you contact Be Quasi with
            enquiries or complete forms on the Site, subscribe to receive
            marketing communications or provide feedback. <br /> <br />
            - Personal data Be Quasi collects using cookies and other similar
            technologies. <br /> <br />
            When you access and use the Site, Be Quasi will collect certain
            technical information about your equipment, browsing actions and
            patterns. Be Quasi collects this personal data by using cookies and
            other similar technologies (see Be Quasi’s Cookies Policy). <br />
            <br />
            - Personal data received from third parties. <br /> <br />
            From time to time, Be Quasi will receive personal data about you
            from third parties. Such third parties may include analytics
            providers, payment providers, hotel and transport providers and
            third parties that provide technical services so that Be Quasi can
            operate the Site and provide Services. <br /> <br />
            - Publicly available personal data <br /> <br />
            From time to time Be Quasi may collect personal data about you
            (including your contact details, biography, interests or
            affiliations) from publicly available sources (including open-source
            data sets), media reports or that you or a third party may otherwise
            make publicly available (for example through speeches at events or
            publishing articles or other news stories or posts on social media
            platforms).
          </p>
          <h3 className="medium-font">
            5. Who Be Quasi collects personal data about.
          </h3>
          <p className="medium-font">
            Be Quasi collects and processes personal data from the following
            people: <br /> <br />
            - Site visitors.
            <br /> <br /> If you browse the Site, register for updates on the
            Site, contact Be Quasi with an enquiry through the Site, submit a
            complaint through the Site or use any Services available on the
            Site, your personal data will be collected and processed in
            connection with your interaction.
            <br /> <br />- Customers.
            <br /> <br /> If you buy products or services from Be Quasi,
            personal data in connection with the supply of goods or services to
            you may be collected. <br /> <br /> - Event attendees <br /> <br />
            If you attend a Be Quasi related event, Be Quasi will process
            personal data about you in connection with your attendance at the
            event. For example, Be Quasi may ask you to complete a registration
            or feedback form, or another document relating to such an event.
            <br /> <br />
            - Personnel that work for Be Quasi’s partners and suppliers
            (including subcontractors). <br /> <br /> If you (or your
            organisation) supply products or services to Be Quasi or otherwise
            partner with Be Quasi, Be Quasi may collect and process your
            personal data in connection with the receipt of those products and
            services and/or partnership. This may include personal data included
            in any email or telephone communications or recorded on any document
            relating to an order for the products or services.
            <br /> <br /> - Job applicants. <br /> <br /> If you apply for a job
            with Be Quasi, whether through the Site or otherwise, Be Quasi will
            collect and process your personal data in connection with your
            application.
          </p>
          <h3 className="medium-font">6. Personal data Be Quasi collects</h3>
          <p className="medium-font">
            Be Quasi uses your personal data for the following purposes: <br />
            <br />
            - Fulfilment of Services. <br />
            <br /> Be Quasi collects and maintains personal data that
            you submit for the purpose of supplying Services that you have
            requested from the Site or where Be Quasi contracts with you to
            provide Services. Be Quasi may collect and process your personal
            data whether you are interacting on your own behalf or on behalf of
            any organisation you represent. <br /></br /><br /><br />
            The personal data Be Quasi processes may include your name and
            contact information (such as email address, postal address and
            telephone number) and your payment information (where applicable).
            Be Quasi processes this information so that the supply of Services
            can be fulfilled and to maintain user databases and to keep a record
            of how Services are used.<br /><br />
            <br /><br />
            If you attend a Be Quasi event, Be Quasi will process personal data
            about you which you volunteer in connection with your visit and any
            enquiries you may have. Some Services offered by Be Quasi are also
            subject to separate terms and conditions which will also apply.
            <br /><br />
            <br /><br />
            Be Quasi’s legal basis for processing: It is necessary for Be Quasi
            to use your personal data to perform any obligations in accordance
            with any contract that Be Quasi may have with you, or it is in Be
            Quasi’s legitimate interest or a third party’s legitimate interest
            to use personal data in such a way to ensure that Services are
            provided in an effective, safe and efficient way. <br></br>
            <br /><br /> - Linking to social media sites and interacting with Be
            Quasi’s social media pages <br /><br />
            <br /><br />
            If you click on one of the social media links on the Site or
            otherwise interact with the social media pages such as on Linkedin,
            Instagram or Twitter (including interacting with any
            embedded features on the Site or social media accounts) Be
            Quasi and the relevant social media platform may receive information
            relating to such interaction and may share your personal data in
            connection with this purpose. For more information about how Be
            Quasi uses this personal data, please see the Insight and Analysis
            section below.<br /><br />
            <br /><br />
            Please note that Be Quasi is a joint controller with the relevant
            social media platform in respect of the personal data used which is
            collected via your use of any Be Quasi social media pages. Your
            personal data may be used by the relevant social media platform for
            additional purposes. For details of how the relevant social media
            platform uses your personal data, please see the privacy policy of
            the relevant social media platform. 
            <br /><br />
            <br /><br />
            Be Quasi’s legal basis for processing: It is in Be Quasi’s
            legitimate interest or a third party’s legitimate interest to use
            personal data in such a way to ensure that the Site and Services are
            provided in an effective way and to promote the Site and Services
            via social media. <br /><br />
            <br /><br /> - Customer service and general enquiries
            <br /><br />
            <br /><br />
            The Site features a “Get in touch to find out more” page which
            invites you to submit general enquiries about the Site or Services
            by email.<br /><br />
            <br /><br />
            When you make an enquiry, Be Quasi will collect and process your
            name, contact information (including email address) and any other
            personal data that is relevant to your enquiry. Be Quasi uses this
            information to manage and respond to your enquiry.<br /><br />
            <br /><br />
            Be Quasi’s legal basis for processing: It is in Be Quasi’s
            legitimate interest to use your personal data in the ways described
            above to ensure aiding you with your enquiry and providing a good
            standard of service to you.<br /><br />
            <br /><br />
            - Hosting and managing events<br /><br />
            <br /><br />
            From time to time, Be Quasi may organise and host events. Be Quasi
            may process your name and contact information to communicate with
            you about such events where you have specifically requested
            information about such events or where another lawful basis for
            sending that information to you is apparent.<br /><br />
            <br /><br />
            If you attend a Be Quasi event, unless otherwise agreed, Be Quasi
            may use your personal data to record your attendance at the event
            and for related record-keeping purposes and, if relevant, may
            collect and process any dietary requirements you may have. You may
            also feature in photographs taken at events and, unless agreed
            otherwise, such photographs may appear in publications that Be Quasi
            makes available.<br /><br />
            <br /><br />
            Be Quasi’s legal basis for processing: It is necessary for Be Quasi
            to use your personal data in this way to perform obligations in
            accordance with any contract with you where you have signed up to
            attend an event, or it is in Be Quasi’s legitimate interest or a
            third party’s legitimate interest to use personal data in such a way
            to ensure that the event is operated in an effective way. <br /><br />
            <br /><br />
            Be Quasi may specifically ask your permission to use your
            photographs, quotes, testimonials, or other content that you make
            available or publish at the event. Where this is the case, any
            processing of your personal data will be based on consent. <br /><br />
            <br /><br />- Email and. SMS/MMS marketing activities.<br /><br />
            <br /><br />
            Be Quasi may use your name and email address to send you (or the
            organisation you represent) marketing communications by email. Be
            Quasi may use your mobile telephone number to send you marketing
            communications by SMS/MMS. Be Quasi’s email and SMS/MMS marketing
            communications might include press releases, information, thought
            pieces, articles and details for events, as well as general
            information about Be Quasi, the Site, the Services provided, and the
            events offered.<br /><br /> <br /><br />
            Be Quasi may share your personal information with a variety of email
            or text message marketing providers (including MailChimp) who assist
            in delivering email marketing campaigns, newsletters, event invites
            and other mass emails or text messages to you.<br /><br /> <br /><br />
            Be Quasi’s legal basis for processing: Where data that Be Quasi
            processes are anonymised, Be Quasi does not require a legal basis to
            use it as the information does not constitute personal data.
            However, Be Quasi’s collection and use of such anonymised
            information may be subject to other laws where your consent is
            required. Please see the Cookie Policy for further details.<br /><br />{" "}
            <br /><br />
            Where your personal data is not in an anonymous form (for example,
            your email address), it is in Be Quasi’s legitimate interest to use
            your personal data for marketing purposes.<br /><br /> <br /><br />
            Be Quasi will only send you marketing communications by email where
            you have consented to receive such communications, or where another
            lawful right to send such communications exists. <br /><br />
            <br /><br />- Recruitment<br /><br /> <br /><br />
            Be Quasi uses your personal data for recruitment purposes, in
            particular, to assess your suitability for any of our positions that
            you apply for, whether such application has been received online, by
            email or by hard copy and whether submitted directly by you or by a
            third party recruitment agency on your behalf. Be Quasi also uses
            your personal data to communicate with you about the recruitment
            process, to keep records about recruitment processes and to comply
            with legal and regulatory obligations in relation to recruitment.
            <br /><br /> <br /><br />
            Be Quasi will process any personal data about you that you
            volunteer, including during an interview when you apply for an
            employment or other type of position. Be Quasi may also process your
            personal data obtained from any third parties in relation to
            recruitment activities, including without limitation, recruitment
            agencies, background check providers, credit reference agencies and
            your referees. <br /><br /> <br /><br />
            The personal data Be Quasi processes may include your name and
            contact information (including your email address, postal address
            and telephone number), details of your education, qualifications and
            employment history, any other personal data which appears in your
            curriculum vitae or application, any personal data that you
            volunteer during an interview or other interactions, or any personal
            data which is contained in any reference about you. Such information
            may also include special categories of personal data (such as
            information about your health, any medical conditions and your
            health and sickness records) and information relating to criminal
            convictions and offences if that information is relevant to the role
            you are applying for. <br /><br /> <br /><br />
            Be Quasi also uses your personal data for the purposes of reviewing
            the Be Quasi equal opportunity profile in accordance with applicable
            legislation. Be Quasi does not discriminate on the grounds of
            gender, race, ethnic origin, age, religion, sexual orientation,
            disability or any other basis covered by local legislation. All
            employment-related decisions are made entirely on merit. <br /><br />
            <br /><br />
            Be Quasi’s legal basis for processing: Where Be Quasi uses your
            personal data in connection with recruitment, it will be in
            connection with taking steps at your request to enter into a
            contract with you or it is in Be Quasi’s legitimate interest to use
            personal data in such a way to ensure that the best recruitment
            decisions can be made. <br /><br /> <br /><br />
            Be Quasi will not process any special (or sensitive) categories of
            personal data or personal data relating to criminal convictions or
            offences except where able to do so under applicable legislation or
            with your explicit consent. <br /><br /> <br /><br />- Receipt of services
            from suppliers <br /><br /> <br /><br />
            If Be Quasi engages you or the organisation you represent to provide
            products or services (for example, if you or the organisation you
            represent provide Be Quasi with services such as IT support,
            production, artwork or financial advice), Be Quasi will collect and
            process your personal data in order to manage the relationship with
            you or the organisation you represent, to receive products and
            services from you or the organisation you represent and, where
            relevant, to provide Be Quasi Services to others.<br /><br /> <br /><br />
            The personal data Be Quasi collects from you may include your name,
            job title, contact information (including email address, telephone
            number and postal address), bank account or other payment details
            and any other personal data you volunteer which is relevant to a
            relationship with you or the organisation you represent.<br /><br />
            <br /><br />
            Be Quasi’s legal basis for processing: It is necessary for Be Quasi
            to use your personal data to perform any obligations in accordance
            with any contract with you or it is in Be Quasi’s legitimate
            interest to use personal data in such a way to ensure an effective
            working relationship with you or the organisation you represent and
            are able to receive the services that you or your organisation
            provides and provide Services to others, in an effective way.
            <br /><br /> <br /><br />
            Any other purposes for which Be Quasi wishes to use your personal
            data that are not listed above, or any other changes Be Quasi
            proposes to make to the existing purposes, will be notified to you
            using the contact details held for you.
          </p>
          <h3 className="medium-font">
            7. If you fail to provide your personal data
          </h3>
          <p className="medium-font">
            Where Be Quasi is required by law to collect your personal data, or
            where Be Quasi needs to collect your personal data under the terms
            of a contract with you, and you fail to provide that personal data
            when it is requested, Be Quasi may not be able to perform the
            current contract or the contract being formed with you. This may
            apply where you do not provide the personal data needed in order to
            provide the Services you have requested or to process an application
            for employment. In this case, Be Quasi may have to cancel your
            application or the provision of the relevant Services to you, in
            which case you will be notified.
          </p>
          <h3 className="medium-font">8. How Be Quasi obtains your consent</h3>
          <p className="medium-font">
            Where Be Quasi’s use of your personal data requires consent, you can
            provide or withdraw such consent: <br /><br /> <br /><br />- at the time
            Be Quasi collects your personal data following the instructions
            provided; or <br /><br />- by informing Be Quasi using the contact
            details set out in the “How to contact” section above.
          </p>
          <h3 className="medium-font">
            9. Be Quasi’s use of cookies and similar technologies
          </h3>
          <p className="medium-font">
            The Site may use certain cookies, web beacons, pixel tags, log files
            and other technologies. Please see the Cookie Policy to find out
            more about the cookies and other similar technologies used by Be
            Quasi, the purposes for which Be Quasi uses them and how to manage,
            block or delete them.
          </p>
          <h3 className="medium-font">10. Third-party links and services</h3>
          <p className="medium-font">
            This Privacy Notice does not apply to your interaction with the
            services provided by third parties.<br /><br />
            <br /><br />
            The Site may contain links to third-party websites and services.
            <br /><br />
            <br /><br />
            When you use a link to go from the Site to another website (even if
            you don’t leave the Site) or you request a service from a third
            party, this Privacy Notice shall not apply to the processing of your
            personal data carried out by the relevant third-party provider.
            <br /><br />
            <br /><br />
            Your browsing and interactions on any other websites, or your
            dealings with any other third-party service provider, is subject to
            that website’s or third-party service provider’s own rules and
            policies. For example, if the Be Quasi website invites you to view
            videos on platforms such as Vimeo. When you click on the links
            provided by Be Quasi to such platforms, you will be transferred from
            the Be Quasi website to the relevant platform and the privacy notice
            (and other terms and conditions) of that platform will apply to you.
            <br /><br />
            <br /><br />
            Be Quasi does not monitor, control or endorse the privacy practices
            of any third parties.
            <br /><br />
            <br /><br />
            Be Quasi encourages you to become familiar with the privacy
            practices of every website you visit or third-party service provider
            that you use in connection with your interaction with Be Quasi and
            to contact them if you have any questions about their respective
            privacy notices and practices. <br /><br />
            <br /><br />
            This Privacy Notice applies solely to personal data processed by Be
            Quasi through your use of the Site, your receipt of Services and/or
            in connection with Be Quasi operations. It does not apply to the
            processing of your personal data by these third-party websites and
            third-party service providers.
          </p>
          <h3 className="medium-font">11. Sharing personal data</h3>
          <p className="medium-font">
            Be Quasi will only share personal data with others when legally
            permitted to do so. When Be Quasi shares personal data with others,
            Be Quasi puts contractual arrangements and security mechanisms in
            place to protect the personal data shared and to comply with data
            protection, confidentiality and security standards and obligations.
            <br /><br />
            <br /><br />
            When processing your personal data, Be Quasi may need to share it
            with third parties (including other entities) as follows:<br /><br />
            <br /><br />- Third-party organisations that provide
            applications/functionality, data processing or IT services: Be Quasi
            shares personal data with third parties who support in providing
            Services and help provide, run and manage any internal IT systems.
            Such third parties may include, for example, providers of
            information technology, cloud-based software as a service provider,
            identity management, website hosting and management, data analysis,
            data back-up, security and storage services. The servers powering
            and facilitating that cloud infrastructure are located in secure
            data centres around the world, and personal data may be stored in
            any one of them. Be Quasi also shares your personal data with
            third-party service providers to assist with insight analytics.
            <br /><br />
            <br /><br />- Payment providers and banks: Be Quasi shares personal
            data with third parties who assist with the processing of payments
            and refunds. <br /><br />
            <br /><br />- Event partners and suppliers: When Be Quasi runs events,
            your personal data will be shared with third-party service providers
            that are assisting with the operation and administration of that
            event. If Be Quasi is running an event in partnership with other
            organisations, your personal data will be shared with such
            organisations for use in relation to the event.<br /><br />
            <br /><br />- Third-party email marketing and CRM specialists: Be Quasi
            shares personal data with specialist suppliers who assist in
            managing marketing databases and sending out email marketing
            communications and other related communications. <br /><br />
            <br /><br />- Recruitment agencies and related organisations: Be Quasi
            shares personal data with external recruiters, third-party providers
            that undertake background checks. <br /><br />
            <br /><br />- Auditors, lawyers, accountants and other professional
            advisers: Be Quasi shares personal data with professional services
            firms who advise and assist in relation to lawful and effective
            management and in relation to any disputes Be Quasi may potentially
            become involved in. <br /><br />
            <br /><br />- Law enforcement or other government and regulatory
            agencies and bodies: Be Quasi shares personal data with law
            enforcement or other government and regulatory agencies or other
            third parties as required by, and in accordance with, applicable law
            or regulation. <br /><br />
            <br /><br />- Sharing with other third parties: Occasionally, Be Quasi
            may receive requests from third parties with authority to obtain
            disclosure of personal data, such as to check compliance with
            applicable law and regulation, to investigate an alleged crime, or
            to establish, exercise or defend legal rights. Be Quasi will only
            fulfil requests for personal data where permitted to do so in
            accordance with applicable law or regulation.
          </p>
          <p className="medium-font">
            This list is non-exhaustive and there may be circumstances where Be
            Quasi needs to share personal data with other third parties in order
            to operate the Site and to provide Services.
          </p>
          <h3 className="medium-font">
            12. Transfers outside the European Economic Area (“EEA”)
          </h3>
          <p className="medium-font">
            Where necessary in order to operate the Site and to otherwise
            deliver Services, Be Quasi will transfer personal data to countries
            outside the EEA.
          </p>
          <p className="medium-font">
            Non-EEA countries do not have the same data protection laws as the
            EEA. In particular, non-EEA countries may not provide the same
            degree of protection for your personal data, may not give you the
            same rights in relation to your personal data and may not have a
            data protection supervisory authority to help you if you have any
            concerns about the processing of your personal data. However, when
            transferring your personal data outside the EEA, Be Quasi will
            comply with legal and regulatory obligations in relation to your
            personal data, including having a lawful basis for transferring
            personal data and putting appropriate safeguards in place to ensure
            an adequate level of protection for the personal data.
          </p>
          <p className="medium-font">
            Be Quasi will take reasonable steps to ensure the security of your
            personal data in accordance with applicable data protection laws.
          </p>
          <p className="medium-font">
            When transferring your personal data outside the EEA, Be Quasi will
            ensure that, where required by applicable law, at least one of the
            following safeguards is implemented:
          </p>
          <p className="medium-font">
            - Adequacy decisions: Be Quasi will only transfer your personal data
            to countries that have been deemed to provide an adequate level of
            protection for personal data by the European Commission. For further
            details, see
            https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en. 
            <br /><br />
            <br /><br />- Model clauses: Where certain service providers are used,
            Be Quasi may use specific contracts approved by the European
            Commission which give personal data the same protection it has in
            Europe. For further details, see
            https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/model-contracts-transfer-personal-data-third-countries_en
            <br /><br />
            <br /><br />
            EU-U.S. Privacy Shield: Where Be Quasi has partners or suppliers
            based in the US, data may be transferred to them if they are part of
            the Privacy Shield which requires them to provide similar protection
            to personal data shared between Europe and the US. For further
            details, see
            https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/eu-us-privacy-shield_en.
          </p>
          <p className="medium-font">
            Please get in touch if you would like further information on the
            specific mechanisms used by when transferring your personal data
            outside the EEA.
          </p>
          <h3 className="medium-font">
            13. How long Be Quasi keeps your personal data
          </h3>
          <p className="medium-font">
            In respect of personal data processed in connection with the supply
            of Services, Be Quasi may retain your personal data for up to six
            years from the date of supply of the relevant Services and in
            compliance with data protection obligations. Be Quasi may then
            destroy such files without further notice or liability. <br /><br />
            <br /><br />
            In respect of any other personal data that is processed, Be Quasi
            will retain relevant personal data for up to three years from the
            date of a most recent interaction with you and in compliance with
            any data protection obligations. Be Quasi may then destroy such
            files without further notice or liability. <br /><br />
            <br /><br />
            If any personal data is only useful for a short period (e.g. for a
            specific event or marketing campaign or in relation to recruitment),
            Be Quasi will not retain it for longer than the period for which it
            is used. <br /><br />
            <br /><br />
            If you have opted out of receiving marketing communications, Be
            Quasi will need to retain certain personal data on a suppression
            list indefinitely as to ensure not sending you further marketing
            communications in the future.
          </p>
          <h3 className="medium-font">
            14. Confidentiality and security of your personal data
          </h3>
          <p className="medium-font">
            Be Quasi is committed to keeping the personal data you provide
            secure and will take reasonable precautions to protect your personal
            data from loss, misuse or alteration. <br></br>
            <br></br>
            Be Quasi has implemented information security policies, rules and
            technical measures to protect personal data from:<br></br>
            <br></br>- unauthorised access; <br></br>- <br></br>improper use or
            disclosure; <br></br> - unauthorised modification;<br></br> - and
            unlawful destruction or accidental loss.
          </p>
          <p className="medium-font">
            All data processors (i.e. those who process your personal data on Be
            Quasi’s behalf, for the purposes listed above) who have access to
            and are associated with the processing of personal data are obliged
            to respect the confidentiality of the personal data of all users of
            the Site and Services.
          </p>
          <h3 className="medium-font">15. Personal data of children</h3>
          <p className="medium-font">
            Be Quasi does not specifically target the Site or Services at
            children. However, due to the nature of the Services provided, Be
            Quasi may from time to time collect and process personal data
            relating to individuals under the age of 18. Be Quasi will comply
            with all applicable laws and regulations relating to the processing
            of personal data of minors.
          </p>
          <h3 className="medium-font">
            16. How to access your information and your other rights
          </h3>
          <p className="medium-font">
            You have the following rights in relation to the personal data held
            about you. If you would like to exercise any of these rights, please
            make contact using the details set out on the Contact page. <br /><br />
            <br /><br /> - Your right to access. <br /><br /><br /><br />
            If you ask, Be Quasi will confirm whether your personal data is
            being processed and, if so, provide you with a copy of that personal
            data (along with certain other details). If you require additional
            copies, Be Quasi may charge a reasonable fee for producing those
            additional copies. <br /><br /><br /><br /> - Your right to rectification. <br /><br />
            <br /><br /> If the personal data held about you is inaccurate or incomplete, you
            are entitled to have it rectified. If Be Quasi has shared your
            personal data with others, they will be informed of the
            rectification where possible. If you ask, where possible and lawful
            to do so, Be Quasi will tell you who your personal data has been
            shared with so that you can contact them directly. <br /><br /><br /><br /> - Your
            right to erasure. <br /><br /><br /><br />
            You can ask Be Quasi to delete or remove your personal data in some
            circumstances, such as where it is no longer needed or where you
            withdraw your consent (where applicable). If your personal data has
            been shared with others, they will be informed about the erasure
            where possible. If you ask, where it is possible and lawful to do
            so, you will be informed of who your personal data has been shared
            with so that you can contact them directly. <br /><br /><br /><br /> - Your right to
            restrict processing. <br /><br /><br /><br />
            You can ask Be Quasi to ‘block’ or suppress the processing of your
            personal data in certain circumstances such as where you contest the
            accuracy of that personal data or you object to it being processing
            it for a particular purpose. This may not mean that Be Quasi will
            stop storing your personal data but, where it is kept, you will be
            informed of any restriction placed on your personal data is removed
            to stop us processing it further. If your personal data has been
            shared with others, they will be informed about the restriction
            where it is possible. If you ask, where it is possible and lawful,
            Be Quasi will also tell you who your personal data is shared with so
            that you can contact them directly. <br /><br /><br /><br /> - Your right to data
            portability. <br /><br /><br /><br />
            You have the right, in certain circumstances, to obtain personal
            data you have provided (in a structured, commonly used and
            machine-readable format) and to reuse it elsewhere or to ask for Be
            quasi to transfer it to a third party of your choice. <br /><br />
            <br /><br /> - Your right to object. <br /><br />
            <br /><br />
            You can ask Be Quasi to stop processing your personal data, and Be
            Quasi will do so, if:<br /><br />
            <br /><br />- Be Quasi relies on Be Quasi’s own or someone else’s
            legitimate interest to process your personal data, except if Be
            Quasi can demonstrate compelling legal grounds for the processing;
            or<br /><br />
            <br /><br />- Processing your personal data for the purposes of direct
            marketing.<br /><br />
            <br /><br />- Your rights in relation to automated decision-making and
            profiling <br /><br />
            <br /><br />
            You have the right not to be subject to a decision when it is based
            on automatic processing, including profiling, if it produces a legal
            effect or similarly significantly affects you, unless such profiling
            is necessary for the entering into, or the performance of, a
            contract between you and Be Quasi.<br /><br />
            <br /><br />- Your right to withdraw consent. <br /><br /><br /><br /> If Be Quasi
            relies on your consent (or explicit consent) as the legal basis for
            processing your personal data, you have the right to withdraw that
            consent at any time. You can exercise your right of withdrawal by
            contacting Be Quasi using the contact details in the “Get in touch”
            section above or by using any other opt-out mechanism provided, such
            as an unsubscribe link in an email.
            If you have a concern about any aspect of Be Quasi’s privacy
            practices, including the way Be Quasi has handled your personal
            data, please make contact using the contact details provided in the
            “How to contact us” section. You can also report any issues or
            concerns to a national supervisory authority in the Member State of
            your residence or the place of the alleged infringement. You can
            find a list of contact details for all EU supervisory authorities
            at:
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
            As Be Quasi is UK-based, the regulatory authority is
            https://ico.org.uk.
          </p>
          <h3 className="medium-font">17. Changes to this privacy notice</h3>
          <p className="medium-font">
            Be Quasi may make changes to this Privacy Notice from time to time
            <br /><br />
            To ensure that you are always aware of how Be Quasi uses your
            personal data, Be Quasi will update this Privacy Notice from time to
            time to reflect any changes or proposed changes to the use of your
            personal data. Be Quasi may also make changes to comply with changes
            in applicable law or regulatory requirements. <br /><br />
            Be Quasi will notify you by e-mail of any significant changes to
            this Privacy Notice. However, Be Quasi encourages you to review this
            Privacy Notice periodically to be informed of how your personal data
            is used.<br /><br />
            <br /><br /> Last updated April 2020 
          </p>
        </PrivacyPolicyContainer>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default PrivacyPolicy
