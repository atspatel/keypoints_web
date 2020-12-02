import React, { Component } from "react";
import queryString from "query-string";

import PlaylistPlayer from "../components/PlaylistPlayer";
const { innerHeight, innerWidth } = window;

class ColorBarPlayer extends Component {
  render() {
    const { location } = this.props;
    let p_id = "5afc9113-d9cf-4164-a185-1f4456a1731d";
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
        <PlaylistPlayer playlist_id={p_id} hideInstruction={true} />
      </div>
    );
  }
}

export default ColorBarPlayer;
