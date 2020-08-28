import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import HLSVideo from "./HLSVideo";
import PlaylistButton from "./PlaylistButton";
import "../css/app.css";

import * as constants from "../constants/constants";
import { post_activity, post_duration } from "../functions/post_activity";

const instruction = constants.button_instruction_audio;
const colors = ["#9661BA", "#40C9FF", "#FFA233", "#FF5A7E", "#FFD814"];

class VideoSection extends Component {
  state = {
    paused: true,

    selected_id: null,
    isFirst: true,
    playedSeconds: 0,

    current_index: null,
    current: null,
    secondaryDuration: 0
  };

  playerRef = {};
  changeSelectedIndex = (id, toPlay = true) => {
    const { selected_id, isFirst } = this.state;
    if (isFirst) {
      this.setState({ isFirst: false });
    }
    if (selected_id !== id || this.playerRef[selected_id].player.paused) {
      this.setState({ selected_id: id }, () => {
        this.onUpdateSelectedId(toPlay);
      });
    }
  };
  onUpdateSelectedId = (toPlay = true) => {
    const { selected_id } = this.state;
    const { playlist } = this.props;

    const { duration } = this.playerRef[selected_id].player.duration;
    this.setState({ duration: duration });

    Object.keys(this.playerRef).map(id => {
      if (id.toString() === selected_id.toString()) {
        this.playerRef[id].player.currentTime = 0;
        toPlay &&
          this.setState({ paused: false }, () => {
            this.playerRef[id].player.play();
          });
      } else {
        this.playerRef[id].player.pause();
      }
      return true;
    });
    playlist.map((item, index) => {
      if (item.id === selected_id) {
        this.setState({ current_index: index, current: item });
      }
      return true;
    });
  };

  togglePlay = () => {
    const { selected_id } = this.state;
    const player = this.playerRef[selected_id].player;
    if (player.paused) {
      this.setState({ paused: false }, () => {
        player.play();
      });
    } else {
      this.setState({ paused: true }, () => {
        player.pause();
      });
    }
  };

  onEndMedia = () => {
    const { playlist } = this.props;
    const { current_index } = this.state;
    if (current_index < playlist.length - 1) {
      this.changeSelectedIndex(playlist[current_index + 1].id, true);
    } else {
      this.setState({ paused: true }, () => {
        this.changeSelectedIndex(playlist[0].id, false);
        if (this.secondary_player) {
          this.secondary_player.pause();
          this.secondary_player.currentTime = 0;
        }
      });
    }
  };

  post_duration = () => {
    const { video_id, session_id } = this.props;
    const { secondaryDuration } = this.state;
    const total_duration =
      secondaryDuration + this.secondary_player.currentTime;
    post_duration(video_id, total_duration, session_id);
  };

  onEndSecondaryPlayer = () => {
    const { secondaryDuration } = this.state;
    this.setState(
      {
        secondaryDuration: secondaryDuration + this.secondary_player.duration
      },
      () => {
        this.secondary_player.currentTime = 0;
        this.secondary_player.play();
      }
    );
  };

  duration_interval = () => {
    if (!this.secondary_player.paused) {
      this.post_duration();
    }
  };

  setProgress = () => {
    const { selected_id } = this.state;
    const player = this.playerRef[selected_id].player;
    if (!player.paused) {
      this.secondary_player &&
        this.secondary_player.paused &&
        this.secondary_player.play();
      const playedSeconds = player.currentTime;
      if (playedSeconds > player.duration - 0.15) {
        this.onEndMedia();
      }
      this.setState({
        playedSeconds: playedSeconds
      });
    } else {
      if (this.secondary_player && !this.secondary_player.paused) {
        this.secondary_player.pause();
      }
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { paused } = this.state;
    if (prevState.paused !== paused) {
      if (paused) {
        this.secondary_player && this.secondary_player.pause();
      } else {
        this.secondary_player && this.secondary_player.play();
      }
    }
  }
  componentDidMount() {
    const { playlist } = this.props;
    const first = playlist[0];
    first && this.changeSelectedIndex(first.id, false);

    var intervalId = setInterval(this.setProgress, 100);
    var duration_intervalId = setInterval(this.duration_interval, 1000);
    this.setState({
      intervalId: intervalId,
      duration_intervalId: duration_intervalId
    });

    this.secondary_player &&
      this.secondary_player.addEventListener("pause", this.post_duration);

    this.secondary_player &&
      this.secondary_player.addEventListener(
        "ended",
        this.onEndSecondaryPlayer
      );
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    clearInterval(this.state.duration_intervalId);
    this.post_duration();
    this.secondary_player &&
      this.secondary_player.removeEventListener("paused", this.post_duration);

    this.secondary_player &&
      this.secondary_player.removeEventListener(
        "ended",
        this.onEndSecondaryPlayer
      );
  }
  render() {
    const { paused, selected_id, playedSeconds } = this.state;
    const {
      video_id,
      session_id,
      video_info,
      playlist,
      button_size,
      width,
      lang
    } = this.props;
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={this.togglePlay}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundImage: `url(${video_info.thumbnail})`,
            filter: "blur(5px)",
            backgroundBlendMode: "screen",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -1
          }}
        ></div>
        <HLSVideo
          setRef={c => {
            this.secondary_player = c;
          }}
          setHls={c => {
            this.hls = c;
          }}
          src={video_info.src}
          poster={video_info.thumbnail}
          maxBuffer={30}
          muted={true}
          loop={false}
          // autoPlay={true}
          autoStartLoad={true}
          objectFit="contain"
        />
        {paused && (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "35%",
              width: "30%",
              height: "20%",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255, 0.2)",
              borderRadius: 20
            }}
          >
            <img
              src={constants.kp_play_icon}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              alt=""
            />
          </div>
        )}
        {playlist.map(item => {
          return (
            <audio
              key={item.id}
              ref={c => {
                this.playerRef[item.id] = { player: c };
              }}
              src={item.src}
            />
          );
        })}
        <div
          style={{
            position: "absolute",
            top: "75%",
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {playlist.map((item, index) => {
                const isSelected = selected_id === item.id;
                const duration = this.playerRef[selected_id]
                  ? this.playerRef[selected_id].player.duration
                  : 0;
                return (
                  <PlaylistButton
                    key={item.id}
                    video_id={video_id}
                    session_id={session_id}
                    bgColor={colors[index % colors.length]}
                    size={button_size}
                    item={item}
                    onClick={this.changeSelectedIndex}
                    isSelected={isSelected ? true : false}
                    circularFill={
                      isSelected && duration
                        ? parseInt((playedSeconds * 100) / duration)
                        : 100
                    }
                  />
                );
              })}
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                padding: "0px 10px"
              }}
            >
              <div
                style={{
                  borderBottom: "1px solid white",
                  borderLeft: "1px solid white",
                  borderBottomLeftRadius: 20,
                  flex: 1
                }}
              ></div>
              <div
                style={{
                  color: "white",
                  fontSize: 0.035 * width,
                  backgroundColor: `rgba(0,0,0,0.5)`,
                  borderBottom: "1px solid white",
                  padding: 2
                }}
              >
                {instruction[lang] ? instruction[lang] : instruction.hindi}
              </div>
              <div
                style={{
                  borderBottom: "1px solid white",
                  borderRight: "1px solid white",
                  borderBottomRightRadius: 20,
                  flex: 1
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SharechatAudioPlaylist extends Component {
  state = {
    button_size: 0,
    width: 0,
    session_id: null
  };

  componentDidMount() {
    const { clientWidth } = this.container;
    const { video_id, playlist } = this.props;
    const button_size = Math.min(
      clientWidth / Math.max(playlist.length, 4) - 10,
      80
    );
    const session_id = uuidv4();
    this.setState({
      button_size: button_size,
      width: clientWidth,
      session_id: session_id
    });

    post_activity("load", video_id, null, session_id);
  }

  componentWillUnmount() {
    const { video_id } = this.props;
    const { session_id } = this.state;
    post_activity("unload", video_id, null, session_id);
  }

  render() {
    const { button_size, width, session_id } = this.state;
    const { video_id, lang, title, playlist, video_info } = this.props;
    const v_title = lang && title[lang] ? title[lang] : title.hindi;
    return (
      <div
        ref={c => (this.container = c)}
        style={{
          height: 720,
          width: 500,
          border: "1px solid black",
          position: "relative",
          overflow: "hidden"
        }}
        className="centerH"
        onContextMenu={e => e.preventDefault()}
      >
        <VideoSection
          video_id={video_id}
          session_id={session_id}
          video_info={video_info}
          title={v_title}
          playlist={playlist}
          button_size={button_size}
          width={width}
          lang={lang}
        />
      </div>
    );
  }
}

export default SharechatAudioPlaylist;
