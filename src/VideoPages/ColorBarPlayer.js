import React, { Component } from "react";
import queryString from "query-string";
import Iframe from "react-iframe";

import PlaylistPlayer from "../components/PlaylistPlayer";
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
class ColorBarPlayer extends Component {
  state = {
    height: innerHeight,
    width: innerWidth,
    curLook: null,
    isScrolling: false
  };

  onChangeLook = look => {
    console.log(look);
    this.setState({ curLook: look });
  };
  updateDimensions = () => {
    const { innerHeight, innerWidth } = window;
    this.setState({ height: innerHeight, width: innerWidth });
  };

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("container");
    if (this.isBottom(wrappedElement)) {
      this.setState({ isScrolling: true });
    } else {
      this.setState({ isScrolling: false });
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillMount() {
    document.removeEventListener("scroll", this.trackScrolling);
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const { height, width, curLook, isScrolling } = this.state;
    const { location } = this.props;
    // let p_id = "5afc9113-d9cf-4164-a185-1f4456a1731d"; //localhost
    let p_id = "80674f5e-3465-45a2-9447-3d8480452a57"; // live
    if (location && location.search) {
      const qParams = queryString.parse(location.search);
      p_id = qParams.p_id ? qParams.p_id : p_id;
    }
    return (
      <div>
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
        {curLook && (
          <Iframe
            id="container"
            src={html_file[curLook]}
            width={width}
            height={innerHeight}
            scrolling={isScrolling ? "yes" : "no"}
          />
        )}
      </div>
    );
  }
}

export default ColorBarPlayer;
