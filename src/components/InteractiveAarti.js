import React, { Component } from "react";

import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import "../css/app.css";
import * as aarti_constants from "../constants/aarti_constants";

const { innerHeight, innerWidth } = window;

const url = aarti_constants.aarti_url;
const message = aarti_constants.message;
const hashtag = aarti_constants.hashtag;
const aarti_png = aarti_constants.aarti_png;
const playlist = aarti_constants.playlist;

class AartBackground extends Component {
  render() {
    const { img_src, setRef } = this.props;
    return (
      <img
        src={img_src}
        style={{ height: "100%", width: "100%", objectFit: "fill" }}
        alt=""
        onDragStart={e => {
          e.preventDefault();
        }}
        ref={c => setRef(c)}
      />
    );
  }
}

class InteractiveAarti extends Component {
  state = {
    trackEnable: false,
    h: 720,
    w: 500,
    x: null,
    y: null,
    offX: 0,
    offY: 0,

    prevIndex: -1,
    currentIndex: 0,
    nextIndex: 1
  };

  setCurrent = index => {
    const n = playlist.length;
    const currentIndex = Math.min(Math.max(index, 0), n - 1);
    this.setState(
      {
        currentIndex: currentIndex,
        prevIndex: currentIndex - 1,
        nextIndex: currentIndex + 1
      },
      () => {
        this.stopTrack();
        this.aarti_player.src = playlist[this.state.currentIndex].aarti;
      }
    );
  };
  _onMouseMove = e => {
    e.stopPropagation();
    this.state.trackEnable && this.setState({ x: e.clientX, y: e.clientY });
  };
  _onTouchEnd = e => {
    e.stopPropagation();
    this.setInitialPosition();
  };
  _onTouchMove = e => {
    e.stopPropagation();
    this.state.trackEnable &&
      this.setState({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };
  _onMouseLeave = e => {
    e.stopPropagation();
    this.setInitialPosition();
  };

  stopTrack = () => {
    this.aarti_player.pause();
    this.setInitialPosition();
    this.setState({ trackEnable: false });
  };

  enableTrack = () => {
    this.aarti_player.play();
    this.setState({ trackEnable: true });
  };
  toggleTrack = () => {
    const { trackEnable } = this.state;
    if (trackEnable) {
      this.stopTrack();
    } else {
      this.enableTrack();
    }
  };
  onClickDiv = () => {
    this.toggleTrack();
  };

  setInitialPosition = () => {
    const { h, w, offX, offY } = this.state;
    const x = 0.6 * w + offX;
    const y = 0.7 * h + offY;
    this.setState({ x: x, y: y });
  };
  componentDidMount() {
    const height = this.imageContainer.clientHeight;
    const width = this.imageContainer.clientWidth;

    const divOffsetX = this.container.offsetLeft;
    const imageOffsetX = this.imageContainer.offsetLeft;

    const divOffsetY = this.container.offsetTop;
    const imageOffsetY = this.imageContainer.offsetTop;
    const offX = 0.2 * width + divOffsetX + imageOffsetX;
    const offY = 0.1 * height + divOffsetY + imageOffsetY;
    this.setState(
      {
        h: height,
        w: width,
        offX: offX,
        offY: offY
      },
      () => this.setInitialPosition()
    );

    this.aarti_player.src = playlist[this.state.currentIndex].aarti;
    this.aarti_player.addEventListener("play", this.enableTrack);
    this.aarti_player.addEventListener("pause", this.stopTrack);
  }

  componentWillUnmount() {
    this.aarti_player.removeEventListener("play", this.enableTrack);
    this.aarti_player.removeEventListener("pause", this.stopTrack);
  }

  setRef = c => {
    this.imageContainer = c;
  };
  render() {
    const {
      h,
      x,
      y,
      offX,
      offY,
      prevIndex,
      currentIndex,
      nextIndex
    } = this.state;
    const { isShare } = this.props;
    return (
      <div
        style={{
          height: 720,
          width: 500,
          maxHeight: innerHeight,
          maxWidth: innerWidth,
          overflow: "hidden",
          position: "relative"
        }}
        className="centerH"
        onMouseMove={this._onMouseMove}
        onMouseLeave={this._onMouseLeave}
        onTouchMove={this._onTouchMove}
        onTouchEnd={this._onTouchEnd}
        onClick={this.onClickDiv}
        ref={c => (this.container = c)}
      >
        <AartBackground
          setRef={this.setRef}
          img_src={playlist[currentIndex].image}
        />
        {!this.state.trackEnable && (
          <div
            style={{
              height: "10%",
              width: "40%",
              position: "absolute",
              top: y - offY - 0.1 * h,
              left: x - offX,
              display: "flex",
              alignItems: "flex-end"
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 5,
                backgroundColor: "rgba(255,255,255,0.8)",
                fontSize: 20,
                fontWeight: "bold",
                borderRadius: 20,
                color: "black"
              }}
            >
              {"थाली उठाने के लिये क्लिक करे और घुमाएँ।"}
            </p>
          </div>
        )}
        {x !== null && y !== null && (
          <img
            src={aarti_png}
            style={{
              height: "20%",
              width: "40%",
              objectFit: "fill",
              position: "absolute",
              top: y - offY,
              left: x - offX
            }}
            className="image-shadow"
            onDragStart={e => {
              e.preventDefault();
            }}
            alt=""
          />
        )}

        <div
          style={{
            position: "absolute",
            width: "calc(100% - 40px)",
            height: "5%",
            top: 0,
            left: 0,
            minHeight: 40,
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            margin: "0px 20px"
          }}
        >
          {prevIndex > -1 ? (
            <div
              style={{
                height: "100%",
                width: "30%",
                backgroundColor: "rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 10px",
                borderRadius: 10,
                color: "white"
              }}
              onClick={e => {
                e.stopPropagation();
                this.setCurrent(prevIndex);
              }}
            >
              <NavigateBeforeIcon />
              {playlist[prevIndex].name}
            </div>
          ) : (
            <div style={{ width: "20%" }}></div>
          )}
          <div
            style={{
              height: "100%",
              width: "30%",
              backgroundColor: "rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 10px",
              borderRadius: 10,
              color: "black",
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            {playlist[currentIndex].name}
          </div>
          {nextIndex < playlist.length ? (
            <div
              style={{
                height: "100%",
                width: "30%",
                backgroundColor: "rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 10px",
                borderRadius: 10,
                color: "white"
              }}
              onClick={e => {
                e.stopPropagation();
                this.setCurrent(nextIndex);
              }}
            >
              {playlist[nextIndex].name}
              <NavigateNextIcon />
            </div>
          ) : (
            <div style={{ width: "20%" }}></div>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 40px)",
            height: "10%",
            top: "90%",
            left: 0,
            minHeight: 40,
            margin: "0px 20px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <audio
            ref={c => (this.aarti_player = c)}
            // key={playlist[currentIndex].id}
            // src={playlist[currentIndex].aarti}
            controls
          ></audio>
        </div>
        <div
          style={{
            position: "absolute",
            top: "70%",
            // height: "25%",
            left: "5%",
            // width: 50,
            backgroundColor: "rgba(0, 0,0,0.5)",
            borderRadius: 20,

            display: "flex",
            flexDirection: "column"
          }}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {isShare && (
            <FacebookShareButton
              url={url}
              quote={message}
              hashtag={`#${hashtag}`}
            >
              <FacebookIcon size={40} round className="share_icon" />
            </FacebookShareButton>
          )}
          {isShare && (
            <WhatsappShareButton url={url} title={message} separator="  ">
              <WhatsappIcon size={40} round className="share_icon" />
            </WhatsappShareButton>
          )}
        </div>
      </div>
    );
  }
}

export default InteractiveAarti;
