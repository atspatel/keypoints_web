import React, { Component } from "react";

import "../css/border.css";
class RadiusDiv extends Component {
  render() {
    const { isSelected } = this.props;
    const selectedClass = isSelected ? "selected" : "";
    return (
      <div className="box">
        <span className={`span_h ${selectedClass}`}></span>
        <span className={`span_h ${selectedClass}`}></span>
        <span className={`span_v ${selectedClass}`}></span>
        <span className={`span_v ${selectedClass}`}></span>
      </div>
    );
  }
}

export default RadiusDiv;
