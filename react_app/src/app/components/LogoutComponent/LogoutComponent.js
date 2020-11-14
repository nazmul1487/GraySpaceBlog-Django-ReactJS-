import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div
      className="container"
      style={{ minHeight: "100vh", paddingTop: "200px", marginLeft:"250px"}}
    >
      <h2>You have been logged out.</h2>
      <div className="border-top pt-3">
        <p style={{color:"red"}}> Do you want to Login Again?
          <Link className="btn btn-primary" style={{marginLeft:"10px"}} to="/react/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Logout;