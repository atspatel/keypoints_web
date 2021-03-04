import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import HtmlVideoIdComp from "./HtmlVideoIdComp";
import "../css/app.css";

const defaultColors = ["#9661BA", "#40C9FF", "#FFA233", "#FF5A7E", "#FFD814"];
const borderColor = "#494949";

const pLength = 3;
const { innerHeight, innerWidth } = window;
class VideoPlayer extends Component {
  componentDidMount = () => {
    const { id } = this.props;
    this.props.setRef(id, {
      div: this.div,
      player: this.player,
      hls: this.hls,
    });
  };
  render() {
    const { src, thumbnail, width, togglePlay } = this.props;
    return (
      <div
        ref={(c) => (this.div = c)}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          display: "none",
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundImage: `url(${thumbnail})`,
            filter: "blur(5px)",
            backgroundBlendMode: "screen",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <HtmlVideoIdComp
            video_url={src}
            thumbnail={thumbnail}
            setPlayerRef={(c) => {
              this.player = c;
            }}
            setHlsRef={(c) => {
              this.hls = c;
            }}
            togglePlay={togglePlay}
          />
        </div>
      </div>
    );
  }
}

class VideoSection extends Component {
  state = {
    selected_id: null,
    playedSeconds: 0,
    paused: true,

    intervalId: null,
    primaryDuration: 0.0,
  };

  playerRef = {};
  changeSelectedIndex = (id, toPlay = true) => {
    const { selected_id } = this.state;
    if (selected_id !== id) {
      this.setState({ selected_id: id }, () => {
        this.onUpdateSelectedId(toPlay);
      });
    } else if (this.playerRef[selected_id].player.paused) {
      this.setState({ selected_id: id }, () => {
        this.onUpdateSelectedId(toPlay);
      });
    }
  };

  duration_interval = () => {
    const { selected_id } = this.state;
    const player = this.playerRef[selected_id].player;
  };

  setProgress = () => {
    const { selected_id } = this.state;
    const player = this.playerRef[selected_id].player;
    if (!player.paused) {
      this.setState({
        playedSeconds: player.currentTime,
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
    const { duration } = this.playerRef[selected_id].player.duration;
    this.setState({ duration: duration });
    Object.keys(this.playerRef).map((id) => {
      if (id === selected_id) {
        this.playerRef[id].div.style.display = "block";
        this.playerRef[id].player.currentTime = 0;
        this.playerRef[id].hls && this.playerRef[id].hls.startLoad(-1);
        toPlay &&
          this.setState({ paused: false }, () => {
            this.playerRef[id].player.play();
          });
      } else {
        this.playerRef[id].div.style.display = "none";
        this.playerRef[id].player.pause();
        this.playerRef[id].hls && this.playerRef[id].hls.stopLoad();
      }
      return true;
    });
  };

  componentDidMount() {
    this.setState(
      { selected_id: "c57bc1b1-1565-4f78-926c-0313d4424808" },
      () => {
        this.onUpdateSelectedId(false);
      }
    );
    var intervalId = setInterval(this.setProgress, 100);

    var duration_intervalId = setInterval(this.duration_interval, 1000);
    this.setState({
      intervalId: intervalId,
      duration_intervalId: duration_intervalId,
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    clearInterval(this.state.duration_intervalId);
  }
  render() {
    const { button_size, width } = this.props;
    const { selected_id, playedSeconds, paused } = this.state;
    const duration = this.playerRef[selected_id]
      ? this.playerRef[selected_id].player.duration
      : 0;
    const cFill = duration ? parseInt((playedSeconds * 100) / duration) : 100;
    return (
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: 0,
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={this.togglePlay}
      >
        <VideoPlayer
          id={"c57bc1b1-1565-4f78-926c-0313d4424808"}
          src={
            "https://apolo247.fra1.digitaloceanspaces.com/playlist_1/video1/video1.m3u8"
          }
          thumbnail={
            "https://apolo247.fra1.digitaloceanspaces.com/playlist_1/video1/video1_thumb.png"
          }
          width={width}
          setRef={this.setRef}
          togglePlay={this.togglePlay}
        />
        <VideoPlayer
          id={"9d648d15-ddb4-46c1-a34a-61e398fdc51c"}
          src={
            "https://apolo247.fra1.digitaloceanspaces.com/playlist_1/video2/video2.m3u8"
          }
          thumbnail={
            "https://apolo247.fra1.digitaloceanspaces.com/playlist_1/video2/video2_thumb.png"
          }
          width={width}
          setRef={this.setRef}
          togglePlay={this.togglePlay}
        />
        <VideoPlayer
          id={"19e7d185-d214-4481-947d-0cbf278e4671"}
          src={
            "https://keypoints-data.s3.ap-south-1.amazonaws.com/media/apollo/playlist_1/video3/video3.m3u8"
          }
          thumbnail={
            "https://keypoints-data.s3.ap-south-1.amazonaws.com/media/apollo/playlist_1/video3/video3_thumb.png"
          }
          width={width}
          setRef={this.setRef}
          togglePlay={this.togglePlay}
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
              borderRadius: 20,
            }}
          >
            <img
              src={"./play.png"}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              alt=""
            />
          </div>
        )}
        <div
          style={{
            position: "absolute",
            // top: hideInstruction ? "85%" : "75%",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                {/* --------- */}
                <div
                  style={{
                    height: button_size,
                    width: button_size,
                    borderRadius: button_size / 2,
                    margin: 5,
                    position: "relative",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.changeSelectedIndex(
                      "c57bc1b1-1565-4f78-926c-0313d4424808"
                    );
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
                      borderRadius: "50%",
                    }}
                  >
                    <CircularProgressbar
                      value={
                        selected_id === "c57bc1b1-1565-4f78-926c-0313d4424808"
                          ? cFill
                          : 100
                      }
                      maxValue={100}
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: defaultColors[0],
                        borderColor: "#494949",
                      })}
                    />
                  </div>
                  <div
                    style={{
                      height: "85%",
                      width: "85%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: "7.5% 7.5%",
                    }}
                  >
                    <img
                      src={
                        "https://apolo247.fra1.digitaloceanspaces.com/playlist_1/video1/video1_thumb.png"
                      }
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "0 0",
                        borderRadius: "50%",
                      }}
                      onDragStart={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </div>
                </div>
                <p style={{ color: "white", fontSize: 18 }} className="centerH">
                  {"Hinglish"}
                </p>
              </div>
              {/* --------- */}
              <div>
                <div
                  style={{
                    height: button_size,
                    width: button_size,
                    borderRadius: button_size / 2,
                    margin: 5,
                    position: "relative",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.changeSelectedIndex(
                      "9d648d15-ddb4-46c1-a34a-61e398fdc51c"
                    );
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
                      borderRadius: "50%",
                    }}
                  >
                    <CircularProgressbar
                      value={
                        selected_id === "9d648d15-ddb4-46c1-a34a-61e398fdc51c"
                          ? cFill
                          : 100
                      }
                      maxValue={100}
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: defaultColors[1],
                        borderColor: "#494949",
                      })}
                    />
                  </div>
                  <div
                    style={{
                      height: "85%",
                      width: "85%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: "7.5% 7.5%",
                    }}
                  >
                    <img
                      src={
                        "https://apolo247.fra1.digitaloceanspaces.com/playlist_1/video2/video2_thumb.png"
                      }
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "0 0",
                        borderRadius: "50%",
                      }}
                      onDragStart={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </div>
                </div>
                <p style={{ color: "white", fontSize: 18 }} className="centerH">
                  {"Telugu"}
                </p>
              </div>
              {/* --------- */}
              <div>
                <div
                  style={{
                    height: button_size,
                    width: button_size,
                    borderRadius: button_size / 2,
                    margin: 5,
                    position: "relative",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.changeSelectedIndex(
                      "19e7d185-d214-4481-947d-0cbf278e4671"
                    );
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
                      borderRadius: "50%",
                    }}
                  >
                    <CircularProgressbar
                      value={
                        selected_id === "19e7d185-d214-4481-947d-0cbf278e4671"
                          ? cFill
                          : 100
                      }
                      maxValue={100}
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: defaultColors[0],
                        borderColor: "#FFA233",
                      })}
                    />
                  </div>
                  <div
                    style={{
                      height: "85%",
                      width: "85%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: "7.5% 7.5%",
                    }}
                  >
                    <img
                      src={
                        "https://keypoints-data.s3.ap-south-1.amazonaws.com/media/apollo/playlist_1/video3/video3_thumb.png"
                      }
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "0 0",
                        borderRadius: "50%",
                      }}
                      onDragStart={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </div>
                </div>
                <p style={{ color: "white", fontSize: 18 }} className="centerH">
                  {"Bangla"}
                </p>
              </div>
              {/* --------- */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PlaylistPlayer extends Component {
  state = {
    button_size: 65,
    width: 0,
  };

  onLoadData = () => {
    const { clientWidth } = this.container;
    const button_size = Math.max(
      Math.min(clientWidth / Math.max(pLength, 4) - 10, 80),
      65
    );

    this.setState({ width: clientWidth, button_size: button_size });
  };

  componentDidMount() {
    this.onLoadData();
  }

  render() {
    const { button_size, width } = this.state;
    return (
      <div
        style={{
          height: 720,
          width: 1280,
          maxHeight: innerHeight,
          maxWidth: innerWidth,
        }}
        className="centerH"
      >
        <div
          ref={(c) => (this.container = c)}
          style={{
            height: "100%",
            width: "100%",
            border: "1px solid black",
            backgroundColor: borderColor,
            overflow: "hidden",
            position: "relative",
          }}
          className="centerH"
          onContextMenu={(e) => e.preventDefault()}
        >
          <VideoSection button_size={button_size} width={width} />
        </div>
      </div>
    );
  }
}

export default PlaylistPlayer;
