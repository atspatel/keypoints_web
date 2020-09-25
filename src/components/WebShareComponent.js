import React, { Component } from "react";

class WebShareComponent extends Component {
  onClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "web.dev",
          text: "Check out web.dev.",
          url: "https://web.dev/"
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
    } else {
      console.log("not supported");
    }
  };
  render() {
    return (
      <div>
        <h1 onClick={this.onClick}>Click me</h1>
      </div>
    );
  }
}

export default WebShareComponent;
