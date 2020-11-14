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
           <Redirect from="/" exact to="/react/posts" />
           <Redirect from="/react" exact to="/react/posts" />
           <Route path="/react/posts" exact component={Post}/>
           <Route path="/react/posts/:id" exact component={PostDetails}/>
           <Route path="/react/register" component={Register}/>
           <Route path="/react/login" component={Login}/>
           <Route path="/react/logout" component={Logout}/>
          <Route path="/react/not-found" exact component={NotFound}/>
          <Redirect to="/react/not-found" />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default BaseRoute;