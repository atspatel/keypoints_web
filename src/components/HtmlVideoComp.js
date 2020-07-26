import React, { Component } from "react";
import ResizeObserver from "rc-resize-observer";
import ReactFitText from "react-fittext";

import RadiusDiv from "./RadiusDiv";

import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ReplayIcon from "@material-ui/icons/Replay";

import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

import ListIcon from "@material-ui/icons/List";

import * as acton_constants from "../constants/action_constants";
import * as radius_constants from "../constants/radius_constants";
import "../css/app.css";
import { post_activity } from "../functions/post_activity";

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

    button_id: null,

    showPopup: null,
    popup_data: null,

    showControl: true
  };

  update_button_list = current => {
    const { overlay_buttons } = this.props;
    let active_button_list = overlay_buttons.filter(
      item =>
        (current >= item.start && current <= item.end) ||
        (current >= item.start && item.end === -1)
    );
    this.setState({ button_list: active_button_list });

    active_button_list.map(item => {
      if (
        item.pauseVideo !== null &&
        current >= item.pauseVideo &&
        current <= item.end
      ) {
        this.setState({ showControl: false }, () => this.player.pause());
      }
      return true;
    });
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
  onEndVideo = () => {
    this.props.onEndVideo && this.props.onEndVideo();
    this.props.endLoop &&
      acton_constants.playerSeekTo(this, this.props.endLoop, true);
  };
  setProgress = () => {
    if (this.player) {
      if (!this.player.paused) {
        const playedSeconds = this.player.currentTime;
        this.update_button_list(playedSeconds);
        if (this.state.playedSeconds > this.player.duration - 0.5) {
          this.onEndVideo();
        }
        this.setState({
          playedSeconds: playedSeconds
        });
      }
    }
  };

  // playerSeekTo = (duration, toPlay) => {
  //   if (this.player) {
  //     this.player.currentTime = duration;
  //     toPlay
  //       ? this.player.play()
  //       : this.setState({ isPaused: true }, () => this.player.pause());
  //     setTimeout(() => this.update_button_list(duration), 200);
  //   }
  // };

  onPause = () => {
    this.setState({ playing: false });
  };

  onPlay = () => {
    this.setState({ playing: true, isPaused: false, showControl: true });
  };

  componentDidMount() {
    this.updateDimensions();
    this.player.addEventListener("pause", this.onPause);
    this.player.addEventListener("play", this.onPlay);

    var intervalId = setInterval(this.setProgress, 250);
    this.setState({ intervalId: intervalId });

    post_activity("play", this.props.video_id);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.player.removeEventListener("pause", this.onPause);
    this.player.removeEventListener("play", this.onPlay);
  }

  render_overlay_button(item) {
    const { height, width, button_id } = this.state;
    const RadiusComp =
      item.button && item.button.shape
        ? radius_constants.RADIUS[item.button.shape].component
        : null;
    return (
      <div
        style={{
          position: "absolute",
          top: item.bbox[0] * height,
          left: item.bbox[1] * width,
          width: item.bbox[2] * width,
          height:
            item.button && item.button.shape === "circle"
              ? item.bbox[2] * width
              : item.bbox[3] * height,
          backgroundColor: "rgba(0, 0, 0, 0.0)"
        }}
        onClick={() => {
          if (item.button) {
            post_activity("click", this.props.video_id, item.button.id);
            acton_constants.ACTION[item.button.action](this, item.button);
          }
        }}
      >
        {RadiusComp && <RadiusComp isSelected={item.id === button_id} />}
      </div>
    );
  }

  render_overlay_buttons() {
    const { button_list } = this.state;
    return button_list.map(item => {
      return this.render_overlay_button(item);
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
    acton_constants.playerSeekTo(this, 0, true);
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

  renderPopUp(popup_info, popup_data) {
    const { width, height } = this.state;
    return (
      <AnimatedProgressProvider
        easingFunction={easeQuadInOut}
        valueStart={1}
        valueEnd={popup_info.bbox[0]}
        duration={1}
      >
        {value => (
          <div
            style={{
              position: "absolute",
              top: value * height,
              left: popup_info.bbox[1] * width,
              width: popup_info.bbox[2] * width,
              height: popup_info.bbox[3] * height,
              borderRadius: "1em",
              overflow: "hidden",
              // border: "1px solid black",
              backgroundColor: "rgba(255, 255, 255, 0.9)"
            }}
          >
            {value < popup_info.bbox[0] + 0.01 && (
              <popup_info.component data={popup_data} />
            )}
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
            this.setState({ isMenuOpen: false }, () =>
              acton_constants.playerSeekTo(this, 26)
            )
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
            this.setState({ isMenuOpen: false }, () =>
              acton_constants.playerSeekTo(this, 38)
            )
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
            this.setState({ isMenuOpen: false }, () =>
              acton_constants.playerSeekTo(this, 72)
            )
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
          this.setState(
            { showPopup: false, popup_data: null, button_id: null },
            () => {
              if (this.state.playedSeconds < this.player.duration - 0.5) {
                !this.state.isPaused && this.player.play();
              }
            }
          )
        }
      >
        <p style={{ margin: 0, padding: 0 }}>Back</p>
      </button>
    );
  }
  renderControls(showMenu, showFullScreen, showInstruction) {
    const { width, height } = this.state;
    const control_h = Math.min(0.08 * height, 40);
    const top = height - control_h;
    return (
      <div
        style={{
          position: "absolute",
          top: top,
          left: 0 * width,
          width: width,
          height: control_h,
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
        {this.state.button_list.length > 0 && showInstruction && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "20%",
              width: "50%",
              height: "90%",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p style={{ color: "white" }}>Click {"  "}</p>
            <div
              style={{
                height: "90%",
                margin: "0% 2%",
                position: "relative",
                display: "flex",
                flex: 1,
                maxWidth: "30%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <RadiusDiv />
              <p style={{ margin: 0, padding: 0, color: "white" }}>Box</p>
            </div>
            <p style={{ color: "white" }}>{"  "} to Know More</p>
          </div>
        )}
        {showMenu && (
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
            <ListIcon
              style={{ height: "100%", width: "100%", color: "white" }}
            />
          </div>
        )}

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
        {showFullScreen && (
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
        )}
      </div>
    );
  }

  render() {
    const {
      marginTop,
      marginLeft,
      showPopup,
      popup_data,
      showControl
    } = this.state;
    const {
      // video_id,
      maxWidth,
      video_url,
      // overlay_buttons,
      showInstruction,
      showFullScreen,
      showMenu
      // endLoop
    } = this.props;
    return (
      <div
        id="div1"
        ref={c => (this.fullscreenDiv = c)}
        className="centerH"
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          maxWidth: maxWidth ? maxWidth : null,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <ResizeObserver onResize={this.updateDimensions}>
          <video ref={c => (this.player = c)} width="100%" height="100%">
            <source
              src={video_url}
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
          {(!showPopup || showPopup.showOverlayButtons) &&
            this.render_overlay_buttons()}

          {showPopup && this.renderBackButton()}
          {showPopup && this.renderPopUp(showPopup, popup_data)}

          {showMenu && this.state.isMenuOpen && this.renderMenu()}
          {showControl &&
            !showPopup &&
            this.player &&
            this.renderControls(showMenu, showFullScreen, showInstruction)}
        </div>
      </div>
    );
  }
}

export default HtmlVideoComp;
