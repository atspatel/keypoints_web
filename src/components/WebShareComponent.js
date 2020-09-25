import React, { Component } from "react";
import imageDataURI from "image-data-uri";

class WebShareComponent extends Component {
  state = {
    text: ""
  };

  imageUrltoFile = async () => {
    return fetch(
      "https://storage.googleapis.com/kp_videos/ProfilePics/IMG-20200701-WA0013.jpg"
    )
      .then(res => {
        return res.arrayBuffer();
      })
      .then(buf => {
        return new File([buf], "test.jpg", { type: "image/jpg" });
      });
  };
  onClick = () => {
    this.imageUrltoFile().then(file => {
      console.log(file);
    });
    if (navigator.share) {
      this.imageUrltoFile().then(file => {
        const fileArray = Object.freeze([file]);
        console.log(fileArray);
        navigator
          .share({
            title: "web.dev",
            text: "Check out web.dev.",
            url: "https://web.dev/",
            files: fileArray
          })
          .then(() => console.log("Successful share"))
          .catch(error => console.log(error));
      });
    } else {
      this.setState({ text: "not supported" });
    }
  };
  render() {
    return (
      <div>
        <h1 onClick={this.onClick}>Click me</h1>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default WebShareComponent;