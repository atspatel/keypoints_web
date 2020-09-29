import React, { Component } from "react";
import PlaylistPlayer from "../components/PlaylistPlayer";

import "../css/app.css";
import * as config from "../config";

const p_id = config.dhoni_tribute_id;

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
        <PlaylistPlayer playlist_id={p_id} />
      </div>
    );
  }
}

export default DhoniTribute001;
