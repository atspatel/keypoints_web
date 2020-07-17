import React, { Component } from "react";

import "../css/border.css";
class RadiusDiv extends Component {
  render() {
    const { color } = this.props;
    const b_color = color ? color : "#f7cb49";
    return (
      <div className="box">
        <span className="span_h"></span>
        <span className="span_h"></span>
        <span className="span_v"></span>
        <span className="span_v"></span>
      </div>
    );
  }
}

export default RadiusDiv;
