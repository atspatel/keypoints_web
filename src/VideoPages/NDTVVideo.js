import React, { Component } from "react";
import HtmlVideoComp from "../components/HtmlVideoComp";
import { Helmet } from "react-helmet";

import "../css/app.css";
import * as ndtv_constants from "../constants/ndtv_constants";

export class NDTVEmbedVideo extends Component {
  render() {
    const { maxWidth } = this.props;
    return (
      <>
        <HtmlVideoComp
          video_id={ndtv_constants.video_id}
          video_url={ndtv_constants.video_url}
          autoplay={true}
          maxWidth={maxWidth ? maxWidth : null}
          showFullScreen={true}
          overlay_buttons={ndtv_constants.overlay_buttons}
          showMenu={false} // TODO :: generalize this
          showInstruction={false}
          showProgressBar={true}
        />
      </>
    );
  }
}

class NDTVVideo extends Component {
  render() {
    return (
      <>
        <NDTVEmbedVideo maxWidth={800} />
      </>
    );
  }
}

export default NDTVVideo;
