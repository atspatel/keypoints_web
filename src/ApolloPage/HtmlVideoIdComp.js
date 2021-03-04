import React, { Component } from "react";
import ResizeObserver from "rc-resize-observer";

import BaseVideoPlayer from "./BaseVideoPlayer";
import "../css/app.css";

class HtmlVideoIdComp extends Component {
  state = {
    videoHeight: null,
    videoWidth: null,

    marginTop: null,
    marginLeft: null,

    height: null,
    width: null,

    isMute: true,
    playing: true,

    isPaused: true,

    button_id: null,
  };

  updateDimensions = () => {
    if (this.player) {
      const { videoHeight, videoWidth } = this.player;
      const { clientHeight, clientWidth } = this.player;

      if (videoHeight && videoWidth) {
        const ratio = Math.min(
          clientHeight / videoHeight,
          clientWidth / videoWidth
        );
        const player_h = videoHeight * ratio;
        const player_w = videoWidth * ratio;
        const marginTop = (clientHeight - player_h) / 2;
        const marginLeft = (clientWidth - player_w) / 2;
        this.setState({
          height: player_h,
          width: player_w,
          marginTop: marginTop,
          marginLeft: marginLeft,
        });
      }
      this.setState({ videoHeight: videoHeight, videoWidth: videoWidth });
    }
  };
  onEndVideo = () => {
    this.props.onEndVideo && this.props.onEndVideo();
  };

  setProgress = () => {
    if (this.player) {
      if (!this.player.paused) {
        if (this.player.currentTime > this.player.duration - 0.5) {
          this.onEndVideo();
        }
      }
    }
  };

  onPause = () => {
    this.setState({ playing: false });
  };

  onPlay = () => {
    this.setState({ playing: true, isPaused: false, showControl: true });
  };

  componentDidMount() {
    this.player.addEventListener("pause", this.onPause);
    this.player.addEventListener("play", this.onPlay);

    var intervalId = setInterval(this.setProgress, 250);
    this.setState({ intervalId: intervalId });

    this.props.autoplay && this.player.play();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.player.removeEventListener("pause", this.onPause);
    this.player.removeEventListener("play", this.onPlay);
  }

  togglePlay = () => {
    this.state.currentPopup && this.closePopUp();
    if (this.props.togglePlay) {
      this.props.togglePlay();
    } else {
      if (this.player) {
        if (this.player.paused) {
          this.player.play();
          this.setState({ isPaused: false });
        } else {
          this.player.pause();
          this.setState({ isPaused: true });
        }
      }
    }
  };

  render() {
    const { marginTop, marginLeft } = this.state;
    const { video_url, thumbnail, setPlayerRef, setHlsRef } = this.props;
    return (
      <div
        id="div1"
        className="centerH"
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ResizeObserver onResize={this.updateDimensions}>
          <BaseVideoPlayer
            source={video_url}
            setPlayerRef={(c) => {
              this.player = c;
              setPlayerRef && setPlayerRef(c);
            }}
            setHlsRef={setHlsRef}
            onClick={this.togglePlay}
            onLoadedData={this.updateDimensions}
          />
        </ResizeObserver>
      </div>
    );
  }
}

export default HtmlVideoIdComp;
