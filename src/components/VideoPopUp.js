import React, { Component } from "react";

import * as config from "../config";

export const replay_png = `${config.BASE_DIR}/replay.png`;

export const onClosePopUp = function(player, popup_data) {
  player.currentTime = popup_data.end + 0.3;
  player.play();
};

class VideoPopUp extends Component {
  togglePlay = () => {
    if (this.popupPlayer) {
      if (this.popupPlayer.paused) {
        this.popupPlayer.play();
      } else {
        this.popupPlayer.pause();
      }
    }
  };
  componentDidMount() {
    this.popupPlayer &&
      this.popupPlayer.addEventListener("ended", this.props.closePopUp);
  }
  componentWillUnmount() {
    this.popupPlayer.removeEventListener("ended", this.props.closePopUp);
  }
  render() {
    const { data, isMute, closePopUp } = this.props;
    return (
      <div style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
        <video
          ref={c => {
            this.popupPlayer = c;
          }}
          src={data.src}
          muted={isMute}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
            // position: "absolute",
            // top: 0,
            // left: 0
          }}
          onClick={this.togglePlay}
          autoPlay
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            height: "10%",
            width: "10%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backgroundImage: `url(${replay_png})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </div>
    );
  }
}

export default VideoPopUp;
