import React, { Component } from "react";
import HtmlVideoIdComp from "../components/HtmlVideoIdComp";
import { Helmet } from "react-helmet";

import { get_video_data } from "../functions/mediaPlaylistFunc";

const video_id = "184b0f49-9764-4381-b52c-7879d9aba294";

class MyntraVideo extends Component {
  state = {
    video_data: null
  };
  componentDidMount() {
    get_video_data(video_id).then(response => {
      console.log(response.data);
      this.setState({ video_data: response.data });
    });
  }
  render() {
    const { video_data } = this.state;
    return video_data ? (
      <HtmlVideoIdComp
        video_id={video_data.name}
        video_url={video_data.media.src}
        overlay_buttons={video_data.buttons}
        maxWidth={800}
        showFullScreen={true}
        showVideoControls={true}
      />
    ) : (
      <div></div>
    );
  }
}

export default MyntraVideo;
