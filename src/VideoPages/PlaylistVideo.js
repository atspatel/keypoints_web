import React, { Component } from "react";
import queryString from "query-string";

import PlaylistPlayer from "../components/PlaylistPlayer";
const { innerHeight, innerWidth } = window;

class PlaylistVideo extends Component {
  render() {
    const { location } = this.props;
    let p_id = "b8c1971a-6720-47d7-aafa-24d124cf144b";
    if (location && location.search) {
      const qParams = queryString.parse(location.search);
      p_id = qParams.p_id ? qParams.p_id : p_id;
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

export default PlaylistVideo;
