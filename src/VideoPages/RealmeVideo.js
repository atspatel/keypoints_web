import React, { Component } from "react";
import HtmlVideoComp from "../components/HtmlVideoComp";

import * as realme_constants from "../constants/realme_constants";

class RealmeVideo extends Component {
  render() {
    return (
      <HtmlVideoComp
        maxWidth={900}
        video_url={realme_constants.video_url}
        overlay_buttons={realme_constants.overlay_buttons}
        showFullScreen={true}
        showMenu={true} // TODO :: generalize this
        showInstruction={true}
      />
    );
  }
}

export default RealmeVideo;
