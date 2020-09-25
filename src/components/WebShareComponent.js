import React, { Component } from "react";
import imageDataURI from "image-data-uri";

class WebShareComponent extends Component {
  state = {
    text: ""
  };
  onClick = () => {
    if (navigator.share) {
      imageDataURI
        .encodeFromURL(
          "https://storage.googleapis.com/kp_videos/ProfilePics/IMG-20200701-WA0013.jpg"
        )
        .then(res =>
          navigator
            .share({
              title: "web.dev",
              text: "Check out web.dev.",
              url: "https://web.dev/",
              files: [res]
            })
            .then(() => console.log("Successful share"))
            .catch(error => this.setState({ text: error }))
        );
    } else {
      console.log("not supported");
    }
  };
  render() {
    return (
      <div>
        <h1 onClick={this.onClick}>Click me</h1>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default WebShareComponent;
