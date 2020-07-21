import React, { Component } from "react";
import ImageCarousel from "./ImageCarousel";

class CameraPopUp extends Component {
  render() {
    const { data: phone } = this.props;
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <ImageCarousel images={phone.camera_images} />
      </div>
    );
  }
}

export default CameraPopUp;
