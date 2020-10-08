import React, { Component } from "react";
import queryString from "query-string";

import LilyPlayer from "../components/LilyPlayer";

import { get_session } from "../functions/token_function";

const { innerHeight, innerWidth } = window;

const session = get_session();

export class LilyVideoPage extends Component {
  state = { height: null, width: null };
  updateDimensions = () => {
    const { outerHeight, outerWidth } = window;
    const { innerHeight, innerWidth } = window;

    const { height, width } = this.state;

    let new_h = innerHeight;
    let new_w = innerWidth;
    if (innerHeight > outerHeight || innerWidth > outerWidth) {
      new_h = outerHeight;
      new_w = outerWidth;
    }
    if (height !== new_h || width !== new_w) {
      this.setState({ height: new_h, width: new_w });
    }
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { height, width } = this.state;
    const { location } = this.props;
    let episode = 1;
    if (location && location.search) {
      const qParams = queryString.parse(location.search);
      episode = qParams.ep ? qParams.ep : episode;
    }
    const video_path = `https://keypoints-data.s3.ap-south-1.amazonaws.com/media/lily/video/e0${episode}/lily_e0${episode}/lily_e0${episode}.m3u8`;
    return (
      <div style={{ height: 600 }}>
        <LilyPlayer
          video_id={`lily_00${episode}`}
          session_id={session}
          episode={episode}
          video_url={video_path}
          autoplay={true}
          maxWidth={width ? width : innerWidth}
          maxHeight={height ? height : innerHeight}
          showFullScreen={true}
          overlay_buttons={[]}
          showProgressBar={true}
          showVideoControls={true}
        />
      </div>
    );
  }
}

export default LilyVideoPage;