import React, { Component } from "react";
import queryString from "query-string";

import PlaylistPlayer from "../components/PlaylistPlayer";
const { innerHeight, innerWidth } = window;

class BetterIndiaPlayer extends Component {
  render() {
    const { location } = this.props;
    let p_id = "3e4c57fe-bed5-4285-8b0f-a282dd238d5c";
    if (location && location.search) {
      const qParams = queryString.parse(location.search);
      p_id = qParams.p_id ? qParams.p_id : p_id;
    }
    return (
      <div
        style={{
          height: 720,
          width: 1280,
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

export default BetterIndiaPlayer;
