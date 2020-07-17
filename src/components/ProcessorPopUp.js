import React, { Component } from "react";

class ProcessorPopUp extends Component {
  render() {
    const { processor_image } = this.props;
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <img
          src={processor_image}
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

export default ProcessorPopUp;
