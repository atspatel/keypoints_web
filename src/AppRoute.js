import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import RealmeVideo from "./VideoPages/RealmeVideo";

class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/sample_video" render={() => <RealmeVideo />} />
          <Route render={() => <Redirect to="/sample_video" />} />
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;
