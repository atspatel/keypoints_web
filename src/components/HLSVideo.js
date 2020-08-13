import React, { Component } from "react";
import Hls from "hls.js";

var config = {};

class HLSVideo extends Component {
  componentDidMount() {
    const { src, autoPlay } = this.props;
    if (Hls.isSupported()) {
      var video = this.player;
      var hls = new Hls(config);
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        autoPlay && video.play();
      });
    }
  }
  render() {
    const { muted, controls, loop, setRef } = this.props;
    return (
      <video
        ref={c => {
          this.player = c;
          setRef && setRef(c);
        }}
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
        controls={controls}
        muted={muted}
        loop={loop}
      ></video>
    );
  }
}

export default HLSVideo;
