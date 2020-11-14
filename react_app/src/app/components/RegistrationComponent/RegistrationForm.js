import React from "react";
import * as yup from "yup";
import { 
  Formik, 
  Field, 
  Form, 
  ErrorMessage 
} from "formik";

const registrationValidation = yup.object().shape({
  first_name: yup.string().required("First name is missing."),
  last_name: yup.string().required("Last name is missing."),
  email: yup.string().email("Enter a valid email.").required("Email is required."),
  password1: yup.string().required("Password is required.").min(5, "Password is too short.It should be 5 chars minimum."),
  password2: yup.string().oneOf([yup.ref("password1"), null], "Password doesn't match.").required("Password confirm is required"),
});

const RegistrationForm = ({ registrationField, doRegistration }) => {
  return (
    <Formik initialValues={registrationField} enableReinitialize={true} validationSchema={registrationValidation}
      onSubmit={(values) => {
        doRegistration(values);
      }}
    >
      {() => (
        <Form>
          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="first_name">First Name*</label>
              <Field className="form-control" id="first_name" name="first_name" type="text"
              />
              <ErrorMessage name="first_name">
                {(error_msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {error_msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="last_name">Last Name*</label>
              <Field className="form-control" id="last_name" name="last_name" type="text"
              />
              <ErrorMessage name="last_name">
                {(error_msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {error_msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="email">Email*</label>
              <Field className="form-control" id="email" name="email" type="email"
              />
              <ErrorMessage name="email">
                {(error_msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {error_msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="password1">Password*</label>
              <Field className="form-control" type="password" id="password1" name="password1"
              />
              <ErrorMessage name="password1">
                {(error_msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {error_msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="password2">Confirm Password*</label>
              <Field className="form-control" type="password" id="password2" name="password2"
              />
              <ErrorMessage name="password2">
                {(error_msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {error_msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;