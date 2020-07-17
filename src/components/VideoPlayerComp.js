import React, { Component } from "react";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";
import * as constants from "../constants";
import * as styles from "../css/app.module.css";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";

// [top, left, w, h]
const transparent_button = [
  [0, 90, "youtube", constants.youtube_url, [0, 0.91, 0.09, 0.16]],
  [75, 80, "instagram", constants.instagram_url, [0.9, 0.01, 0.2, 0.08]],
  [17.5, 23.5, "note8", constants.redmi_link, [0.09, 0, 0.19, 0.09]],
  [33, 37, "realme5", constants.realme_link, [0.09, 0, 0.13, 0.09]],
  [58, 62, "note8", constants.redmi_link, [0.77, 0.81, 0.19, 0.16]],
  [58, 62, "realme5", constants.realme_link, [0.77, 0, 0.13, 0.16]],
  [63, 65, "note8", constants.redmi_link, [0.77, 0, 0.19, 0.16]],
  [65, 67, "realme5", constants.realme_link, [0.77, 0, 0.13, 0.16]],
  [70, 77, "note8", constants.whatsapp_buy_redme, [0.07, 0, 0.19, 0.08]],
  [78, 83, "realme5", constants.whatsapp_buy_realme, [0.07, 0, 0.13, 0.08]],
  [87, 90, "note8", constants.whatsapp_buy_realme, [0.67, 0.81, 0.19, 0.08]],
  [87, 90, "realme5", constants.whatsapp_buy_redme, [0.67, 0, 0.13, 0.08]],
  [90, 94, "keypoints", constants.keypoints_url, [0.72, 0.85, 0.13, 0.2]]
];

const topic_lap = {
  display: 13,
  picture: 42,
  video: 67
};

class VideoPlayerComp extends Component {
  state = {
    height: null,
    width: null,
    playing: true,
    playedSeconds: 0,

    currentOverlay: null,
    showInstagram: false,
    button_list: []
  };

  update_button_list = current => {
    let active_button_list = transparent_button.filter(
      item => current >= item[0] && current <= item[1]
    );
    this.setState({ button_list: active_button_list });
  };

  onProgress = e => {
    const { playedSeconds } = e;
    this.update_button_list(playedSeconds);
    this.setState({ playedSeconds });
  };
  componentDidUpdate() {
    const { clientHeight, clientWidth } = this.playerDiv;
    const { height, width } = this.state;
    console.log(clientHeight, clientWidth);
    if (height !== clientHeight || width !== clientWidth) {
      this.setState({ height: clientHeight, width: clientWidth });
    }

    const { playedSeconds, currentOverlay, playing } = this.state;
    if (playing) {
      if (playedSeconds >= 8.0 && playedSeconds <= 12.0) {
        if (currentOverlay !== "features") {
          this.setState({ currentOverlay: "features" });
        }
      } else if (playedSeconds >= 27 && playedSeconds <= 33) {
        if (currentOverlay !== "widevine") {
          this.setState({ currentOverlay: "widevine" });
        }
      } else if (playedSeconds >= 39 && playedSeconds <= 42) {
        if (currentOverlay !== "widevine") {
          this.setState({ currentOverlay: "widevine" });
        }
      } else if (playedSeconds >= 90) {
        if (currentOverlay !== "contact") {
          this.setState({ currentOverlay: "contact" });
        }
      } else if (currentOverlay !== null) {
        this.setState({ currentOverlay: null });
      }
    }
  }

  updateDimensions = () => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    let playerW = Math.min(winWidth, 720);
    if (0.5625 * playerW < winHeight) {
      this.setState({ width: playerW, height: 0.5625 * playerW });
    } else {
      this.setState({ width: winHeight / 0.5625, height: winHeight });
    }
  };

  playerSeekTo = duration => {
    this.player && this.player.seekTo(duration);
    this.setState({ currentOverlay: null, playing: true });
  };

  togglePlay = () => {
    this.setState({ playing: !this.state.playing });
  };

  openUrlInTab = url => {
    this.setState({ playing: false });
    window.open(url, "_blank");
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render_contact() {
    const { currentOverlay, width, height } = this.state;
    return (
      currentOverlay === "contact" && (
        <div
          style={{
            position: "absolute",
            top: 0.2 * height,
            left: 0.3 * width,
            width: 0.4 * width
          }}
        >
          <div
            style={{
              borderRadius: 10,
              border: "1px solid black",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              flex: 1,
              padding: 5,
              marginBottom: 0.16 * height
            }}
          >
            <a href="https://goo.gl/maps/wuVqMUjd4PhSh2dPA" target="_blank">
              Visit Store
            </a>
          </div>
          <div
            style={{
              borderRadius: 10,
              border: "1px solid black",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              display: "flex",
              flex: 1
            }}
          >
            <div
              style={{ flex: 1, border: "1px solid black" }}
              onClick={() => this.openUrlInTab(constants.whatsapp_url)}
            >
              <WhatsAppIcon style={{ color: "green", margin: 5 }} />
            </div>
            <div style={{ flex: 1, border: "1px solid black" }}>
              <a href="tel: +918953457318">
                <CallIcon style={{ color: "blue", margin: 5 }} />
              </a>
            </div>
          </div>
        </div>
      )
    );
  }

  render_widevine() {
    const { currentOverlay, width, height } = this.state;
    return (
      currentOverlay === "widevine" && (
        <div
          style={{
            position: "absolute",
            top: 0.1 * height,
            left: 0.3 * width,
            width: 0.4 * width,
            borderRadius: 10,
            border: "1px solid black",
            backgroundColor: "rgba(255, 255, 255, 0.7)"
          }}
        >
          <div style={{ fontSize: width > 500 ? 16 : 10 }}>
            Know more about Widevine
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <div
              style={{
                flex: 1,
                borderRadius: 10,
                border: "1px solid black",
                height: 0.1 * height,
                fontSize: width > 500 ? 16 : 10
              }}
              onClick={() => this.openUrlInTab(constants.widevine_hindi)}
            >
              In Hindi
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: 10,
                border: "1px solid black",
                height: 0.1 * height,
                fontSize: width > 500 ? 16 : 10
              }}
              onClick={() => this.openUrlInTab(constants.widevine_english)}
            >
              In English
            </div>
          </div>
        </div>
      )
    );
  }

  render_feature_options() {
    const { currentOverlay, width, height } = this.state;
    const h = (0.8 * height) / 5;
    return currentOverlay === "features" ? (
      <div
        style={{
          position: "absolute",
          top: 0.1 * height,
          left: 0.1 * width,
          width: 0.8 * width,
          height: 0.8 * height,
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        }}
        className={styles.centerH}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            height: 2 * h,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p style={{ fontSize: width > 500 ? 24 : 12, color: "black" }}>
            You can watch comparision about specific feature
          </p>
        </div>
        <div
          className={styles.overlayButton}
          style={{
            height: h,
            padding: 0,
            margin: 0
          }}
        >
          <Button
            color="primary"
            onClick={() => {
              this.playerSeekTo(topic_lap.display);
            }}
          >
            Display
          </Button>
        </div>
        <div
          className={styles.button}
          style={{
            height: h,
            padding: 0,
            margin: 0
          }}
        >
          <Button
            color="primary"
            onClick={() => {
              this.playerSeekTo(topic_lap.picture);
            }}
          >
            Camera-Picture
          </Button>
        </div>
        <div
          className={styles.button}
          style={{
            height: h,
            padding: 0,
            margin: 0
          }}
        >
          <Button
            color="primary"
            onClick={() => {
              this.playerSeekTo(topic_lap.video);
            }}
          >
            Camera-Videos
          </Button>
        </div>
      </div>
    ) : (
      <div
        style={{
          position: "absolute",
          top: 0.6 * height,
          left: 0.85 * width,
          width: 0.05 * width,
          height: 0.05 * width,
          borderRadius: 0.025 * width,
          border: "1px solid black",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          zIndex: 21323434
        }}
        onClick={() => {
          this.setState({ currentOverlay: "features", playing: false });
        }}
      ></div>
    );
  }

  render_transparent_button(box, url) {
    const { height, width } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          top: box[0] * height,
          left: box[1] * width,
          width: box[2] * width,
          height: box[3] * height,
          border: "1px solid black",
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        }}
        onClick={() => {
          this.openUrlInTab(url);
        }}
      />
    );
  }

  render_transparent_buttons() {
    const { button_list } = this.state;
    return button_list.map(item => {
      return this.render_transparent_button(item[4], item[3]);
    });
  }

  render() {
    const { width, height } = this.state;
    // console.log(width, height);
    return width ? (
      <div style={{ height: 500, width: 200 }} ref={c => (this.playerDiv = c)}>
        <div style={{ position: "relative" }}>
          <ReactPlayer
            muted
            controls
            width="100%"
            height="100%"
            playing={this.state.playing}
            url={constants.video_url}
            style={{
              position: "relative",
              backgroundColor: "black"
            }}
            progressInterval={250}
            onProgress={this.onProgress}
            ref={c => (this.player = c)}
          >
            <div
              style={{
                position: "reltive",
                width: "100%",
                height: "100%"
              }}
              ref={c => (this.playerDiv = c)}
            ></div>
          </ReactPlayer>
          {this.render_feature_options()}
          {this.render_widevine()}
          {this.render_contact()}
          {this.render_transparent_buttons()}
        </div>
      </div>
    ) : (
      // </div>
      <div className={styles.centerH} />
    );
  }
}

export default VideoPlayerComp;
