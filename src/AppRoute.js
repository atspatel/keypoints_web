import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import RealmeVideo from "./VideoPages/RealmeVideo";
import MatchVideo from "./VideoPages/MatchVideo";
import SamsungDemo from "./VideoPages/SamsungDemo";
import OximeterVideo, { OximeterEmbedVideo } from "./VideoPages/OximeterVideo";
import CurefitVideo from "./VideoPages/CurefitVideo";
import IEVideo from "./VideoPages/IEVideo";

import ShareChatVideo001 from "./VideoPages/sharechat/ShareChatVideo001";

class AppRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/sample_video" render={() => <RealmeVideo />} />
        <Route path="/realme" render={() => <RealmeVideo />} />
        <Route path="/oximeter" render={() => <OximeterVideo />} />
        <Route path="/embed_oximeter" render={() => <OximeterEmbedVideo />} />
        <Route path="/hotstar" render={() => <MatchVideo />} />
        <Route path="/samsung" render={() => <SamsungDemo />} />
        <Route path="/curefit" render={() => <CurefitVideo />} />
        <Route path="/indianexpress" render={() => <IEVideo />} />
        <Route path="/sharechat_001" render={() => <ShareChatVideo001 />} />
        <Route render={() => <Redirect to="/sample_video" />} />
      </Switch>
    );
  }
}

export default AppRoute;
