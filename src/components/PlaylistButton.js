import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import NeuButton from "./NeuButton";
import "../css/app.css";

import { post_activity } from "../functions/post_activity";
const default_borderColor = "#494949";

export class PlaylistButton extends Component {
  state = {
    opacity: 1
  };
  onClick = item => {
    const { video_id, session_id } = this.props;
    post_activity("click", video_id, item.button_id, session_id);
    this.props.onClick && this.props.onClick(item.id);
  };
  render() {
    const {
      video_id,
      session_id,
      bgColor,
      size,
      item,
      isSelected,
      borderColor,
      circularFill,
      border
    } = this.props;
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
          {circularFill && (
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
                  borderColor: borderColor ? borderColor : default_borderColor
                })}
              />
            </div>
          )}
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
                border: border ? `2px solid ${borderColor}` : null
              }}
            />
          </div>
        </NeuButton>
      </div>
    );
  }
}
export default PlaylistButton;
