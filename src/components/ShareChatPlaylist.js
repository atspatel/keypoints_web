import React, { Component } from "react";

import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import NeuButton from "./NeuButton";
import "../css/app.css";

import * as sharechat_constants from "../constants/sharechat/sharechat_constants";

const colors = ["#9661BA", "#40C9FF", "#FFA233", "#FF5A7E", "#FFD814"];
const borderColor = "#494949";

const { innerHeight, innerWidth } = window;

class PlaylistButton extends Component {
  state = {
    opacity: 1
  };
  onClick = item => {
    this.props.onClick && this.props.onClick(item.id);
  };
  render() {
    const { bgColor, size, item, isSelected, circularFill } = this.props;
    const { opacity } = this.state;
    return (
      <div
        style={{
          flex: 1,
          height: size,
          width: size,
          borderRadius: size / 2,
          margin: 5,
          position: "relative",
          opacity: opacity
        }}
        // onMouseEnter={() => {
        //   this.setState({ opacity: 1 });
        // }}
        // onMouseLeave={() => {
        //   this.setState({ opacity: 0.5 });
        // }}
        onClick={e => {
          e.stopPropagation();
          this.onClick(item);
        }}
      >
        <NeuButton
          style={{
            borderRadius: size / 2,
            backgroundColor: bgColor,
            padding: "10%",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: "calc(100% - 0px)",
              height: "calc(100% - 0px)",
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              borderRadius: "50%"
            }}
          >
            <CircularProgressbar
              value={circularFill}
              maxValue={100}
              styles={buildStyles({
                pathTransition: "none",
                pathColor: bgColor,
                trailColor: borderColor
              })}
            />
          </div>
          <div
            style={{
              height: "calc(100% - 10px)",
              width: "calc(100% - 10px)",
              position: "absolute",
              top: 0,
              left: 0,
              margin: 5
            }}
          >
            <img
              src={item.thumbnail}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "50%",
                border: `2px solid ${borderColor}`
              }}
            />
          </div>
        </NeuButton>
      </div>
    );
  }
}

class VideoPlayer extends Component {
  componentDidMount = () => {
    const { item } = this.props;
    this.props.setRef(item.id, { div: this.div, player: this.player });
  };
  render() {
    const { item, isSingleAudio } = this.props;
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
            backgroundImage: `url(${item.thumbnail})`,
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
            width: "100%"
          }}
        >
          <video
            key={item.id}
            ref={c => (this.player = c)}
            src={item.src}
            preload="auto"
            muted={isSingleAudio ? true : false}
            style={{
              height: "100%",
              objectFit: "contain",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.4)"
            }}
          />
        </div>
      </div>
    );
  }
}

class VideoTitle extends Component {
  render() {
    const { title, width } = this.props;
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
            fontSize: 0.05 * width,
            color: "white"
          }}
        >
          {title}
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

    intervalId: null
  };

  playerRef = {};
  changeSelectedIndex = (id, toPlay = true) => {
    const { selected_id } = this.state;
    if (selected_id !== id || this.playerRef[selected_id].player.paused) {
      this.setState({ selected_id: id }, () => {
        this.onUpdateSelectedId(toPlay);
      });
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
        if (this.audio_player) {
          this.audio_player.currentTime = 0;
        }
      });
    }
  };

  setProgress = () => {
    const { selected_id } = this.state;
    const player = this.playerRef[selected_id].player;
    if (!player.paused) {
      const playedSeconds = player.currentTime;
      if (playedSeconds > player.duration - 0.1) {
        this.onEndVideo();
      }
      this.setState({
        playedSeconds: playedSeconds
      });
    }
  };

  setRef = (id, ref) => {
    this.playerRef[id] = ref;
  };

  togglePlay = () => {
    const { selected_id } = this.state;
    if (this.playerRef[selected_id].player.paused) {
      this.setState({ paused: false }, () => {
        this.playerRef[selected_id].player.play();
      });
    } else {
      this.setState({ paused: true }, () => {
        this.playerRef[selected_id].player.pause();
      });
    }
  };

  onUpdateSelectedId = (toPlay = true) => {
    const { selected_id } = this.state;
    const { playlist } = this.props;

    const { duration } = this.playerRef[selected_id].player.duration;
    this.setState({ duration: duration });
    Object.keys(this.playerRef).map(id => {
      if (parseInt(id) === selected_id) {
        this.playerRef[id].div.style.display = "block";
        this.playerRef[id].player.currentTime = 0;
        toPlay &&
          this.setState({ paused: false }, () => {
            this.playerRef[id].player.play();
          });
      } else {
        this.playerRef[id].div.style.display = "none";
        this.playerRef[id].player.pause();
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
        this.audio_player && this.audio_player.pause();
      } else {
        this.audio_player && this.audio_player.play();
      }
    }
  }
  componentDidMount() {
    const { selected_id } = this.props;
    this.setState({ selected_id: selected_id }, () => {
      this.onUpdateSelectedId(false);
    });
    var intervalId = setInterval(this.setProgress, 100);
    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    const { playlist, button_size, isSingleAudio, audioFile } = this.props;
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
              setRef={this.setRef}
              isSingleAudio={isSingleAudio}
            />
          );
        })}
        {isSingleAudio && (
          <audio ref={c => (this.audio_player = c)} src={audioFile} loop />
        )}
        {paused && (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "40%",
              width: "20%",
              height: "20%",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <PlayCircleFilledRoundedIcon
              style={{ height: 100, width: 100, color: "#EC6E57" }}
            />
          </div>
        )}
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
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
                flex: 1
              }}
            ></div>
            <div style={{ color: "white", fontSize: "3vw" }}>
              {"विडीओ बदलने के लिए बटन क्लिक करे।"}
            </div>
            <div
              style={{
                borderBottom: "1px solid white",
                borderRight: "1px solid white",
                flex: 1
              }}
            ></div>
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
    selected_id: null,

    intervalId: null
  };

  componentDidMount() {
    const { clientWidth } = this.container;
    const { playlist } = this.props;
    const button_size = clientWidth / playlist.length - 10;
    this.setState({
      button_size: button_size,
      width: clientWidth,
      selected_id: playlist[0].id
    });
  }

  render() {
    const { button_size, width, selected_id } = this.state;
    const { title, isSingleAudio, playlist, audioFile } = this.props;
    return (
      <div
        ref={c => (this.container = c)}
        style={{
          height: "100%",
          width: "100%",
          border: "1px solid black",
          backgroundColor: borderColor,
          maxHeight: innerHeight,
          maxWidth: innerWidth,
          overflow: "hidden",
          position: "relative"
        }}
        className="centerH"
      >
        <VideoTitle title={title} width={width} />
        {selected_id && (
          <VideoSection
            playlist={playlist}
            isSingleAudio={isSingleAudio}
            audioFile={audioFile}
            selected_id={selected_id}
            button_size={button_size}
          />
        )}
      </div>
    );
  }
}

export default ShareChatPlaylist;
