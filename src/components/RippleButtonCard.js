import React, { Component } from "react";

import NeuButton from "./NeuButton";

import "../css/app.css";
import "../css/ripple.css";

const rippleInClass = "ripple-start ripple-in";
const rippleOutClass = "ripple-end ripple-out";

class RippleButtonCard extends Component {
  state = {
    showCard: false,
    ripple_style: {}
  };
  timerId = null;

  startRippleIn = mouseEvent => {
    const card_width = this.card_container.offsetWidth;
    const card_height = this.card_container.offsetHeight;
    const pos = this.card_container.getBoundingClientRect();

    const ripple_height = Math.max(
      2 * (mouseEvent.pageY - pos.top),
      card_height
    );
    const ripple_style = {
      top: `${0}px`,
      left: `${0}px`,
      width: `${card_width}px`,
      height: `${ripple_height}px`
    };
    this.setState({
      ripple_style: ripple_style,
      showCard: true,
      ripple_class: rippleInClass
    });
  };

  startRippleOut = mouseEvent => {
    this.setState({ ripple_class: rippleOutClass, showCard: false });
  };

  onMouseDown = e => {
    const { showCard } = this.state;
    showCard ? this.startRippleOut(e) : this.startRippleIn(e);
  };
  render() {
    const { showCard, ripple_class, ripple_style } = this.state;
    return (
      <div
        style={{
          height: 720,
          width: 500,
          border: "1px solid black",
          position: "relative"
        }}
        className="centerH"
      >
        <div
          ref={c => (this.card_container = c)}
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            height: "60%",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <span
            ref={c => (this.ripple_span = c)}
            style={ripple_style}
            className={`ripple ${ripple_class}`}
          />
          <div
            ref={c => {
              this.ripple_container = c;
            }}
            style={{
              position: "absolute",
              bottom: "5%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "15%",
              width: "90%"
            }}
            onMouseDown={this.onMouseDown}
          >
            <NeuButton
              style={{
                borderRadius: 10,
                backgroundColor: "#DDD",
                overflow: "hidden"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RippleButtonCard;
