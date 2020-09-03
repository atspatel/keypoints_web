import React, { Component } from "react";

import * as sharechat_constants from "../../constants/sharechat/sharechat_constants";

import PlaylistPlayer from "../../components/PlaylistPlayer";
const { innerHeight, innerWidth } = window;

const mapping = sharechat_constants.mapping;

class ShareChatPlayerMapped extends Component {
  render() {
    const { location } = this.props;
    let p_id = mapping.sharechat_content_001;
    if (location && location.pathname) {
      const key = location.pathname.substring(1);
      p_id = mapping[key] ? mapping[key] : p_id;
    }
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
        <PlaylistPlayer playlist_id={p_id} />
      </div>
    );
  }
}

export default ShareChatPlayerMapped;
