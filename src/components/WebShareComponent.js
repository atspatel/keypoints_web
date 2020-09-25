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
        const file = new File([buf], "test.jpg", { type: "image/jpg" });
      });
  };
  onClick = () => {
    if (navigator.share) {
      this.imageUrltoFile().then(file => {
        console.log(file);
        navigator
          .share({
            title: "web.dev",
            text: "Check out web.dev.",
            url: "https://web.dev/",
            file: Object.freeze([file])
          })
          .then(() => console.log("Successful share"))
          .catch(error => this.setState({ text: error }));
      });
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
