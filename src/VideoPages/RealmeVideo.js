import React, { Component } from "react";
import HtmlVideoIdComp from "../components/HtmlVideoIdComp";
import { Helmet } from "react-helmet";

import * as realme_constants from "../constants/realme_constants";

class RealmeVideo extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Realme Shopable Video</title>
          <meta name="description" content="Smart way to buy Smartphone." />

          <meta property="og:site_name" content="Realme Shopable Video" />
          <meta property="og:title" content="Realme Shopable Video" />
          <meta
            property="og:description"
            content="Smart way to buy Smartphone."
          />

          <meta property="og:image" content={realme_constants.url_thumbnail} />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="153" />
        </Helmet>
        <HtmlVideoIdComp
          video_id={realme_constants.video_id}
          video_url={realme_constants.video_url}
          overlay_buttons={realme_constants.overlay_buttons}
          showFullScreen={true}
          showMenu={true} // TODO :: generalize this
          showInstruction={true}
        />
      </>
    );
  }
}

export default RealmeVideo;
