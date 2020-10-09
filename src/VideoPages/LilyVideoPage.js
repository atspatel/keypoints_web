import React, { Component } from "react";
import queryString from "query-string";

import * as radius_constants from "../constants/radius_constants";
import * as action_constants from "../constants/action_constants";

import LilyPlayer from "../components/LilyPlayer";

import { get_session } from "../functions/token_function";

const { innerHeight, innerWidth } = window;

const session = get_session();

const timeline_marks = {
  1: [
    { value: 133, end: 135 },
    { value: 585, end: 590 },
    { value: 910, end: 920 }
  ],
  2: [
    { value: 559, end: 563 },
    { value: 741, end: 742 }
  ],
  3: [
    { value: 523, end: 526 },
    { value: 864, end: 870 }
  ],
  4: [{ value: 732, end: 735 }]
};

const overlay_buttons = {
  1: [
    {
      id: 1,
      start: 133,
      end: 135,
      id: "lily_pause",
      name: "lily_pause",
      shape: radius_constants.RECT,

      pauseVideo: 134,
      bbox: { top: 0.28, left: 0.4, width: 0.25, height: 0.1 },
      action: {
        type: action_constants.ACTION_SEEK_TO,
        data: {
          duration: 136,
          toPlay: true
        }
      }
    }
  ],
  2: [],
  3: [],
  4: []
};

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
          overlay_buttons={overlay_buttons[episode]}
          showProgressBar={true}
          showVideoControls={true}
          timelineMarks={timeline_marks[episode]}
        />
      </div>
    );
  }
}

export default LilyVideoPage;
