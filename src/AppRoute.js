import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import RealmeVideo from "./VideoPages/RealmeVideo";
import MatchVideo from "./VideoPages/MatchVideo";
import SamsungDemo from "./VideoPages/SamsungDemo";
import OximeterVideo, { OximeterEmbedVideo } from "./VideoPages/OximeterVideo";
import CurefitVideo from "./VideoPages/CurefitVideo";
import IEVideo from "./VideoPages/IEVideo";
import { TVNineBharat } from "./components/TVNineBharatPopup";
import TVNineBharat002 from "./components/TVNineBharat002";

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

import ShareChatAudio001 from "./VideoPages/sharechat/ShareChatAudio001";

import ShareChatContent001 from "./VideoPages/sharechat/ShareChatContent001";
import ShareChatContent002 from "./VideoPages/sharechat/ShareChatContent002";
import ShareChatContent003 from "./VideoPages/sharechat/ShareChatContent003";
import ShareChatContent004 from "./VideoPages/sharechat/ShareChatContent004";
import ShareChatContent005 from "./VideoPages/sharechat/ShareChatContent005";
import ShareChatContent006 from "./VideoPages/sharechat/ShareChatContent006";
import ShareChatContent007 from "./VideoPages/sharechat/ShareChatContent007";
import ShareChatContent008 from "./VideoPages/sharechat/ShareChatContent008";
import ShareChatContent009 from "./VideoPages/sharechat/ShareChatContent009";
import ShareChatContent010 from "./VideoPages/sharechat/ShareChatContent010";
import ShareChatContent011 from "./VideoPages/sharechat/ShareChatContent011";
import ShareChatContent012 from "./VideoPages/sharechat/ShareChatContent012";
import ShareChatContent013 from "./VideoPages/sharechat/ShareChatContent013";
import ShareChatContent014 from "./VideoPages/sharechat/ShareChatContent014";
import ShareChatContent015 from "./VideoPages/sharechat/ShareChatContent015";
import ShareChatContent016 from "./VideoPages/sharechat/ShareChatContent016";
import ShareChatContent017 from "./VideoPages/sharechat/ShareChatContent017";
import ShareChatContent018 from "./VideoPages/sharechat/ShareChatContent018";
import ShareChatContent019 from "./VideoPages/sharechat/ShareChatContent019";
import ShareChatContent020 from "./VideoPages/sharechat/ShareChatContent020";
import ShareChatContent021 from "./VideoPages/sharechat/ShareChatContent021";
import ShareChatContent022 from "./VideoPages/sharechat/ShareChatContent022";

import ShareChatQuiz001 from "./VideoPages/sharechat/ShareChatQuiz001";

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
        <Route path="/tv9bharat" render={() => <TVNineBharat />} />
        <Route path="/tv9bharat_002" render={() => <TVNineBharat002 />} />

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

        <Route
          path="/sharechat_audio_001"
          render={props => <ShareChatAudio001 {...props} />}
        />

        <Route
          path="/sharechat_content_001"
          render={props => <ShareChatContent001 {...props} />}
        />

        <Route
          path="/sharechat_content_002"
          render={props => <ShareChatContent002 {...props} />}
        />

        <Route
          path="/sharechat_content_003"
          render={props => <ShareChatContent003 {...props} />}
        />

        <Route
          path="/sharechat_content_004"
          render={props => <ShareChatContent004 {...props} />}
        />

        <Route
          path="/sharechat_content_005"
          render={props => <ShareChatContent005 {...props} />}
        />

        <Route
          path="/sharechat_content_006"
          render={props => <ShareChatContent006 {...props} />}
        />

        <Route
          path="/sharechat_content_007"
          render={props => <ShareChatContent007 {...props} />}
        />

        <Route
          path="/sharechat_content_008"
          render={props => <ShareChatContent008 {...props} />}
        />

        <Route
          path="/sharechat_content_009"
          render={props => <ShareChatContent009 {...props} />}
        />

        <Route
          path="/sharechat_content_010"
          render={props => <ShareChatContent010 {...props} />}
        />

        <Route
          path="/sharechat_content_011"
          render={props => <ShareChatContent011 {...props} />}
        />

        <Route
          path="/sharechat_content_012"
          render={props => <ShareChatContent012 {...props} />}
        />

        <Route
          path="/sharechat_content_013"
          render={props => <ShareChatContent013 {...props} />}
        />

        <Route
          path="/sharechat_content_014"
          render={props => <ShareChatContent014 {...props} />}
        />

        <Route
          path="/sharechat_content_015"
          render={props => <ShareChatContent015 {...props} />}
        />

        <Route
          path="/sharechat_content_016"
          render={props => <ShareChatContent016 {...props} />}
        />
        <Route
          path="/sharechat_content_017"
          render={props => <ShareChatContent017 {...props} />}
        />
        <Route
          path="/sharechat_content_018"
          render={props => <ShareChatContent018 {...props} />}
        />
        <Route
          path="/sharechat_content_019"
          render={props => <ShareChatContent019 {...props} />}
        />
        <Route
          path="/sharechat_content_020"
          render={props => <ShareChatContent020 {...props} />}
        />
        <Route
          path="/sharechat_content_021"
          render={props => <ShareChatContent021 {...props} />}
        />
        <Route
          path="/sharechat_content_022"
          render={props => <ShareChatContent022 {...props} />}
        />

        <Route
          path="/sharechat_quiz_001"
          render={props => <ShareChatQuiz001 {...props} />}
        />

        <Route render={() => <Redirect to="/sample_video" />} />
      </Switch>
    );
  }
}

export default AppRoute;
