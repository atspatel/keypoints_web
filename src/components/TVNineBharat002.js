import React, { Component } from "react";

import Typist from "react-typist";

import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import CancelIcon from "@material-ui/icons/Cancel";

import { PlaylistButton } from "./PlaylistButton";
import NeuButton from "./NeuButton";

import * as tv9_002_constants from "../constants/tv9_002_constants";

import "../css/tv9.css";

const tv9_blue = "#1F51A4";
const tv9_red = "#ED1C24";

const primary_color = "#e91085";
const secondary_color = "#313157";
// const colors = [tv9_blue, tv9_red];

const arrow_gif = tv9_002_constants.arrow_gif;
const rr_logo = tv9_002_constants.rr_logo;
const share_button = tv9_002_constants.share_button;
const image_share_button = tv9_002_constants.image_share_button;
const sm_list = tv9_002_constants.sm_list;

const video_url = tv9_002_constants.video_url;
// const video_thumb = tv9_002_constants.video_thumb;
const info = tv9_002_constants.info;
const player_card = tv9_002_constants.player_card;

function open_url(url) {
  window.open(url, "_blank");
}

class PlayerCardPopUp extends Component {
  render() {
    const { card } = this.props;
    return (
      <div
        style={{
          width: "90%",
          height: "90%",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={card}
          style={{
            width: "calc(100% - 10px)",
            height: "calc(100% - 10px)",
            borderRadius: 20,
            objectFit: "contain"
          }}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: "10% 10%"
          }}
        >
          <PlaylistButton
            key={"share_1"}
            size={50}
            item={{ thumbnail: image_share_button, id: "share1" }}
            bgColor={secondary_color}
            onClick={id => open_url(tv9_002_constants.image_whatsapp_url)}
            border={false}
          />
        </div>
      </div>
    );
  }
}

class TVNineBharatPopup extends Component {
  state = {
    start: -50,
    end: 0,
    duration: 1
  };

  animateIn = () => {
    this.setState({ start: -50, end: 5 });
  };
  animateOut = () => {
    this.setState({ start: 5, end: -50 });
  };
  onClosePopup = () => {
    this.animateOut();
    const { onClosePopup } = this.props;
    this.interval = window.setTimeout(() => {
      onClosePopup && onClosePopup();
    }, this.state.duration * 1000);
  };
  componentDidMount() {
    this.animateIn();
  }

  render() {
    const { start, end, duration } = this.state;
    const { onClosePopup } = this.props;
    return (
      <AnimatedProgressProvider
        easingFunction={easeQuadInOut}
        valueStart={start}
        valueEnd={end}
        duration={duration}
      >
        {value => (
          <div
            style={{
              height: "calc(100% - 20px)",
              width: "45%",
              position: "absolute",
              right: `${value}%`,
              margin: 10,
              backgroundColor: "rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              overflowY: "scroll"
            }}
          >
            <PlayerCardPopUp card={player_card} />
            <div style={{ position: "absolute", right: "5%", top: "2%" }}>
              <CancelIcon
                style={{ height: 30, width: 30, color: "black" }}
                onClick={() => this.onClosePopup()}
              />
            </div>
          </div>
        )}
      </AnimatedProgressProvider>
    );
  }
}

export class TVNineBharatSMList extends Component {
  state = {
    showSMList: false
  };
  onClickButton = item => {
    open_url(item.url);
  };
  render() {
    const { buttonList, button_size } = this.props;
    const { showSMList } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          margin: "1% 1%",
          padding: "1% 1%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            height: 1.5 * button_size,
            width: 1.5 * button_size,
            position: "relative",
            zIndex: 1
          }}
          onClick={e => {
            e.stopPropagation();
            this.setState({ showSMList: !showSMList });
          }}
        >
          <NeuButton
            style={{
              overflow: "hidden",
              // backgroundColor: "",
              borderRadius: 5
            }}
          >
            <img
              src={tv9_002_constants.tv9_logo}
              style={{
                height: "100%",
                objectFit: "contain",
                alignSelf: "center"
              }}
              alt=""
            />
          </NeuButton>
        </div>
        {showSMList && (
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 20,
              marginLeft: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              left: "0%"
            }}
          >
            {buttonList.map((item, index) => {
              return (
                <PlaylistButton
                  key={item.id}
                  bgColor={tv9_red}
                  size={button_size}
                  item={item}
                  onClick={id => this.onClickButton(item)}
                  border={false}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

class TVNineBharatSideBar extends Component {
  render() {
    const { onOpenPopup } = this.props;
    return (
      <div
        style={{
          height: "50%",
          width: "7%",
          position: "absolute",
          top: "25%",
          right: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30
        }}
        onClick={e => {
          e.stopPropagation();
          onOpenPopup && onOpenPopup();
        }}
      >
        <img
          src={arrow_gif}
          style={{
            width: `100%`,
            objectFit: "contain"
          }}
          alt=""
        />
      </div>
    );
  }
}

const { innerHeight, innerWidth } = window;
export class TVNineBharat002 extends Component {
  state = {
    showPopup: false,
    s_button_size: 50,
    paused: true,

    showTyping: true
  };

  togglePlay = () => {
    if (this.player.paused) {
      this.setState({ paused: false }, () => this.player.play());
    } else {
      this.setState({ paused: true }, () => this.player.pause());
    }
  };
  componentDidMount() {
    const { clientHeight, clientWidth } = this.container;
    const s_button_size = Math.min(
      (0.6 * clientWidth) / sm_list.length,
      50,
      0.15 * clientHeight
    );
    this.setState({
      s_button_size: s_button_size
    });
  }
  render() {
    const { showPopup, s_button_size, paused, showTyping } = this.state;
    const width = innerWidth < 900 ? innerWidth : 900;
    return (
      <div
        ref={c => (this.container = c)}
        style={{
          height: 0.5625 * width,
          width: width,
          border: "1px solid black",
          backgroundColor: "black",
          overflow: "hidden"
        }}
        className="centerH"
      >
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
          <div
            style={{ height: "100%", width: "100%", position: "absolute" }}
            onClick={e => {
              e.stopPropagation();
              this.togglePlay();
            }}
          >
            <video
              ref={c => (this.player = c)}
              src={video_url}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "fill",
                position: "absolute",
                left: 0
              }}
            />
            {paused && (
              <div
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "44%",
                  width: "12%",
                  height: "20%",
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: `${tv9_blue}99`,
                  borderRadius: 20
                }}
              >
                <NeuButton style={{ borderRadius: 20 }}>
                  <PlayCircleFilledRoundedIcon
                    style={{ height: "100%", width: "100%", color: tv9_red }}
                  />
                </NeuButton>
              </div>
            )}
          </div>

          <TVNineBharatSMList
            buttonList={sm_list}
            button_size={s_button_size}
          />
          <div
            style={{
              position: "absolute",
              height: "20%",
              width: "70%",
              margin: "2% 2%",
              bottom: "0%",
              left: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <img
              src={rr_logo}
              style={{ height: "100%", objectFit: "contain" }}
              alt=""
            />
            {showTyping && (
              <div
                style={{
                  flex: 1,
                  height: "50%",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  marginLeft: "2%",
                  padding: "0% 3%",
                  borderTop: "4px solid",
                  borderBottom: "4px solid",
                  borderColor: secondary_color,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
              >
                <Typist
                  avgTypingDelay={150}
                  cursor={{
                    show: true,
                    blink: true,
                    element: "|",
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1000
                  }}
                  onTypingDone={() => {
                    this.setState({ showTyping: false });
                  }}
                >
                  {info.map(info_text => {
                    return (
                      <span>
                        <span
                          className="info-text"
                          style={{ color: primary_color }}
                        >
                          {info_text}
                        </span>
                        <Typist.Delay ms={2500} />
                        <Typist.Backspace count={info_text.length} />
                        <Typist.Delay ms={1000} />
                      </span>
                    );
                  })}
                </Typist>
              </div>
            )}
          </div>

          <div
            style={{
              position: "absolute",
              height: "12%",
              width: `${0.5625 * 12}%`,
              margin: "0% 0%",
              top: "80%",
              right: 0
            }}
            onClick={e => {
              e.stopPropagation();
              console.log(tv9_002_constants.video_whatsapp_url);
              open_url(tv9_002_constants.video_whatsapp_url);
            }}
          >
            <NeuButton style={{ borderRadius: "50%" }}>
              <img
                src={share_button}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                alt=""
              />
            </NeuButton>
          </div>
          {showPopup && (
            <TVNineBharatPopup
              current={this.state.current}
              onClosePopup={() => this.setState({ showPopup: false })}
            />
          )}
          {!showPopup && (
            <TVNineBharatSideBar
              onOpenPopup={() => {
                this.setState({ showPopup: !showPopup });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
export default TVNineBharat002;
