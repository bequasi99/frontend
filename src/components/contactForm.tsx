import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import Footer from "../components/footer"

const FormDiv = styled.div`
  form {
    margin-top: 20px;
  }

  legend {
    display: none;
  }

  label {
    position: absolute;
    z-index: -1;
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
      height: 150px;
      padding: 15px 15px 15px 15px;
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

    .svg-holder {
      display: inline-block;
      position: relative;
      margin-left: 10px;
      width: 25px;

      @media ${props => props.theme.breakpoint.md} {
        width: 30px;
      }

      @media ${props => props.theme.breakpoint.lg} {
        width: 55px;
      }
    }

    svg {
      display: block;
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
            <u>be quasi</u> activities can work for you. Get in touch to find
            out more. 
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
                    id="name"
                    placeholder="Name"
                    className="input medium-font"
                    error={touched.name && errors.name}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="input medium-font"
                    error={touched.email && errors.email}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="message">Message</label>
                  <Field
                    name="message"
                    id="message"
                    placeholder="Type your message in here..."
                    component="textarea"
                    className="textarea medium-font"
                    error={touched.message && errors.message}
                  />
                </div>
                <div className="input-field">
                  {!values.success && (
                    <button type="submit" className="large-font submit">
                      Send message
                      <div className="svg-holder">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.7243 0H24V7.27572L23.3745 7.86831L20.6749 5.16872L1.87654 24L0 22.0576L18.7654 3.29218L16.1317 0.625515L16.7243 0Z"
                            fill="#F8A2FA"
                          />
                        </svg>
                      </div>
                    </button>
                  )}
                  {values.success && (
                    <div className="large-font submit">
                      Message sent
                      <div className="svg-holder">
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM13.5 18C14.3284 18 15 15.9853 15 13.5C15 11.0147 14.3284 9 13.5 9C12.6716 9 12 11.0147 12 13.5C12 15.9853 12.6716 18 13.5 18ZM22.5 18C23.3284 18 24 15.9853 24 13.5C24 11.0147 23.3284 9 22.5 9C21.6716 9 21 11.0147 21 13.5C21 15.9853 21.6716 18 22.5 18ZM9.75 21.0011C9.75 21.0006 9.75 21.0001 10.5 21.0001C11.25 21.0001 11.25 20.9997 11.25 20.9993L11.2501 21.0022C11.2502 21.0084 11.2505 21.0199 11.2512 21.0363C11.2526 21.0692 11.2555 21.1218 11.2617 21.1913C11.2741 21.3304 11.2995 21.5357 11.3514 21.7847C11.4557 22.2851 11.6634 22.9464 12.0735 23.6026C12.8643 24.8679 14.4899 26.2501 18 26.2501C21.5101 26.2501 23.1357 24.8679 23.9265 23.6026C24.3366 22.9464 24.5443 22.2851 24.6486 21.7847C24.7004 21.5357 24.7259 21.3304 24.7383 21.1913C24.7445 21.1218 24.7474 21.0692 24.7488 21.0363C24.7495 21.0199 24.7498 21.0084 24.7499 21.0022L24.75 20.9993C24.75 20.9997 24.75 21.0001 25.5 21.0001C26.25 21.0001 26.25 21.0006 26.25 21.0011L26.25 21.0023L26.25 21.0049L26.2499 21.0119L26.2496 21.0325C26.2493 21.049 26.2487 21.0712 26.2475 21.0987C26.2452 21.1537 26.2408 21.2301 26.2324 21.3247C26.2155 21.5136 26.1824 21.7771 26.117 22.0906C25.9869 22.7152 25.7259 23.5539 25.1985 24.3976C24.1143 26.1323 21.9899 27.7501 18 27.7501C14.0101 27.7501 11.8857 26.1323 10.8015 24.3976C10.2741 23.5539 10.0131 22.7152 9.88295 22.0906C9.81764 21.7771 9.78449 21.5136 9.76762 21.3247C9.75917 21.2301 9.75477 21.1537 9.75248 21.0987C9.75133 21.0712 9.75071 21.049 9.75038 21.0325L9.75006 21.0119L9.75001 21.0049L9.75 21.0023L9.75 21.0011Z"
                            fill="#F8A2FA"
                          />
                        </svg>
                      </div>
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
