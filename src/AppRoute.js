import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import RealmeVideo from "./VideoPages/RealmeVideo";
import OximeterVideo, { OximeterEmbedVideo } from "./VideoPages/OximeterVideo";
import OximeterRectVideo, {
  OximeterRectEmbedVideo
} from "./VideoPages/OximeterRectVideo";

class AppRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/sample_video" render={() => <RealmeVideo />} />
        <Route path="/realme" render={() => <RealmeVideo />} />
        <Route path="/oximeter" render={() => <OximeterVideo />} />
        <Route path="/embed_oximeter" render={() => <OximeterEmbedVideo />} />
        <Route path="/oximeter_rect" render={() => <OximeterRectVideo />} />
        <Route
          path="/embed_oximeter_rect"
          render={() => <OximeterRectEmbedVideo />}
        />
        <Route render={() => <Redirect to="/sample_video" />} />
      </Switch>
    );
  }
}

export default AppRoute;
