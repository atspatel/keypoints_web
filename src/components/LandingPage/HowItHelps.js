import React, { Component } from "react";
import { HowItHelpsCarousel } from "./ImageCarousel";

import * as constants from "../../constants/landing_page_constants";
import "../../css/app.css";

class HowItHelps extends Component {
  render() {
    return (
      <div
        style={{
          padding: 30,
          height: 400,
          width: "100%",
          position: "relative",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${constants.how_it_helps_png})`,
          overflow: "hidden"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "absolute",
            height: "100%",
            width: "100%"
          }}
        ></div>
        <div
          style={{
            maxWidth: 600,
            width: "100%"
          }}
          className="centerH"
        >
          <HowItHelpsCarousel cards={constants.cards} />
        </div>
      </div>
    );
  }
}

export default HowItHelps;
