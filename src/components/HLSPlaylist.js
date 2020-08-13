import React, { Component } from "react";
import Hls from "hls.js";

var config = {};
class HLSTest extends Component {
  togglePlay = () => {
    this.player && this.player.paused
      ? this.player.play()
      : this.player.pause();
  };

  onEndVideo = () => {
    console.log("ended");
  };
  setProgress = () => {
    if (this.player) {
      if (!this.player.paused) {
        const playedSeconds = this.player.currentTime;
        if (playedSeconds > this.player.duration - 0.5) {
          this.onEndVideo();
        }
        this.props.onProgress && this.props.onProgress(playedSeconds);
      }
    }
  };
  componentDidMount() {
    const { playlist, onFragChange } = this.props;
    if (Hls.isSupported()) {
      var video = this.player;
      var hls = new Hls(config);
      var enc = new TextEncoder("utf-8");
      hls.loadSource(URL.createObjectURL(new Blob([enc.encode(playlist)])));
      hls.attachMedia(video);
      // hls.on(Hls.Events.MANIFEST_PARSED, function() {
      //   video.play();
      // });
      onFragChange && hls.on(Hls.Events.FRAG_CHANGED, onFragChange);

      var intervalId = setInterval(this.setProgress, 250);
      this.setState({ intervalId: intervalId });
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    const { playlist, onProgress, onFragChange, setRef } = this.props;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <video
            ref={c => {
              this.player = c;
              setRef && setRef(c);
            }}
            style={{ width: "100%", height: "100%" }}
            // controls
            muted
          ></video>
        </div>
        {/* <audio
          src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
          controls
          autoPlay
        ></audio> */}

        {this.props.children}
        <div
          style={{ width: "100%", height: "90%", position: "absolute" }}
          onClick={this.togglePlay}
        ></div>
      </div>
    );
  }
}

export default HLSTest;
