import React, { Component } from "react";
import HLSVideo from "./HLSVideo";

class BaseVideoPlayer extends Component {
  render() {
    const { source, thumbnail } = this.props;
    const {
      setPlayerRef,
      setHlsRef,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onLoadedData
    } = this.props;
    const { maxBuffer, isMuted, loop, autoPlay, autoStartLoad } = this.props;
    const isM3u8 = source.endsWith(".m3u8");
    if (isM3u8) {
      return (
        <HLSVideo
          setRef={c => setPlayerRef && setPlayerRef(c)}
          setHls={c => setHlsRef && setHlsRef(c)}
          src={source}
          poster={thumbnail}
          maxBuffer={maxBuffer}
          // muted={false}
          loop={loop}
          autoPlay={autoPlay}
          autoStartLoad={autoStartLoad}
          objectFit="contain"
          onClick={onClick && onClick}
          onMouseEnter={onMouseEnter && onMouseEnter}
          onMouseLeave={onMouseLeave && onMouseLeave}
          onLoadedData={onLoadedData && onLoadedData}
        />
      );
    } else {
      return (
        <video
          ref={c => setPlayerRef && setPlayerRef(c)}
          width="100%"
          height="100%"
          onClick={onClick && onClick}
          onMouseEnter={onMouseEnter && onMouseEnter}
          onMouseLeave={onMouseLeave && onMouseLeave}
          onLoadedData={onLoadedData && onLoadedData}
        >
          <source src={source} type="video/mp4" />
        </video>
      );
    }
  }
}

export default BaseVideoPlayer;
