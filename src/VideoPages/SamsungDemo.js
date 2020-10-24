import React, { Component } from "react";
import Hls from "hls.js";
import * as config from "../config";
const BASE_DIR = config.BASE_DIR;
const url_1080 = `${BASE_DIR}/samsung_demo/videoplayback_1080.m3u8`;
const url_4320 = `${BASE_DIR}/samsung_demo/videoplayback_4320.m3u8`;

const img_1080 = `${BASE_DIR}/samsung_demo/QLED_002.png`;
const img_4320 = `${BASE_DIR}/samsung_demo/QLED_001.png`;

const { innerWidth, innerHeight } = window;

class FullScreenHLSVideo extends Component {
  componentDidMount() {
    const { src } = this.props;
    if (Hls.isSupported()) {
      var video = this.player;
      var hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("canplay", function() {
        video.play();
      });
    }
  }
  render() {
    const { setRef, name, src } = this.props;
    return (
      <video
        ref={c => {
          this.player = c;
          setRef(name, c);
        }}
        width={innerWidth}
        height={innerHeight}
      ></video>
    );
  }
}

class SamsungDemo extends Component {
  state = {
    x: parseInt(0.5 * innerWidth),
    y: parseInt(0.5 * innerWidth),
    clicked: false,

    started: false
  };

  syncVideo = () => {
    if (
      this.player2.currentTime - this.player1.currentTime > 0.02 ||
      this.player1.currentTime - this.player2.currentTime > 0.02
    ) {
      this.player1.currentTime = this.player2.currentTime;
    }
  };
  _onMouseMove = e => {
    this.state.clicked && this.setState({ x: e.clientX });
  };

  _onTouchMove = e => {
    this.setState({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };
  setRef = (key, c) => {
    this[key] = c;
  };

  startVideo() {
    setTimeout(() => {
      this.player1.play();
      this.player2.play();
      this.setState({ started: true });
    }, 1000);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.player1.play();
    //   this.player2.play();
    // }, 2000);
    var intervalId = setInterval(this.syncVideo, 10);
    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    return (
      <div
        ref={c => (this.container = c)}
        onMouseMove={this._onMouseMove}
        onTouchMove={this._onTouchMove}
        onMouseDown={() => {
          this.setState({ clicked: true });
        }}
        onMouseUp={() => {
          this.setState({ clicked: false });
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: this.state.x - 2,
            width: 4,
            height: "100%",
            backgroundColor: "yellow",
            zIndex: 3
          }}
        />
        {!this.state.started && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 4
            }}
            onClick={() => this.startVideo()}
          ></div>
        )}
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            width: this.state.x,
            overflow: "hidden"
          }}
        >
          <img
            src={img_4320}
            style={{
              height: 100,
              width: 200,
              position: "absolute",
              margin: 10
            }}
            alt=""
          />
          <FullScreenHLSVideo
            name={"player1"}
            src={url_4320}
            setRef={this.setRef}
          />
        </div>
        <div style={{ position: "absolute", zIndex: 1 }}>
          <img
            src={img_1080}
            style={{
              height: 100,
              width: 200,
              position: "absolute",
              right: 0,
              margin: 10
            }}
            alt=""
          />
          <FullScreenHLSVideo
            name={"player2"}
            src={url_1080}
            setRef={this.setRef}
          />
        </div>
      </div>
    );
  }
}

export default SamsungDemo;
