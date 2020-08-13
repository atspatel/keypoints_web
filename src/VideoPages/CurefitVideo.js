import React, { Component } from "react";
import ScaleText from "react-scale-text";

import CureFitDashboard from "../components/CureFitDashboard";
import create_playlist, {
  get_exc_data,
  format_seconds
} from "../functions/createPlayList";

import HLSPlaylist from "../components/HLSPlaylist";

class CurefitVideo extends Component {
  state = {
    playlist: null,
    workout_data: [],

    exc_data: [],
    exc_list: [],

    playedSeconds: 0,
    current: null,
    start_time: 0,
    display_time: 0
  };
  onClickStart = workout_data => {
    create_playlist(workout_data).then(response => {
      if (response.status) {
        const playlist = response.playlist;
        this.setState({ workout_data: workout_data, playlist: playlist });
      }
    });
  };

  setDisplayTime = () => {
    const { playedSeconds, start_time, current, exc_data } = this.state;
    if (current) {
      const offset = exc_data[current].start
        ? exc_data[current].start.offset
        : 0;
      const display_time = Math.max(
        parseInt(playedSeconds - (start_time + offset)),
        0
      );
      this.setState({ display_time: display_time });
    } else {
      this.setState({ display_time: 0 });
    }
  };

  setCurrentKey = (id, data) => {
    const parsed_url = data.frag.relurl.split("/");
    const key = parsed_url[parsed_url.length - 2];
    const start_time = this.player ? this.player.currentTime : 0;
    if (key && this.state.current !== key) {
      this.setState({ current: key, start_time: start_time });
    }
  };

  onFragChange = (id, data) => {
    this.setCurrentKey(id, data);
  };
  onProgress = playedSeconds => {
    this.setState({ playedSeconds: playedSeconds }, () =>
      this.setDisplayTime()
    );
  };

  componentDidMount() {
    get_exc_data().then(response => {
      if (response.status) {
        const exc_data = response.exc_data ? response.exc_data : [];
        const exc_list = response.exc_list ? response.exc_list : [];
        this.setState({ exc_data: exc_data, exc_list: exc_list });
      }
    });
  }
  render() {
    const { playlist, exc_data, exc_list, current } = this.state;
    if (playlist) {
      return (
        <div
          style={{ height: 450, width: 800, position: "relative" }}
          className="centerH"
        >
          <HLSPlaylist
            playlist={playlist}
            onProgress={this.onProgress}
            setRef={c => (this.player = c)}
            onFragChange={this.onFragChange}
          >
            <div
              style={{ position: "absolute", height: "90%", width: "100%" }}
              onClick={this.togglePlay}
            >
              {current && current !== "rest" && (
                <div
                  style={{
                    position: "absolute",
                    top: "73%",
                    left: "0%",
                    width: "27%",
                    height: "30%"
                  }}
                >
                  <ScaleText>
                    <p style={{ color: "white" }}>
                      {exc_data[current].name}
                      <br />
                      {format_seconds(this.state.display_time)}
                    </p>
                  </ScaleText>
                </div>
              )}
            </div>
          </HLSPlaylist>
        </div>
      );
    } else {
      return (
        <div style={{ height: 450, width: 800 }} className="centerH">
          <CureFitDashboard
            onClickStart={this.onClickStart}
            exc_data={exc_data}
            exc_list={exc_list}
          />
        </div>
      );
    }
  }
}

export default CurefitVideo;
