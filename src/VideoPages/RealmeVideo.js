import React, { Component } from "react";
import HtmlVideoComp from "../components/HtmlVideoComp";

import * as realme_constants from "../constants/realme_constants";

class RealmeVideo extends Component {
  render() {
    return (
      <HtmlVideoComp
        maxWidth={900}
        video_url={realme_constants.video_url}
        showFullScreen={true}
        overlay_buttons={realme_constants.overlay_buttons}
        showMenu={true} // TODO :: generalize this
      />
    );
  }
}

export default RealmeVideo;
