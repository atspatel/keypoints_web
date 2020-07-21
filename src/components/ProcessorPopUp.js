import React, { Component } from "react";

class ProcessorPopUp extends Component {
  render() {
    const { data: phone } = this.props;
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <img
          src={phone.processor}
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
