import React, { Component } from "react";

import * as video_const from "../../constants/sharechat/video_001_const";
import ShareChatPlaylist from "../../components/ShareChatPlaylist";

import "../../css/app.css";

class ShareChatVideo001 extends Component {
  render() {
    return (
      <div
        style={{
          height: 720,
          width: 500
        }}
        className="centerH"
      >
        <ShareChatPlaylist
          title={video_const.title}
          isSingleAudio={video_const.isSingleAudio}
          audioFile={video_const.audioFile}
          playlist={video_const.playlist}
        />
      </div>
    );
  }
}

export default ShareChatVideo001;
