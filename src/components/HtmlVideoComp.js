import React, { Component } from "react";
import ResizeObserver from "rc-resize-observer";
import ReactFitText from "react-fittext";

import * as constants from "../constants/constants";
import * as buttons from "../constants/button_constants";
import * as phone_info from "../constants/phone_info";
import * as styles from "../css/app.module.css";

import { Helmet } from "react-helmet";

import RadiusDiv from "./RadiusDiv";
import RadiusDivCircle from "./RadiusDivCircle";

import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

import SpecificationPopUp from "./SpecificationPopUp";
import CameraPopUp from "./CameraPopUp";
import ProcessorPopUp from "./ProcessorPopUp";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ReplayIcon from "@material-ui/icons/Replay";

import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

import ListIcon from "@material-ui/icons/List";

const transparent_button = buttons.transparent_button;

const popup_dimension = {
  // [top, left, width, height], keep 0.08 at bottom for back button
  specification_popup: [0.02, 0.05, 0.9, 0.9],
  camera_popup: [0.02, 0.05, 0.9, 0.9],
  processor_popup: [0.24, 0.345, 0.31, 0.68]
};

class HtmlVideoComp extends Component {
  state = {
    videoHeight: null,
    videoWidth: null,

    marginTop: null,
    marginLeft: null,

    height: null,
    width: null,

    playing: true,
    playedSeconds: 0,

    button_list: [],

    isMenuOpen: false,
    isPaused: true,
    isMute: false,

    phone_id: null
  };

  update_button_list = current => {
    let active_button_list = transparent_button.filter(
      item => current >= item.start && current <= item.end
    );
    this.setState({ button_list: active_button_list });
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
          marginLeft: marginLeft
        });
      }
      this.setState({ videoHeight: videoHeight, videoWidth: videoWidth });
    }
  };

  setProgress = () => {
    if (this.player) {
      if (!this.player.paused) {
        const playedSeconds = this.player.currentTime;
        this.update_button_list(playedSeconds);
        this.setState({
          playedSeconds: playedSeconds
        });
      }
    }
  };

  playerSeekTo = (duration, toPlay) => {
    if (this.player) {
      this.player.currentTime = duration;
      toPlay
        ? this.player.play()
        : this.setState({ isPaused: true }, () => this.player.pause());
      setTimeout(() => this.update_button_list(duration), 200);
    }
  };

  openUrlInTab = url => {
    this.setState({ playing: false });
    window.open(url, "_blank");
  };

  openPopUp = (type, phone_id) => {
    this.player.pause();
    this.setState({
      showPopup: type,
      phone_id: phone_id,
      playing: false
    });
  };

  onPause = () => {
    this.setState({ playing: false });
  };

  onPlay = () => {
    this.setState({ playing: true, isPaused: false });
  };

  componentDidMount() {
    this.updateDimensions();
    this.player.addEventListener("pause", this.onPause);
    this.player.addEventListener("play", this.onPlay);

    var intervalId = setInterval(this.setProgress, 500);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.player.removeEventListener("pause", this.onPause);
    this.player.removeEventListener("play", this.onPlay);
  }

  render_transparent_button(item) {
    const { height, width, phone_id } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          top: item.bbox[0] * height,
          left: item.bbox[1] * width,
          width: item.bbox[2] * width,
          height:
            item.button_type === "circle"
              ? item.bbox[2] * width
              : item.bbox[3] * height,
          backgroundColor: "rgba(0, 0, 0, 0.0)"
        }}
        onClick={() => {
          if (item.action_type === "specification_popup") {
            this.openPopUp("specification_popup", item.id);
          } else if (item.action_type === "camera_popup") {
            this.openPopUp("camera_popup", item.id);
          } else if (item.action_type === "processor_popup") {
            this.openPopUp("processor_popup", item.id);
          } else if (item.action_type === "open_url") {
            this.openUrlInTab(item.url);
          }
        }}
      >
        {item.button_type === "circle" ? (
          <RadiusDivCircle />
        ) : (
          <RadiusDiv isSelected={item.id === phone_id} />
        )}
      </div>
    );
  }

  render_transparent_buttons() {
    const { button_list } = this.state;
    return button_list.map(item => {
      return this.render_transparent_button(item);
    });
  }

  isFullScreen = () => {
    return (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    );
  };
  toggleFullScreenDiv = () => {
    var fullscreenElement = this.isFullScreen();

    if (fullscreenElement) {
      document.webkitExitFullscreen();
    } else {
      this.fullscreenDiv.requestFullscreen();
    }
  };

  togglePlay = () => {
    if (this.player) {
      if (this.player.paused) {
        this.player.play();
        this.setState({ isPaused: false });
      } else {
        this.player.pause();
        this.setState({ isPaused: true });
      }
    }
  };

  onReplay = () => {
    this.playerSeekTo(0, true);
  };

  toggleVolume = () => {
    if (this.player) {
      this.player.muted = !this.player.muted;
      this.setState({ isMute: this.player.muted });
    }
  };

  toggleMenu = () => {
    if (this.state.isMenuOpen) {
      this.setState({ isMenuOpen: false }, () => {
        !this.state.isPaused && this.player.play();
      });
    } else {
      this.setState({ isMenuOpen: true }, () => {
        this.player.pause();
      });
    }
  };

  renderPopUp(popup_type) {
    const { width, height, phone_id } = this.state;
    const phone = phone_id ? phone_info[phone_id] : null;
    let popup = null;
    if (phone) {
      if (popup_type === "specification_popup") {
        popup = <SpecificationPopUp phone={phone} />;
      } else if (popup_type === "camera_popup") {
        popup = <CameraPopUp camera_images={phone.camera_images} />;
      } else if (popup_type === "processor_popup") {
        popup = <ProcessorPopUp processor_image={phone.processor} />;
      }
    }
    return (
      <AnimatedProgressProvider
        easingFunction={easeQuadInOut}
        valueStart={1}
        valueEnd={popup_dimension[popup_type][0]}
        duration={1}
      >
        {value => (
          <div
            style={{
              position: "absolute",
              top: value * height,
              left: popup_dimension[popup_type][1] * width,
              width: popup_dimension[popup_type][2] * width,
              height: popup_dimension[popup_type][3] * height,
              borderRadius: "1em",
              overflow: "hidden",
              border: "1px solid black",
              backgroundColor: "rgba(255, 255, 255, 0.9)"
            }}
          >
            {value < popup_dimension[popup_type][0] + 0.01 && popup}
          </div>
        )}
      </AnimatedProgressProvider>
    );
  }
  renderMenu() {
    const { width, height } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          top: 0.71 * height,
          left: 0.7 * width,
          width: 0.1 * width,
          height: 0.21 * height,

          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            flex: 1,
            margin: "1%",
            width: "100%",
            borderRadius: 0.01 * width,
            backgroundColor: "rgba(255, 255, 255, 1)"
          }}
          onClick={() =>
            this.setState({ isMenuOpen: false }, () => this.playerSeekTo(26))
          }
        >
          <ReactFitText compressor={0.5}>
            <p
              style={{
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Camera
            </p>
          </ReactFitText>
        </div>
        <div
          style={{
            flex: 1,
            margin: "1%",
            width: "100%",
            borderRadius: 0.01 * width,
            backgroundColor: "rgba(255, 255, 255, 1)"
          }}
          onClick={() =>
            this.setState({ isMenuOpen: false }, () => this.playerSeekTo(38))
          }
        >
          <ReactFitText compressor={0.5}>
            <p
              style={{
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Processor
            </p>
          </ReactFitText>
        </div>
        <div
          style={{
            flex: 1,
            margin: "1%",
            width: "100%",
            borderRadius: 0.01 * width,
            backgroundColor: "rgba(255, 255, 255, 1)"
          }}
          onClick={() =>
            this.setState({ isMenuOpen: false }, () => this.playerSeekTo(72))
          }
        >
          <ReactFitText compressor={0.5}>
            <p
              style={{
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Shop
            </p>
          </ReactFitText>
        </div>
      </div>
    );
  }
  renderBackButton() {
    const { width, height } = this.state;
    return (
      <button
        type="button"
        style={{
          position: "absolute",
          top: 0.92 * height,
          left: 0.45 * width,
          width: 0.1 * width,
          height: 0.08 * height,
          borderRadius: "20%",
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={() =>
          this.setState({ showPopup: false, phone_id: null }, () => {
            if (this.state.playedSeconds < this.player.duration - 0.5) {
              !this.state.isPaused && this.player.play();
            }
          })
        }
      >
        <KeyboardArrowLeftIcon style={{ color: "black", margin: 5 }} />
      </button>
    );
  }
  renderControls() {
    const { width, height } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          top: 0.92 * height,
          left: 0 * width,
          width: width,
          height: 0.08 * height,
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "3%",
            width: "5%",
            height: "90%"
          }}
          onClick={this.togglePlay}
        >
          {this.player.paused ? (
            <PlayArrowIcon
              style={{ height: "100%", width: "100%", color: "white" }}
            />
          ) : (
            <PauseIcon
              style={{ height: "100%", width: "100%", color: "white" }}
            />
          )}
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            width: "5%",
            height: "90%"
          }}
          onClick={this.onReplay}
        >
          <ReplayIcon
            style={{ height: "100%", width: "100%", color: "white" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "75%",
            width: "5%",
            height: "90%"
          }}
          onClick={this.toggleMenu}
        >
          <ListIcon style={{ height: "100%", width: "100%", color: "white" }} />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "83%",
            width: "5%",
            height: "90%"
          }}
          onClick={this.toggleVolume}
        >
          {this.player.muted ? (
            <VolumeOffIcon
              style={{ height: "100%", width: "100%", color: "white" }}
            />
          ) : (
            <VolumeUpIcon
              style={{ height: "100%", width: "100%", color: "white" }}
            />
          )}
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "90%",
            width: "5%",
            height: "90%"
          }}
          onClick={this.toggleFullScreenDiv}
        >
          {this.isFullScreen() ? (
            <FullscreenExitIcon
              style={{ height: "100%", width: "100%", color: "white" }}
            />
          ) : (
            <FullscreenIcon
              style={{ height: "100%", width: "100%", color: "white" }}
            />
          )}
        </div>
      </div>
    );
  }

  render() {
    const { marginTop, marginLeft, showPopup } = this.state;
    return (
      <div
        id="div1"
        ref={c => (this.fullscreenDiv = c)}
        className={styles.centerH}
        style={{
          alignItems: "center",
          maxWidth: 900,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Helmet>
          <title>Realme Shopable Video</title>
          <meta name="description" content="Smart way to buy Smartphone." />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="Smart way to buy Smartphone."
          />
          <meta
            property="og:image:secure_url"
            itemprop="image"
            content={constants.url_thumbnail}
          />
          <meta property="og:title" content="Realme Shopable Video" />
          <meta
            property="og:description"
            content="Smart way to buy Smartphone."
          />
          <meta property="og:url" content={constants.kp_url} />
        </Helmet>
        <ResizeObserver onResize={this.updateDimensions}>
          <video ref={c => (this.player = c)} width="100%" height="100%">
            <source
              src={constants.video_url}
              type="video/mp4"
              ref={c => (this.video = c)}
            />
          </video>
        </ResizeObserver>
        <div
          style={{
            position: "absolute",
            top: marginTop,
            left: marginLeft
          }}
        >
          {!showPopup && this.player && this.renderControls()}
          {(!showPopup || showPopup === "processor_popup") &&
            this.render_transparent_buttons()}

          {showPopup && this.renderBackButton()}
          {showPopup && this.renderPopUp(showPopup)}

          {this.state.isMenuOpen && this.renderMenu()}
        </div>
      </div>
    );
  }
}

export default HtmlVideoComp;
