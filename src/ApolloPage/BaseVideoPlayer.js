import React, { Component } from "react";
import HLSVideo from "./HLSVideo";

class BaseVideoPlayer extends Component {
  render() {
    const { source, thumbnail } = this.props;
    const { setPlayerRef, setHlsRef, onClick, onLoadedData } = this.props;
    const { autoPlay, style } = this.props;
    return (
      <HLSVideo
        setRef={(c) => setPlayerRef && setPlayerRef(c)}
        setHls={(c) => setHlsRef && setHlsRef(c)}
        src={source}
        poster={thumbnail}
        autoPlay={autoPlay}
        objectFit="contain"
        onClick={onClick && onClick}
        onLoadedData={onLoadedData && onLoadedData}
        style={style}
      />
    );
  }
}

export default BaseVideoPlayer;
