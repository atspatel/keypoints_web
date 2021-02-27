import React, { Component } from "react";
import queryString from "query-string";
import Iframe from "react-iframe";
import { isIOS } from "react-device-detect";
import PlaylistPlayer from "../components/PlaylistPlayer";
import * as config from "../config";

const { innerHeight, innerWidth } = window;

const html_file = {
  dream_girl_button: "./html/dream_girl.html",
  go_getter_button: "./html/go_getter.html",
  morning_muse_button: "./html/morning_muse.html",
  the_head_turner_button: "./html/the_head_turner.html",
  the_retro_chic_button: "./html/the_retro_chic.html",
  the_ultimate_diva_button: "./html/the_ultimate_diva.html"
};

const colors = [
  "#9f9c9d",
  "#2c2d30",
  "#e4b1a7",
  "#921925",
  "#f7da9b",
  "#0d362e"
];
class ApolloPlayer extends Component {
  state = {
    height: innerHeight,
    width: innerWidth,
    curLook: null
  };

  onChangeLook = look => {
    this.setState({ curLook: look });
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
    const { height, width, curLook } = this.state;
    const { location } = this.props;

    let p_id = config.apollo_id;
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
            onChangeButton={this.onChangeLook}
          />
        </div>
    );
  }
}

export default ApolloPlayer;
