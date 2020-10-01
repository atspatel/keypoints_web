import React, { Component } from "react";
import HtmlVideoIdComp from "../components/HtmlVideoIdComp";

import "../css/app.css";
import { get_video_data } from "../functions/mediaPlaylistFunc";

const video_id = "3d4b372d-f7c1-411d-a20c-5e2583f327a1";

export class OximeterEmbedVideo extends Component {
  state = {
    video_data: null
  };
  componentDidMount() {
    get_video_data(video_id).then(response => {
      this.setState({ video_data: response.data });
    });
  }
  render() {
    const { maxWidth } = this.props;
    const { video_data } = this.state;
    return video_data ? (
      <HtmlVideoIdComp
        video_id={video_data.name}
        video_url={`${video_data.media.src}`}
        overlay_buttons={video_data.buttons}
        autoplay={true}
        maxWidth={maxWidth ? maxWidth : null}
        showFullScreen={true}
        showMenu={false} // TODO :: generalize this
        showInstruction={false}
        endLoop={55.3}
        showVideoControls={true}
      />
    ) : (
      <div></div>
    );
  }
}

class OximeterVideo extends Component {
  render() {
    return (
      <>
        <OximeterEmbedVideo maxWidth={800} />
      </>
    );
  }
}

export default OximeterVideo;
