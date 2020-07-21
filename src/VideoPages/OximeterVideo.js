import React, { Component } from "react";
import HtmlVideoComp from "../components/HtmlVideoComp";

import * as oximeter_constants from "../constants/oximeter_constants";

class RealmeVideo extends Component {
  render() {
    return (
      <HtmlVideoComp
        maxWidth={900}
        video_url={oximeter_constants.video_url}
        showFullScreen={true}
        overlay_buttons={oximeter_constants.overlay_buttons}
        showMenu={false} // TODO :: generalize this
        showInstruction={false}
        endLoop={oximeter_constants.loop_time}
      />
    );
  }
}

export default RealmeVideo;
