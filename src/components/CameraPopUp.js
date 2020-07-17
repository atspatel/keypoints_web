import React, { Component } from "react";
import ImageCarousel from "./ImageCarousel";

class CameraPopUp extends Component {
  render() {
    const { camera_images } = this.props;
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <ImageCarousel images={camera_images} />
      </div>
    );
  }
}

export default CameraPopUp;
