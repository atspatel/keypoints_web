import React, { Component } from "react";
import HtmlVideoIdComp from "../components/HtmlVideoIdComp";
import { Helmet } from "react-helmet";

import "../css/app.css";
import * as match_constants from "../constants/match_constants";

// const controls = {
//   showMenu: false,
//   showFullScreen: false,
//   showInstruction: false,
//   showProgressBar: false,
//   marks: []
// };

export class MatchEmbedVideo extends Component {
  render() {
    const { maxWidth } = this.props;
    return (
      <>
        <Helmet>
          <title>Hotstar Interactive Highlights</title>
          <meta
            name="description"
            content="Watch Favourite Moments in More Details at Fingertip"
          />

          <meta
            property="og:site_name"
            content="Hotstar Interactive Highlights"
          />
          <meta property="og:title" content="Hotstar Interactive Highlights" />
          <meta
            property="og:description"
            content="Watch Favourite Moments in More Details at Fingertip"
          />

          <meta property="og:image" content={match_constants.url_thumbnail} />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
        </Helmet>
        <HtmlVideoIdComp
          video_id={match_constants.video_id}
          video_url={match_constants.video_url}
          autoplay={true}
          maxWidth={maxWidth ? maxWidth : null}
          showFullScreen={true}
          overlay_buttons={match_constants.overlay_buttons}
          showMenu={false} // TODO :: generalize this
          showInstruction={false}
          showProgressBar={true}
          timelineMarks={match_constants.marks}
        />
      </>
    );
  }
}

class MatchVideo extends Component {
  render() {
    return (
      <>
        <MatchEmbedVideo maxWidth={800} />
      </>
    );
  }
}

export default MatchVideo;
