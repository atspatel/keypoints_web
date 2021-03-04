import React, { Component } from "react";
import Hls from "hls.js";

class HLSVideo extends Component {
  componentDidMount() {
    const { src, setHls } = this.props;
    var config = {
      maxMaxBufferLength: 30,
      autoStartLoad: true,
      startLevel: 0,
    };
    var video = this.player;
    if (Hls.isSupported()) {
      var hls = new Hls(config);
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {});
      setHls && setHls(hls);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", function () {});
    }
  }
  render() {
    const { poster, setRef, style } = this.props;
    const { onClick, onLoadedData } = this.props;

    return (
      <video
        ref={(c) => {
          this.player = c;
          setRef && setRef(c);
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          ...style,
        }}
        poster={poster}
        onClick={onClick && onClick}
        onLoadedData={onLoadedData && onLoadedData}
        webkit-playsinline="true"
        playsInline={true}
      ></video>
    );
  }
}

export default HLSVideo;
