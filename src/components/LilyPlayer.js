import React, { Component } from "react";
import ResizeObserver from "rc-resize-observer";

import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ReplayIcon from "@material-ui/icons/Replay";

import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

import StackedProgressBar, { DurationText } from "./StackedProgressBar";

import * as action_constants from "../constants/action_constants";
import * as popup_constants from "../constants/popup_constants";
import * as radius_constants from "../constants/radius_constants";

import "../css/app.css";
import { post_activity } from "../functions/post_activity";
import { get_quiz_data } from "../functions/lily_functions";

import BaseVideoPlayer from "./BaseVideoPlayer";

const { innerHeight, innerWidth } = window;

class LilyPlayer extends Component {
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

    isPaused: true,

    button_id: null,

    currentPopup: null,
    popup_info: null,
    popup_data: null,
    popup_anim: null,

    showControl: true,

    partialControl: false,

    quiz: null
  };

  update_button_list = current => {
    const { overlay_buttons } = this.props;
    if (overlay_buttons && overlay_buttons.length > 0) {
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
    }
  };

  checkQuiz = current => {
    const { quiz } = this.state;
    if (quiz) {
      // console.log("isQuiz: yes :: ", quiz.start_time, current);
      if (current > quiz.start_time) {
        const action = {
          type: action_constants.ACTION_LILY_QUIZ,
          data: {
            popup_info: {
              popupType: popup_constants.POPUP_LILY_QUIZ
            },
            data: {
              end:
                quiz.end_time === -1
                  ? -1
                  : quiz.end_time < current
                  ? current
                  : quiz.end_time,
              video: quiz.credit_video,
              quiz_type: "credit"
            }
          }
        };
        action_constants.ACTION[action.type](this, action.data);
      }
    } else {
      const { session_id, episode } = this.props;
      get_quiz_data(session_id, episode, current).then(response => {
        this.setState({ quiz: response.data });
      });
    }
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
        this.checkQuiz(playedSeconds);
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
        onClick={e => {
          e.stopPropagation();
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
    // this.state.currentPopup && this.closePopUp();
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

  onReplay = () => {
    action_constants.playerSeekTo(this, 0, true);
  };

  onVote = item => {
    this.setState(
      {
        quiz: null,
        popup_anim: "out"
      },
      () => {
        setTimeout(() => {
          this.closePopUp();
        }, 2000);
      }
    );
  };

  toggleVolume = () => {
    if (this.player) {
      this.player.muted = !this.player.muted;
      this.setState({ isMute: this.player.muted });
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
    const { currentPopup, popup_info, popup_data, popup_anim } = this.state;
    const { width, height, quiz } = this.state;
    const { session_id } = this.props;
    return (
      <AnimatedProgressProvider
        easingFunction={easeQuadInOut}
        valueStart={popup_anim === "out" ? 1 : 0}
        valueEnd={popup_anim === "out" ? 0 : 1}
        duration={popup_info.inDuration ? popup_info.inDuration : 1}
      >
        {value => (
          <div
            ref={c => (this.popup_div = c)}
            style={{
              position: "absolute",
              top: popup_info.bbox.top * height,
              left: popup_info.bbox.left * width,
              width: popup_info.bbox.width * width,
              height: popup_info.bbox.height * height,
              borderRadius: "1em",
              overflow: "hidden",
              opacity: value,
              backgroundImage: `url(${popup_info.background_image})`,
              backgroundPositon: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            onClick={e => e.stopPropagation()}
          >
            <currentPopup.component
              data={popup_data}
              isMute={this.player.muted}
              closePopUp={this.closePopUp}
              onVote={this.onVote}
              inDuration={popup_info.inDuration}
              video={popup_data.video}
              quiz={quiz}
              anim_value={value}
              session={session_id}
            />
          </div>
        )}
      </AnimatedProgressProvider>
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
        onClick={e => e.stopPropagation()}
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
      showControl,
      height,
      width
    } = this.state;
    const {
      // video_id,
      session_id,
      maxWidth,
      playerHeight,
      video_url,
      thumbnail,

      setPlayerRef,
      setHlsRef,
      maxBuffer,
      isMuted,
      loop,
      autoplay,
      autoStartLoad,
      // overlay_buttons,
      showVideoControls,
      showFullScreen,
      showMenu,
      showProgressBar,
      // timelineMarks
      // endLoop
      // togglePlay
      style
    } = this.props;
    return (
      <div
        id="div1"
        ref={c => (this.fullscreenDiv = c)}
        className="centerH"
        style={{
          width: "100%",
          height: playerHeight ? playerHeight : "100%",
          alignItems: "center",
          maxWidth: maxWidth ? maxWidth : null,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <ResizeObserver onResize={this.updateDimensions}>
          <BaseVideoPlayer
            source={video_url}
            setPlayerRef={c => {
              this.player = c;
              setPlayerRef && setPlayerRef(c);
            }}
            setHlsRef={setHlsRef}
            onClick={this.togglePlay}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            maxBuffer={maxBuffer}
            isMuted={isMuted}
            loop={loop}
            autoPlay={autoplay}
            autoStartLoad={autoStartLoad}
            onLoadedData={this.updateDimensions}
            style={style}
          />
        </ResizeObserver>
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: marginTop,
            left: marginLeft
            // height: height,
            // width: width
          }}
          onClick={e => e.stopPropagation()}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {(!currentPopup || popup_info.showOverlayButton) &&
            this.render_overlay_buttons()}

          {currentPopup && this.renderPopUp()}
          {currentPopup &&
            popup_info.showCloseButton &&
            this.renderBackButton()}
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

export default LilyPlayer;
