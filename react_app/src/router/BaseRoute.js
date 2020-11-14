import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "../app/common/NavBar/NavBar";
import Footer from "../app/common/Footer/Footer";
import Register from "../app/components/RegistrationComponent/RegistrationComponent";
import Login from "../app/components/LoginComponent/LoginComponent";
import Logout from "../app/components/LogoutComponent/LogoutComponent";
import NotFound from "../app/common/NotFound";
import Post from "../app/components/PostComponent/PostComponent";
import PostDetails from "../app/components/PostComponent/pages/PostDetails";

const BaseRoute = () => {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
           <Redirect from="/" exact to="/react_app/posts" />
           <Redirect from="/react_app" exact to="/react_app/posts" />
           <Route path="/react_app/posts" exact component={Post}/>
           <Route path="/react_app/posts/:id" exact component={PostDetails}/>
           <Route path="/react_app/userRegister" component={Register}/>
           <Route path="/react_app/userLogin" component={Login}/>
           <Route path="/react_app/userLogout" component={Logout}/>
          <Route path="/react_app/not-found" exact component={NotFound}/>
          <Redirect to="/react_app/not-found" />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default BaseRoute;