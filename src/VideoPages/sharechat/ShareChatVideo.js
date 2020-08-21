import React, { Component } from "react";
import ShareChatPlaylist from "../../components/ShareChatPlaylist";

import "../../css/app.css";

const { innerHeight, innerWidth } = window;
class ShareChatVideo001 extends Component {
  render() {
    const { video_const } = this.props;
    return (
      <div
        style={{
          height: 720,
          width: 500,
          maxHeight: innerHeight,
          maxWidth: innerWidth
        }}
        className="centerH"
      >
        <ShareChatPlaylist
          video_id={video_const.video_id}
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
