import React, { Component } from "react";
import HtmlVideoComp from "../components/HtmlVideoComp";
import { Helmet } from "react-helmet";

import "../css/app.css";
import * as oximeter_constants from "../constants/oximeter_constants";

export class OximeterEmbedVideo extends Component {
  render() {
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
            content={oximeter_constants.url_thumbnail}
          />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
        </Helmet>
        <HtmlVideoComp
          video_id={oximeter_constants.video_id}
          video_url={oximeter_constants.video_url}
          showFullScreen={true}
          overlay_buttons={oximeter_constants.overlay_buttons}
          showMenu={false} // TODO :: generalize this
          showInstruction={false}
          endLoop={oximeter_constants.loop_time}
        />
      </>
    );
  }
}

class OximeterVideo extends Component {
  render() {
    return (
      <div style={{ maxWidth: 750 }} className="centerH">
        <OximeterEmbedVideo />
      </div>
    );
  }
}

export default OximeterVideo;
