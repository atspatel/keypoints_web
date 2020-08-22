import React, { Component } from "react";

import * as video_const from "../constants/dhoni_tribute_constants";
import VideoPlaylist from "../components/VideoPlaylist";

import "../css/app.css";

const { innerHeight, innerWidth } = window;
class DhoniTribute001 extends Component {
  render() {
    return (
      <div
        style={{
          height: 675,
          width: 1200,
          maxHeight: innerHeight,
          maxWidth: innerWidth,
          position: "relative"
        }}
        className="centerH"
      >
        <VideoPlaylist
          video_id={video_const.video_id}
          lang={"english"}
          playlist={video_const.playlist}
          isSingleAudio={video_const.isSingleAudio}
          audioFile={video_const.audioFile}
        />
      </div>
    );
  }
}

export default DhoniTribute001;
