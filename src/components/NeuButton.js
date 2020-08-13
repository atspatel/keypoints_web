import React, { Component } from "react";

import "../css/app.css";

class NeuButton extends Component {
  state = {
    buttonClass: "neu"
  };
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        className={this.state.buttonClass}
        onMouseDown={() => {
          this.setState({ buttonClass: "selected-neu" });
        }}
        onMouseUp={() => {
          this.setState({ buttonClass: "neu" });
        }}
        onMouseLeave={() => {
          this.setState({ buttonClass: "neu" });
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default NeuButton;
