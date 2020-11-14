import React from "react";

import RegistrationForm from "./RegistrationForm";
import { postRegistration } from "../../api_services/authenticationsAPIService";

const registrationField = {
  first_name: "",
  last_name: "",
  email: "",
  password1: "",
  password2: "",
};

const Registration = (props) => {
  const doRegistration = (values) => {
    const data = {
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      password: values.password2,
    };
    postRegistration(data)
      .then(() => {
        props.history.push("/react_app/userLogin");
        alert("Registration Successfully Completed..");
      })
      .catch(() => {
        alert("Registration failed. Please try again.");
      });
  };
  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <h1 className="mt-4 mb-3">
        Register
        <small>Form</small>
      </h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Register</li>
      </ol>

      <div className="row">
        <div className="col-lg-4 mb-4">
          <RegistrationForm registrationField={registrationField} doRegistration={doRegistration}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;