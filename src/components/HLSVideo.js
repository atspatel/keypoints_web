import React, { Component } from "react";
import Hls from "hls.js";

class HLSVideo extends Component {
  componentDidMount() {
    const { src, autoPlay, maxBuffer, autoStartLoad, setHls } = this.props;
    var config = {
      maxMaxBufferLength: maxBuffer ? maxBuffer : 300,
      autoStartLoad: autoStartLoad !== undefined ? autoStartLoad : true,
      startLevel: 0
    };
    if (Hls.isSupported()) {
      var video = this.player;
      var hls = new Hls(config);
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        autoPlay && video.play();
      });
      setHls && setHls(hls);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      var video = this.player;
      video.src = src;
      video.addEventListener("loadedmetadata", function() {
        autoPlay && video.play();
      });
    }
  }
  render() {
    const {
      poster,
      muted,
      controls,
      loop,
      setRef,
      objectFit,
      style
    } = this.props;
    const { onClick, onMouseEnter, onMouseLeave, onLoadedData } = this.props;

    return (
      <video
        ref={c => {
          this.player = c;
          setRef && setRef(c);
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: objectFit ? objectFit : "fill",
          ...style
        }}
        poster={poster}
        controls={controls}
        muted={muted}
        loop={loop}
        onClick={onClick && onClick}
        onMouseEnter={onMouseEnter && onMouseEnter}
        onMouseLeave={onMouseLeave && onMouseLeave}
        onLoadedData={onLoadedData && onLoadedData}
      ></video>
    );
  }
}

export default HLSVideo;
