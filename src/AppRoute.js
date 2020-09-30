import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import RealmeVideo from "./VideoPages/RealmeVideo";
import MatchVideo from "./VideoPages/MatchVideo";
import SamsungDemo from "./VideoPages/SamsungDemo";
import OximeterVideo, { OximeterEmbedVideo } from "./VideoPages/OximeterVideo";
import CurefitVideo from "./VideoPages/CurefitVideo";
import IEVideo from "./VideoPages/IEVideo";
import NDTVVideo from "./VideoPages/NDTVVideo";
import { TVNineBharat } from "./components/TVNineBharatPopup";
import TVNineBharat002 from "./components/TVNineBharat002";

import PlaylistVideo from "./VideoPages/PlaylistVideo";
import BetterIndiaPlayer from "./VideoPages/BetterIndiaPlayer";

import ShareChatPlayer from "./VideoPages/sharechat/ShareChatPlayer";
import ShareChatPlayerMapped from "./VideoPages/sharechat/ShareChatPlayerMapped";
import DhoniTribute001 from "./VideoPages/DhoniTribute001";
import InteractiveAarti from "./components/InteractiveAarti";

import LillyPopup from "./components/LillyPopup";

import LandingPage from "./VideoPages/LandingPage";

class AppRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/lilly" render={() => <LillyPopup />} />
        <Route path="/realme" render={() => <RealmeVideo />} />
        <Route path="/oximeter" render={() => <OximeterVideo />} />
        <Route path="/embed_oximeter" render={() => <OximeterEmbedVideo />} />
        <Route path="/hotstar" render={() => <MatchVideo />} />
        <Route path="/samsung" render={() => <SamsungDemo />} />
        <Route path="/curefit" render={() => <CurefitVideo />} />
        <Route path="/indianexpress" render={() => <IEVideo />} />
        <Route path="/ndtv" render={() => <NDTVVideo />} />
        <Route path="/tv9bharat" render={() => <TVNineBharat />} />
        <Route path="/tv9bharat_002" render={() => <TVNineBharat002 />} />

        <Route
          path="/playlist"
          render={props => <PlaylistVideo {...props} />}
        />

        <Route
          path="/mxplayer"
          render={props => <PlaylistVideo {...props} />}
        />

        <Route path="/josh" render={props => <PlaylistVideo {...props} />} />

        <Route
          path="/betterindia"
          render={props => <BetterIndiaPlayer {...props} />}
        />

        <Route
          path="/sharechat"
          render={props => <ShareChatPlayer {...props} />}
        />
        <Route
          path="/sharechat_*"
          render={props => <Redirect to="/sharechat" />}
        />

        <Route
          path="/dhoni_tribute"
          render={props => <DhoniTribute001 {...props} />}
        />

        <Route path="/digital_aarti">
          <InteractiveAarti isShare={true} />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>

        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  }
}

export default AppRoute;
