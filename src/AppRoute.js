import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HtmlVideoComp from "./components/HtmlVideoComp";

class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/sample_video" render={() => <HtmlVideoComp />} />
          <Route render={() => <Redirect to="/sample_video" />} />
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;
