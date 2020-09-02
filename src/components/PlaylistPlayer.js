import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import HLSVideo from "./HLSVideo";
import PlaylistButton from "./PlaylistButton";
import "../css/app.css";

import { post_activity, post_duration } from "../functions/post_activity";
import { get_playlist_data } from "../functions/mediaPlaylistFunc";

import * as constants from "../constants/constants";
import * as sharechat_constants from "../constants/sharechat/sharechat_constants";

const colors = ["#9661BA", "#40C9FF", "#FFA233", "#FF5A7E", "#FFD814"];
const borderColor = "#494949";

const instruction = constants.button_instruction;

const playlist_id = "4d004ef0-3220-45ac-8f0c-324f8c5e2fe4";

class VideoPlayer extends Component {
  componentDidMount = () => {
    const { item } = this.props;
    this.props.setRef(item.id, {
      div: this.div,
      player: this.player,
      hls: this.hls
    });
  };
  render() {
    const { item, isMuted, width } = this.props;
    return (
      <div
        ref={c => (this.div = c)}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          display: "none",
          top: 0,
          left: 0
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundImage: `url(${item.media_info.thumbnail})`,
            filter: "blur(5px)",
            backgroundBlendMode: "screen",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.4)"
          }}
        >
          <HLSVideo
            setRef={c => {
              this.player = c;
            }}
            setHls={c => {
              this.hls = c;
            }}
            src={item.media_info.src}
            poster={item.media_info.thumbnail}
            maxBuffer={30}
            muted={isMuted}
            loop={false}
            autoPlay={false}
            autoStartLoad={false}
            objectFit="contain"
          />
        </div>
        {item.title_info && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p
              style={{
                margin: "0px 10px",
                padding: 0,
                fontSize: 0.075 * width,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.3)"
              }}
            >
              {item.title_info.title_text}
            </p>
          </div>
        )}
      </div>
    );
  }
}

class VideoTitle extends Component {
  render() {
    const { title_info, width } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "10%",
          width: "100%",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#494949",
          padding: "2%"
        }}
      >
        <img
          src={sharechat_constants.sharechat_logo}
          alt=""
          style={{
            height: "100%",
            objectFit: "contain"
          }}
        />
        <p
          style={{
            margin: "0px 10px",
            padding: 0,
            fontSize: 0.045 * width,
            color: "white"
          }}
        >
          {title_info.title_text}
        </p>
      </div>
    );
  }
}

class VideoSection extends Component {
  state = {
    selected_id: null,
    current_index: null,
    playedSeconds: 0,
    paused: true,

    intervalId: null,

    isFirst: true,
    audioDuration: 0.0
  };

  playerRef = {};
  changeSelectedIndex = (id, toPlay = true) => {
    console.log(id, this.playerRef);
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

  post_duration = () => {
    const { video_id, session_id } = this.props;
    const { audioDuration } = this.state;
    const total_duration = audioDuration + this.secondary_player.currentTime;
    post_duration(video_id, total_duration, session_id);
  };
  update_audioDuration = () => {
    const { audioDuration } = this.state;
    this.setState(
      {
        audioDuration: audioDuration + this.secondary_player.duration
      },
      () => {
        this.secondary_player.currentTime = 0;
        this.secondary_player.play();
      }
    );
  };
  duration_interval = () => {
    if (this.secondary_player && !this.secondary_player.paused) {
      this.post_duration();
    }
  };

  onEndVideo = () => {
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

  setProgress = () => {
    const { selected_id } = this.state;
    const player = this.playerRef[selected_id].player;
    if (!player.paused) {
      this.secondary_player &&
        this.secondary_player.paused &&
        this.secondary_player.play();
      const playedSeconds = player.currentTime;
      if (playedSeconds > player.duration - 0.1) {
        this.onEndVideo();
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

  setRef = (id, ref) => {
    this.playerRef[id] = ref;
  };

  togglePlay = () => {
    const { selected_id, isFirst } = this.state;
    const { video_id, session_id } = this.props;
    if (isFirst) {
      this.setState({ isFirst: false }, () => {
        post_activity("play", video_id, null, session_id);
      });
    }
    if (this.playerRef[selected_id].player.paused) {
      this.setState({ paused: false }, () => {
        this.playerRef[selected_id].player.play();
        this.secondary_player && this.secondary_player.play();
      });
    } else {
      this.setState({ paused: true }, () => {
        this.playerRef[selected_id].player.pause();
        this.secondary_player && this.secondary_player.pause();
      });
    }
  };

  onUpdateSelectedId = (toPlay = true) => {
    const { selected_id } = this.state;
    const { playlist } = this.props;

    const { duration } = this.playerRef[selected_id].player.duration;
    this.setState({ duration: duration });
    Object.keys(this.playerRef).map(id => {
      if (id === selected_id) {
        this.playerRef[id].div.style.display = "block";
        this.playerRef[id].player.currentTime = 0;
        this.playerRef[id].hls.startLoad(-1);
        toPlay &&
          this.setState({ paused: false }, () => {
            this.playerRef[id].player.play();
          });
      } else {
        this.playerRef[id].div.style.display = "none";
        this.playerRef[id].player.pause();
        this.playerRef[id].hls.stopLoad();
      }
      return true;
    });
    playlist.map((item, index) => {
      if (item.id === selected_id) {
        this.setState({ current_index: index });
      }
      return true;
    });
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
    this.setState({ selected_id: playlist[0].id }, () => {
      this.onUpdateSelectedId(false);
    });
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
        this.update_audioDuration
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
        this.update_audioDuration
      );
  }
  render() {
    const {
      video_id,
      session_id,
      lang,
      playlist,
      button_size,
      isSingleSecondary,
      secondary_list,
      width
    } = this.props;
    const { selected_id, playedSeconds, paused } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: 0,
          height: "90%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={this.togglePlay}
      >
        {playlist.map(item => {
          return (
            <VideoPlayer
              key={item.id}
              item={item}
              width={width}
              setRef={this.setRef}
              isMuted={isSingleSecondary}
            />
          );
        })}
        {isSingleSecondary && (
          <audio
            ref={c => (this.secondary_player = c)}
            src={secondary_list[0].media_info.src}
          />
        )}
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
            {/* <PlayCircleFilledRoundedIcon
                style={{ height: 100, width: 100, color: "#EC6E57" }}
              /> */}
          </div>
        )}
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
                    bgColor={colors[index]}
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

class ShareChatPlaylist extends Component {
  state = {
    button_size: 0,
    width: 0,

    session_id: null,
    playlist_data: null
  };

  onLoadData = () => {
    const { clientWidth } = this.container;
    const { playlist_data } = this.state;
    console.log(playlist_data);
    const button_size = Math.min(
      clientWidth / Math.max(playlist_data.primary_list.length, 4) - 10,
      80
    );

    this.setState({ width: clientWidth, button_size: button_size });
  };

  componentDidMount() {
    // const { playlist_id } = this.props;
    const session_id = uuidv4();

    get_playlist_data(playlist_id).then(response => {
      if (response.status) {
        this.setState(
          { playlist_data: response.data, session_id: session_id },
          () => this.onLoadData()
        );
        post_activity("load", playlist_id, null, session_id);
      }
    });
  }

  componentWillUnmount() {
    // const { playlist_id } = this.props;
    const { session_id } = this.state;
    post_activity("unload", playlist_id, null, session_id);
  }

  render() {
    const { button_size, width, session_id, playlist_data } = this.state;
    // const {
    //   playlist_id
    //   //   lang,
    //   //   title,
    //   //   isSingleAudio,
    //   //   playlist,
    //   //   audioFile
    // } = this.props;
    return (
      <div
        ref={c => (this.container = c)}
        style={{
          //   height: "100%",
          //   width: "100%",
          height: 720,
          width: 500,
          border: "1px solid black",
          backgroundColor: borderColor,
          overflow: "hidden",
          position: "relative"
        }}
        className="centerH"
        onContextMenu={e => e.preventDefault()}
      >
        {playlist_data && playlist_data.title_info && (
          <VideoTitle title_info={playlist_data.title_info} width={width} />
        )}
        {playlist_data && (
          <VideoSection
            video_id={playlist_data.id}
            session_id={session_id}
            lang={playlist_data.language}
            playlist={playlist_data.primary_list}
            isSingleSecondary={playlist_data.isSingleSecondary}
            secondary_list={playlist_data.secondary_list}
            button_size={button_size}
            width={width}
          />
        )}
      </div>
    );
  }
}

export default ShareChatPlaylist;