import React, { Component } from "react";
import HtmlVideoComp from "../components/HtmlVideoComp";
import { Helmet } from "react-helmet";

import "../css/app.css";
import * as oximeter_rect_constants from "../constants/oximeter_rect_constants";

export class OximeterRectEmbedVideo extends Component {
  render() {
    const { maxWidth } = this.props;
    return (
      <>
        <Helmet>
          <title>Pulse Oximeter</title>
          <meta
            name="description"
            content="CHECK YOUR OXYGEN SATURATION...BUY A FINGERTIP PULSE OXIMETER NOW!"
          />

          <meta property="og:site_name" content="Pulse Oximeter" />
          <meta property="og:title" content="Pulse Oximeter" />
          <meta
            property="og:description"
            content="CHECK YOUR OXYGEN SATURATION...BUY A FINGERTIP PULSE OXIMETER NOW!"
          />

          <meta
            property="og:image"
            content={oximeter_rect_constants.url_thumbnail}
          />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
        </Helmet>
        <HtmlVideoComp
          video_id={oximeter_rect_constants.video_id}
          video_url={oximeter_rect_constants.video_url}
          autoplay={true}
          maxWidth={maxWidth ? maxWidth : null}
          showFullScreen={true}
          overlay_buttons={oximeter_rect_constants.overlay_buttons}
          showMenu={false} // TODO :: generalize this
          showInstruction={false}
          endLoop={oximeter_rect_constants.loop_time}
        />
      </>
    );
  }
}

class OximeterRectVideo extends Component {
  render() {
    return (
      <>
        <OximeterRectEmbedVideo maxWidth={800} />
      </>
    );
  }
}

export default OximeterRectVideo;
