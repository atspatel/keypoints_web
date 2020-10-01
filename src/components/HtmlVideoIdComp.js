import React, { Component } from "react";
import ResizeObserver from "rc-resize-observer";
import ReactFitText from "react-fittext";

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

import StackedProgressBar, { DurationText } from "./StackedProgressBar";

import * as action_constants from "../constants/action_constants";
import * as radius_constants from "../constants/radius_constants";
import "../css/app.css";
import { post_activity } from "../functions/post_activity";

import BaseVideoPlayer from "./BaseVideoPlayer";

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
    playedSeconds: 0,

    button_list: [],

    isMenuOpen: false,
    isPaused: true,

    button_id: null,

    currentPopup: null,
    popup_info: null,
    popup_data: null,

    showControl: true,

    partialControl: false
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
      action_constants.playerSeekTo(this, this.props.endLoop, true);
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

  playerSeekTo = (duration, toPlay) => {
    if (this.player) {
      this.player.currentTime = duration;
      toPlay
        ? this.player.play()
        : this.setState({ isPaused: true }, () => this.player.pause());
      setTimeout(() => this.update_button_list(duration), 200);
    }
  };

  onPause = () => {
    this.setState({ playing: false });
  };

  onPlay = () => {
    this.setState({ playing: true, isPaused: false, showControl: true });
  };

  componentDidMount() {
    this.updateDimensions();
    this.setState({ isMute: this.player.muted });
    this.player.addEventListener("pause", this.onPause);
    this.player.addEventListener("play", this.onPlay);

    var intervalId = setInterval(this.setProgress, 250);
    this.setState({ intervalId: intervalId });

    this.props.autoplay && this.player.play();
    post_activity("play", this.props.video_id);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.player.removeEventListener("pause", this.onPause);
    this.player.removeEventListener("play", this.onPlay);
  }

  render_overlay_button(button) {
    const { height, width, button_id } = this.state;
    const RadiusComp = button.shape
      ? radius_constants.RADIUS[button.shape].component
      : null;
    return (
      <div
        key={button.id}
        style={{
          position: "absolute",
          top: button.bbox.top * height,
          left: button.bbox.left * width,
          width: button.bbox.width * width,
          height:
            button.shape === "circle" || button.shape === "square"
              ? button.bbox.width * width
              : button.bbox.height * height,
          backgroundColor: button.background_img ? "rgba(0, 0, 0, 0.3)" : null,
          backgroundImage: button.background_img
            ? `url(${button.background_img})`
            : null,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        onClick={() => {
          if (button.action && button.action.type) {
            post_activity("click", this.props.video_id, button.action.id);
            this.setState({ button_id: button.id }, () =>
              action_constants.ACTION[button.action.type](
                this,
                button.action.data
              )
            );
          }
        }}
      >
        {RadiusComp && <RadiusComp isSelected={button.id === button_id} />}
      </div>
    );
  }

  render_overlay_buttons() {
    const { button_list } = this.state;
    return button_list.map(button => {
      return this.render_overlay_button(button);
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
    action_constants.playerSeekTo(this, 0, true);
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

  closePopUp = () => {
    const { currentPopup, popup_info, popup_data } = this.state;
    currentPopup.onClose && currentPopup.onClose(this.player, popup_data);
    this.setState(
      {
        currentPopup: false,
        popup_info: null,
        popup_data: null,
        button_id: null
      },
      () => {
        if (this.state.playedSeconds < this.player.duration - 0.5) {
          !this.state.isPaused && this.player.play();
        }
      }
    );
    return true;
  };

  renderPopUp() {
    const { currentPopup, popup_info, popup_data } = this.state;
    const { width, height } = this.state;
    return (
      <AnimatedProgressProvider
        easingFunction={easeQuadInOut}
        valueStart={1}
        valueEnd={popup_info.bbox.top}
        duration={popup_info.inDuration ? popup_info.inDuration : 1}
      >
        {value => (
          <div
            style={{
              position: "absolute",
              top: value * height,
              left: popup_info.bbox.left * width,
              width: popup_info.bbox.width * width,
              height: popup_info.bbox.height * height,
              // borderRadius: "1em",
              overflow: "hidden",
              // border: "1px solid black",
              backgroundColor: "rgba(255, 255, 255, 0.9)"
            }}
          >
            {value < popup_info.bbox.top + 0.01 && (
              <currentPopup.component
                data={popup_data}
                isMute={this.player.muted}
                closePopUp={this.closePopUp}
              />
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
          left: 0.85 * width,
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
              action_constants.playerSeekTo(this, 26)
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
              action_constants.playerSeekTo(this, 38)
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
              action_constants.playerSeekTo(this, 72)
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
          left: 0.4 * width,
          width: 0.2 * width,
          height: 0.08 * height,
          borderRadius: "20%",
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={this.closePopUp}
      >
        <p style={{ margin: 0, padding: 0 }}>Back</p>
      </button>
    );
  }

  renderProgressBar() {
    const { playedSeconds, partialControl } = this.state;
    const { timelineMarks } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: partialControl ? "100%" : "20%"
        }}
      >
        {!isNaN(this.player.duration) && (
          <StackedProgressBar
            current={playedSeconds}
            total={this.player.duration}
            marks={timelineMarks ? timelineMarks : []}
            onChangeSlider={s => this.playerSeekTo(s, true)}
          />
        )}
      </div>
    );
  }

  renderPlayPause() {
    return (
      <div
        style={{
          height: "100%",
          margin: "0% 2%"
        }}
        onClick={this.togglePlay}
      >
        {this.player.paused ? (
          <PlayArrowIcon
            style={{
              height: "100%",
              color: "white"
            }}
          />
        ) : (
          <PauseIcon
            style={{
              height: "100%",
              color: "white"
            }}
          />
        )}
      </div>
    );
  }
  renderReplay() {
    return (
      <div
        style={{
          height: "100%",
          margin: "0% 2%"
        }}
        onClick={this.onReplay}
      >
        <ReplayIcon style={{ height: "100%", color: "white" }} />
      </div>
    );
  }
  renderDuration() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          margin: "0% 2%"
        }}
      >
        <DurationText
          current={this.state.playedSeconds}
          total={this.player.duration}
        />
      </div>
    );
  }
  renderMenuIcon() {
    return (
      <div
        style={{
          height: "100%",
          margin: "0% 2%"
        }}
        onClick={this.toggleMenu}
      >
        <ListIcon style={{ height: "100%", color: "white" }} />
      </div>
    );
  }
  renderVolume() {
    return (
      <div
        style={{
          height: "100%",
          margin: "0% 2%"
        }}
        onClick={this.toggleVolume}
      >
        {this.player.muted ? (
          <VolumeOffIcon style={{ height: "100%", color: "white" }} />
        ) : (
          <VolumeUpIcon style={{ height: "100%", color: "white" }} />
        )}
      </div>
    );
  }
  renderFullScreen() {
    return (
      <div
        style={{
          height: "100%",
          margin: "0% 2%"
        }}
        onClick={this.toggleFullScreenDiv}
      >
        {this.isFullScreen() ? (
          <FullscreenExitIcon style={{ height: "100%", color: "white" }} />
        ) : (
          <FullscreenIcon style={{ height: "100%", color: "white" }} />
        )}
      </div>
    );
  }
  renderControlsButtons(showMenu, showFullScreen, showProgressBar) {
    return (
      <div
        style={{
          position: "absolute",
          top: "20%",
          width: "96%",
          height: "80%",
          display: "flex",
          flex: 1,
          alignItems: "center"
        }}
      >
        <div
          style={{
            height: "100%",
            justifyContent: "flex-start",
            display: "flex",
            alignItems: "center"
          }}
        >
          {this.renderPlayPause()}
          {this.renderReplay()}
          {showProgressBar && this.renderDuration()}
        </div>
        <div style={{ height: "100%", display: "flex", flex: 1 }}></div>
        <div
          style={{
            height: "100%",
            justifyContent: "flex-end",
            display: "flex"
          }}
        >
          {showMenu && this.renderMenuIcon()}
          {this.renderVolume()}
          {showFullScreen && this.renderFullScreen()}
        </div>
      </div>
    );
  }
  renderControls(showMenu, showFullScreen, showProgressBar) {
    const { width, height, partialControl } = this.state;
    let control_h = Math.min(Math.max(0.08 * height, 40), 50);
    control_h = partialControl ? 0.25 * control_h : control_h;
    const top = height - control_h;
    return (
      <div
        style={{
          position: "absolute",
          top: top,
          left: 0,
          width: width,
          height: control_h,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {showProgressBar && this.renderProgressBar()}
        {!partialControl &&
          this.renderControlsButtons(showMenu, showFullScreen, showProgressBar)}
      </div>
    );
  }

  onMouseEnter = () => {
    this.setState({ partialControl: false });
  };
  onMouseLeave = () => {
    this.setState({ partialControl: true });
  };

  render() {
    const {
      marginTop,
      marginLeft,
      currentPopup,
      popup_info,
      popup_data,
      showControl
    } = this.state;
    const {
      // video_id,
      maxWidth,
      video_url,
      // autoplay,
      // overlay_buttons,
      showVideoControls,
      showFullScreen,
      showMenu,
      showProgressBar
      // timelineMarks
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
          <BaseVideoPlayer
            source={video_url}
            setPlayerRef={c => (this.player = c)}
            onClick={this.togglePlay}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
        </ResizeObserver>
        <div
          style={{
            position: "absolute",
            top: marginTop,
            left: marginLeft
          }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {(!currentPopup || popup_info.showOverlayButton) &&
            this.render_overlay_buttons()}

          {currentPopup && this.renderPopUp()}
          {currentPopup &&
            popup_info.showCloseButton &&
            this.renderBackButton()}

          {showMenu && this.state.isMenuOpen && this.renderMenu()}
          {showVideoControls &&
            showControl &&
            !currentPopup &&
            this.player &&
            this.renderControls(showMenu, showFullScreen, showProgressBar)}
        </div>
      </div>
    );
  }
}

export default HtmlVideoIdComp;
