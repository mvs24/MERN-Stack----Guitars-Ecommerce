import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./components/Home";
import RegisterLogin from "./components/Register_Login/index";
import Register from "./components/Register_Login/Register";
import UserDashboard from "./components/User";
import Auth from "./hoc/Auth";
import Shop from './components/Shop'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/user/dashboard" component={Auth(UserDashboard, true)} />
          <Route path="/register-login" exact component={Auth(RegisterLogin, false)} />
          <Route path="/" exact component={Auth(Home, false)} />
          <Route path="/shop" exact component={Auth(Shop, false)} />
          <Route path="/register" exact component={Auth(Register, null)} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
