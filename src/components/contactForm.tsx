import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import arrow from "../images/arrow-2.svg"
import smile from "../images/smile.svg"
import Footer from "../components/footer"

const FormDiv = styled.div`
  form {
    margin: 25px 0;
  }

  legend,
  label {
    display: none;
  }

  .input-field {
    width: 100%;
    margin-bottom: 8px;

    @media ${props => props.theme.breakpoint.md} {
      margin-bottom: 12px;
    }

    @media ${props => props.theme.breakpoint.xl} {
      margin-bottom: 18px;
    }
  }

  .input {
    border: 1px solid ${props => props.theme.colors.form};
    background-color: ${props => props.theme.colors.form};
    color: ${props => props.theme.colors.white};
    width: 100%;
    border: none;
    padding: 10px 15px 10px 15px;

    @media ${props => props.theme.breakpoint.md} {
      padding: 15px 15px 15px 15px;
    }

    @media ${props => props.theme.breakpoint.xl} {
      padding: 20px 15px 20px 15px;
    }
  }

  .input:hover,
  .input:focus {
    border: 1px solid ${props => props.theme.colors.formHover};
    background-color: ${props => props.theme.colors.formHover};
  }

  .textarea {
    border: 1px solid ${props => props.theme.colors.form};
    background-color: ${props => props.theme.colors.form};
    color: ${props => props.theme.colors.white};
    width: 100%;
    border: none;
    height: 100px;
    padding: 10px 15px 10px 15px;
    resize: none;

    @media ${props => props.theme.breakpoint.md} {
      height: 200px;
      padding: 15px 15px 15px 15px;
    }

    @media ${props => props.theme.breakpoint.lg} {
      height: 250px;
    }

    @media ${props => props.theme.breakpoint.xl} {
      padding: 20px 15px 20px 15px;
    }
  }

  .input[error],
  .textarea[error] {
    border: 1px solid ${props => props.theme.colors.error};
  }

  .input::placeholder,
  .textarea::placeholder {
    color: ${props => props.theme.colors.grey};
  }

  .input:hover::placeholder,
  .textarea:hover::placeholder,
  .input:focus::placeholder,
  .textarea:focus::placeholder {
    color: ${props => props.theme.colors.white};
  }

  .textarea:hover,
  .textarea:focus {
    border: 1px solid ${props => props.theme.colors.formHover};
    background-color: ${props => props.theme.colors.formHover};
  }

  .submit {
    color: ${props => props.theme.colors.yellow};
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.5s ease;

    img {
      height: 100%;
      margin-left: 10px;
      transform: scale(0.8);
      position: relative;
      top: 2px;

      @media ${props => props.theme.breakpoint.md} {
        margin-left: 20px;
        transform: scale(1.3);
        top: 0;
      }
    }
  }

  .submit:hover {
    color: ${props => props.theme.colors.yellowHover};
    opacity: 0.6;
  }
`

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Full name field is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email field is required"),
  message: Yup.string().required("Message field is required"),
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  return (
    <div id="contactForm">
      <div className="item">
        <FormDiv>
          <h2 className="large-font">
            <u>be quasi</u> activities can work for you.
            <br />
            Get in touch to find out more
          </h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
              success: false,
              nosend: false,
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { setSubmitting, setFieldValue, resetForm }) => {
              fetch("https://backend-nine.now.sh/contact?no-cache=1", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact-form", ...values }),
              })
                .then(() => {
                  setFieldValue("success", true)

                  setTimeout(function() {
                    resetForm()
                  }, 3000)
                })
                .catch(() => {
                  setFieldValue("nosend", true)
                })
                .finally(() => setSubmitting(false))
            }}
          >
            {({ values, errors, touched }) => (
              <Form name="contact-form" method="post">
                <legend>Contact Form</legend>
                <div className="input-field">
                  <label htmlFor="name">Name</label>
                  <Field
                    name="name"
                    placeholder="Name"
                    className="input medium-font"
                    error={touched.name && errors.name}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    placeholder="Email"
                    className="input medium-font"
                    error={touched.email && errors.email}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="message">Message</label>
                  <Field
                    name="message"
                    placeholder="How can we help?"
                    component="textarea"
                    className="textarea medium-font"
                    error={touched.message && errors.message}
                  />
                </div>
                <div className="input-field">
                  {!values.success && (
                    <button type="submit" className="large-font submit">
                      Send Message
                      <img src={arrow} alt="submit" />
                    </button>
                  )}
                  {values.success && (
                    <div className="large-font submit">
                      Message Sent
                      <img src={smile} alt="smile" />
                    </div>
                  )}
                </div>
                {values.nosend && (
                  <div>
                    <p>OOPS, something went wrong but we know about it.</p>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </FormDiv>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ContactForm
