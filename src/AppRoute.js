import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import RealmeVideo from "./VideoPages/RealmeVideo";
import MatchVideo from "./VideoPages/MatchVideo";
import SamsungDemo from "./VideoPages/SamsungDemo";
import OximeterVideo, { OximeterEmbedVideo } from "./VideoPages/OximeterVideo";
import CurefitVideo from "./VideoPages/CurefitVideo";
import IEVideo from "./VideoPages/IEVideo";

import ShareChatVideo001 from "./VideoPages/sharechat/ShareChatVideo001";
import ShareChatVideo002 from "./VideoPages/sharechat/ShareChatVideo002";
import ShareChatVideo003 from "./VideoPages/sharechat/ShareChatVideo003";
import ShareChatVideo004 from "./VideoPages/sharechat/ShareChatVideo004";
import ShareChatVideo005 from "./VideoPages/sharechat/ShareChatVideo005";
import ShareChatVideo006 from "./VideoPages/sharechat/ShareChatVideo006";
import ShareChatVideo007 from "./VideoPages/sharechat/ShareChatVideo007";
import ShareChatVideo008 from "./VideoPages/sharechat/ShareChatVideo008";
import ShareChatVideo009 from "./VideoPages/sharechat/ShareChatVideo009";
import ShareChatVideo010 from "./VideoPages/sharechat/ShareChatVideo010";

import DhoniTribute001 from "./VideoPages/DhoniTribute001";

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

        <Route
          path="/dhoni_tribute"
          render={props => <DhoniTribute001 {...props} />}
        />

        <Route
          path="/sharechat_001"
          render={props => <ShareChatVideo001 {...props} />}
        />
        <Route
          path="/sharechat_002"
          render={props => <ShareChatVideo002 {...props} />}
        />
        <Route
          path="/sharechat_003"
          render={props => <ShareChatVideo003 {...props} />}
        />
        <Route
          path="/sharechat_004"
          render={props => <ShareChatVideo004 {...props} />}
        />
        <Route
          path="/sharechat_005"
          render={props => <ShareChatVideo005 {...props} />}
        />
        <Route
          path="/sharechat_006"
          render={props => <ShareChatVideo006 {...props} />}
        />
        <Route
          path="/sharechat_007"
          render={props => <ShareChatVideo007 {...props} />}
        />
        <Route
          path="/sharechat_008"
          render={props => <ShareChatVideo008 {...props} />}
        />
        <Route
          path="/sharechat_009"
          render={props => <ShareChatVideo009 {...props} />}
        />
        <Route
          path="/sharechat_010"
          render={props => <ShareChatVideo010 {...props} />}
        />

        <Route render={() => <Redirect to="/sample_video" />} />
      </Switch>
    );
  }
}

export default AppRoute;
