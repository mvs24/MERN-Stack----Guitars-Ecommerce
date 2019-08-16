import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./components/Home";
import RegisterLogin from "./components/Register_Login/index";
import Register from "./components/Register_Login/Register";
import UserDashboard from "./components/User";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/user/dashboard" component={UserDashboard} />
          <Route path="/register-login" exact component={RegisterLogin} />
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
