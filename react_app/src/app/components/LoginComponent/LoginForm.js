import React from "react";
import * as yup from "yup";
import {
    Formik,
    Field,
    Form,
    ErrorMessage
} from "formik";

const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required")
});

const LoginForm = ({ loginField, doLogin }) => {
  return (
    <Formik initialValues={loginField} enableReinitialize={true} validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        doLogin(values);
      }}
    >
      {() => (
        <Form>
          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="email">Email*</label>
              <Field className="form-control" id="email" name="email" type="email"/>
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
              <label htmlFor="password">Password*</label>
              <Field className="form-control" type="password" id="password" name="password"/>
              <ErrorMessage name="password">
                {(error_msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {error_msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;