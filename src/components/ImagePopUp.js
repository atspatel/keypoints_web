import React, { Component } from "react";

class ImagePopUp extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <img
          src={data}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            flex: 1
          }}
          alt=""
        />
      </div>
    );
  }
}

export default ImagePopUp;
