import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import VideoPlayerComp from "./components/VideoPlayerComp";

class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/sample_video" render={() => <VideoPlayerComp />} />
          <Route render={() => <Redirect to="/sample_video" />} />
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;
