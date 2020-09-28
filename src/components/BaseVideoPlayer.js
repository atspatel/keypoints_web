import React, { Component } from "react";
import HLSVideo from "./HLSVideo";

const source =
  "https://storage.googleapis.com/kp_videos/media/sharechat_1/content_0829_001/love/love.m3u8";
const thumbnail =
  "https://storage.googleapis.com/kp_videos/media/sharechat_1/content_0829_001/love/love_thumb.png";

class BaseVideoPlayer extends Component {
  render() {
    const { source, thumbnail } = this.props;
    const {
      setPlayerRef,
      setHlsRef,
      onClick,
      onMouseEnter,
      onMouseLeave
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
          muted={isMuted}
          loop={loop}
          autoPlay={autoPlay}
          autoStartLoad={autoStartLoad}
          objectFit="contain"
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
        >
          <source src={source} type="video/mp4" />
        </video>
      );
    }
  }
}

export default BaseVideoPlayer;
