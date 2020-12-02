import React, { Component } from "react";
import queryString from "query-string";

import PlaylistPlayer from "../components/PlaylistPlayer";
const { innerHeight, innerWidth } = window;

const colors = [
  "#9f9c9d",
  "#2c2d30",
  "#e4b1a7",
  "#921925",
  "#f7da9b",
  "#0d362e"
];
class ColorBarPlayer extends Component {
  state = {
    height: innerHeight,
    width: innerWidth
  };
  updateDimensions = () => {
    const { innerHeight, innerWidth } = window;
    this.setState({ height: innerHeight, width: innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillMount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const { height, width } = this.state;
    const { location } = this.props;
    // let p_id = "5afc9113-d9cf-4164-a185-1f4456a1731d"; //localhost
    let p_id = "80674f5e-3465-45a2-9447-3d8480452a57"; // live
    if (location && location.search) {
      const qParams = queryString.parse(location.search);
      p_id = qParams.p_id ? qParams.p_id : p_id;
    }
    return (
      <div
        style={{
          height: 720,
          width: 1280,
          maxHeight: height,
          maxWidth: width
        }}
        className="centerH"
      >
        <PlaylistPlayer
          playlist_id={p_id}
          hideInstruction={true}
          colors={colors}
        />
      </div>
    );
  }
}

export default ColorBarPlayer;
