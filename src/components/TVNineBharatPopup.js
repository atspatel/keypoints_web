import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import CancelIcon from "@material-ui/icons/Cancel";

import { PlaylistButton } from "./PlaylistButton";
import NeuButton from "./NeuButton";

import * as tv9_constants from "../constants/tv9_constants";

import "../css/tv9.css";

const tv9_blue = "#1F51A4";
const tv9_red = "#ED1C24";
const colors = [tv9_blue, tv9_red];

const video_url = tv9_constants.video_url;
const arrow_png = tv9_constants.arrow_png;
const subscribe_png = tv9_constants.subscribe_png;
const win_png = tv9_constants.win_png;
const title_png = tv9_constants.title_png;

const channel_list = tv9_constants.channel_list;
const sm_list = tv9_constants.sm_list;

function open_url(url) {
  window.open(url, "_blank");
}

class TVNineMoreSubscription extends Component {
  onClickButton = item => {
    open_url(item.url);
  };
  render() {
    return (
      <div
        style={{
          width: "70%",
          height: "80%",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {channel_list.map((item, index) => {
          return (
            <div>
              <PlaylistButton
                key={item.id}
                bgColor={colors[index % colors.length]}
                size={80}
                item={item}
                onClick={id => this.onClickButton(item)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

class TVNinePopupForm extends Component {
  state = {
    formFilled: false,

    name: { text: "", error: false },
    email: { text: "", error: false },
    phone: { text: "", error: false }
  };

  validateForm = () => {
    const { name, email, phone } = this.state;
    let isValid = true;
    if (name.text.length === 0) {
      this.setState({ name: { ...name, error: true } });
      isValid = false;
    }
    if (email.text.length === 0) {
      this.setState({ email: { ...email, error: true } });
      isValid = false;
    }
    if (phone.text.length < 10) {
      this.setState({ phone: { ...phone, error: true } });
      isValid = false;
    }
    return isValid;
  };

  onClickSubmit = () => {
    if (this.validateForm()) {
      const { onSubmit } = this.props;
      onSubmit && onSubmit();
    }
  };
  render() {
    return (
      <div
        style={{
          width: "80%",
          height: "80%"
        }}
      >
        <Accordion defaultActiveKey="2">
          <Accordion.Toggle
            variant="link"
            eventKey="0"
            style={{ width: "100%" }}
          >
            Rules
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div>
              Calling news enthusiasts to subscribe to our YouTube channels,
              subscribers get to sample engaging content and stand to win
              exciting prizes. These attractive Prizes will be handed out daily,
              weekly and monthly, we’ll adapt tech-driven lucky draw methodology
              to decide the winner. Winners would be announced both on our
              television and digital platforms.
            </div>
          </Accordion.Collapse>
          <Accordion.Toggle
            variant="link"
            eventKey="1"
            style={{ width: "100%" }}
          >
            Prizes
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <div>Hello! I'm another body</div>
          </Accordion.Collapse>

          <Accordion.Toggle
            variant="link"
            eventKey="2"
            style={{ width: "100%" }}
          >
            Fill This Form
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <div style={{ margin: 10 }}>
              <TextField
                id="name"
                label="Name"
                size="small"
                value={this.state.name.text}
                error={this.state.name.error}
                onChange={e =>
                  this.setState({
                    name: { text: e.target.value, error: false }
                  })
                }
                variant="outlined"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  marginTop: 5
                }}
              />
              <TextField
                id="email"
                label="Email"
                size="small"
                variant="outlined"
                type="email"
                value={this.state.email.text}
                error={this.state.email.error}
                onChange={e =>
                  this.setState({
                    email: { text: e.target.value, error: false }
                  })
                }
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  marginTop: 5,
                  padding: 0
                }}
              />
              <TextField
                id="phone"
                label="Mobile Number"
                size="small"
                variant="outlined"
                type="number"
                value={this.state.phone.text}
                error={this.state.phone.error}
                onChange={e =>
                  this.setState({
                    phone: { text: e.target.value, error: false }
                  })
                }
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  marginTop: 5
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={this.onClickSubmit}
              >
                Subscribe To Channel
              </Button>
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
    );
  }
}
class TVNineBharatPopup extends Component {
  state = {
    start: -50,
    end: 0,
    duration: 1,
    formFilled: false,

    name: { text: "", error: false },
    email: { text: "", error: false },
    phone: { text: "", error: false }
  };

  validateForm = () => {
    const { name, email, phone } = this.state;
    let isValid = true;
    if (name.text.length === 0) {
      this.setState({ name: { ...name, error: true } });
      isValid = false;
    }
    if (email.text.length === 0) {
      this.setState({ email: { ...email, error: true } });
      isValid = false;
    }
    if (phone.text.length < 10) {
      this.setState({ phone: { ...phone, error: true } });
      isValid = false;
    }
    return isValid;
  };

  onSubmit = () => {
    const { current } = this.props;
    open_url(current.url);
    this.setState({ formFilled: true });
  };
  animateIn = () => {
    this.setState({ start: -50, end: 0 });
  };
  animateOut = () => {
    this.setState({ start: 0, end: -50 });
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
    const { start, end, duration, formFilled } = this.state;
    const { current, onClosePopup } = this.props;
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
              backgroundColor: "rgba(255,255,255,0.9)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              overflowY: "scroll"
            }}
          >
            <div style={{ position: "absolute", right: "5%", top: "2%" }}>
              <CancelIcon
                style={{ height: 30, width: 30, color: "black" }}
                onClick={() => this.onClosePopup()}
              />
            </div>
            <div>
              <img
                src={title_png}
                style={{ width: "calc(80% - 20px)", borderRadius: 20 }}
                alt=""
              />
            </div>
            {formFilled ? (
              <TVNineMoreSubscription />
            ) : (
              <TVNinePopupForm onSubmit={this.onSubmit} />
            )}
          </div>
        )}
      </AnimatedProgressProvider>
    );
  }
}

export class TVNineBharatSMList extends Component {
  onClickButton = item => {
    open_url(item.url);
  };
  render() {
    const { buttonList, button_size } = this.props;
    return (
      <div
        style={{
          height: "20%",
          position: "absolute",
          top: "5%"
        }}
      >
        <div>
          <div style={{ display: "flex" }}>
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
        </div>
      </div>
    );
  }
}

export class TVNineBharatButtonList extends Component {
  onClickButton = item => {
    const { onClickButton } = this.props;
    onClickButton && onClickButton(item);
  };
  componentDidMount() {}
  render() {
    const { buttonList, button_size } = this.props;
    return (
      <div
        style={{
          height: "20%",
          position: "absolute",
          bottom: "5%"
        }}
        ref={c => (this.container = c)}
      >
        <div>
          <div style={{ display: "flex" }}>
            {buttonList.map((item, index) => {
              return (
                <PlaylistButton
                  key={item.id}
                  bgColor={colors[index % colors.length]}
                  size={button_size}
                  item={item}
                  onClick={id => this.onClickButton(item)}
                />
              );
            })}
          </div>
        </div>
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
          height: "100%",
          width: "10%",
          position: "absolute",
          right: 0
        }}
        onClick={e => {
          e.stopPropagation();
          onOpenPopup && onOpenPopup();
        }}
      >
        <div
          style={{
            height: "50%",
            width: "100%",
            backgroundColor: tv9_red,
            position: "absolute"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end"
            }}
          >
            <img
              src={arrow_png}
              style={{
                width: `100%`,
                height: "25%"
              }}
              className={"width-animation"}
              alt=""
            />
            <img
              src={subscribe_png}
              style={{
                width: "100%"
              }}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            height: "50%",
            width: "100%",
            backgroundColor: tv9_blue,
            position: "absolute",
            top: "50%"
          }}
        >
          <div
            style={{
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-end"
            }}
          >
            <img
              src={win_png}
              style={{
                width: "100%"
              }}
              alt=""
            />
            <img
              src={arrow_png}
              style={{
                width: `100%`,
                height: "25%"
              }}
              className={"width-animation"}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

const { innerHeight, innerWidth } = window;
export class TVNineBharat extends Component {
  state = {
    showPopup: false,
    c_button_size: 80,
    s_button_size: 50,
    paused: true,

    current: channel_list[0]
  };

  onChangeLanguage = item => {
    this.setState({ current: item });
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
    const c_button_size = Math.min(
      (0.6 * clientWidth) / channel_list.length,
      80,
      0.2 * clientHeight
    );
    const s_button_size = Math.min(
      (0.6 * clientWidth) / sm_list.length,
      50,
      0.15 * clientHeight
    );
    this.setState({
      c_button_size: c_button_size,
      s_button_size: s_button_size
    });
  }
  render() {
    const { showPopup, c_button_size, s_button_size, paused } = this.state;
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
          <TVNineBharatButtonList
            buttonList={channel_list}
            button_size={c_button_size}
            onClickButton={this.onChangeLanguage}
          />
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
export default TVNineBharatPopup;
