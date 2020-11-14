import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { verifyToken } from "../../api_services/authenticationsAPIService";

const handleLogout = () => {
  localStorage.setItem("accessToken", null);
  window.location.href = "/react_app/userLogout";
};

const NavBar = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const data = {
      token,
    };
    verifyToken(data)
      .then(() => {
        setAuthenticate(true);
      })
      .catch(() => {
        setAuthenticate(false);
      });
  }, [token, authenticate]);

  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/react_app">
        Example Blog
      </Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="responsive-navbar-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/react_app/posts">
              Posts
            </NavLink>
          </li>

          {authenticate === true && (
            <li className="nav-item">
              <Link className="nav-link" to="/react_app/userLogout" onClick={() => handleLogout()}>
                Logout
              </Link>
            </li>
          )}

          {authenticate === false && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/react_app/userLogin">
                Login
              </NavLink>
            </li>
          )}

          {authenticate === false && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/react_app/userRegister">
                Register
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;