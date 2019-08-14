import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./components/Home";
import RegisterLogin from "./components/Register_Login/index";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/register-login" component={RegisterLogin} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
