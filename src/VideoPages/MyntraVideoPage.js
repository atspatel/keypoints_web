import React, { Component } from "react";
import HtmlVideoComp from "../components/HtmlVideoComp";
import { Helmet } from "react-helmet";

import * as myntra_constants from "../constants/myntra_constants";

class MyntraVideo extends Component {
  render() {
    return (
      <HtmlVideoComp
        video_id={myntra_constants.video_id}
        video_url={myntra_constants.video_url}
        maxWidth={800}
        overlay_buttons={myntra_constants.overlay_buttons}
        showFullScreen={true}
        showMenu={true} // TODO :: generalize this
        showInstruction={true}
      />
    );
  }
}

export default MyntraVideo;
