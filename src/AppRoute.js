import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import RealmeVideo from "./VideoPages/RealmeVideo";
import MatchVideo from "./VideoPages/MatchVideo";
import SamsungDemo from "./VideoPages/SamsungDemo";
import OximeterVideo, { OximeterEmbedVideo } from "./VideoPages/OximeterVideo";
import OximeterVideo2 from "./VideoPages/OximeterVideo2";
import CurefitVideo from "./VideoPages/CurefitVideo";
import IEVideo from "./VideoPages/IEVideo";
import NDTVVideo from "./VideoPages/NDTVVideo";
import { TVNineBharat } from "./components/TVNineBharatPopup";
import TVNineBharat002 from "./components/TVNineBharat002";

import PlaylistVideo from "./VideoPages/PlaylistVideo";
import BetterIndiaPlayer from "./VideoPages/BetterIndiaPlayer";
import ColorBarPlayer from "./VideoPages/ColorBarPlayer";
import ApolloPlayer from "./VideoPages/ApolloPlayer"

import ShareChatPlayer from "./VideoPages/sharechat/ShareChatPlayer";
import ShareChatPlayerMapped from "./VideoPages/sharechat/ShareChatPlayerMapped";
import DhoniTribute001 from "./VideoPages/DhoniTribute001";
import InteractiveAarti from "./components/InteractiveAarti";

import LilyVideoPage from "./VideoPages/LilyVideoPage";

import LandingPage from "./VideoPages/LandingPage";

import RefreshToken from "./components/RefreshToken";

class AppRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/refresh" render={() => <RefreshToken />} />
        <Route path="/samsung" render={() => <SamsungDemo />} />
        <Route path="/curefit" render={() => <CurefitVideo />} />
        <Route path="/indianexpress" render={() => <IEVideo />} />
        <Route path="/tv9bharat" render={() => <TVNineBharat />} />
        <Route path="/tv9bharat_002" render={() => <TVNineBharat002 />} />

        <Route path="/realme" render={() => <RealmeVideo />} />
        <Route path="/oximeter" render={() => <OximeterVideo />} />
        <Route path="/embed_oximeter" render={() => <OximeterEmbedVideo />} />
        <Route path="/ndtv" render={() => <NDTVVideo />} />
        <Route path="/hotstar" render={() => <MatchVideo />} />

        <Route path="/lily" render={props => <LilyVideoPage {...props} />} />
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
          path="/colorbar"
          render={props => <ColorBarPlayer {...props} />}
        />

        <Route
          path="/apollo"
          render={props => <ApolloPlayer {...props} />}
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
