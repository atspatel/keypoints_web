import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "../../css/app.css";
import * as constants from "../../constants/landing_page_constants";

class HowItWorks extends Component {
  render() {
    return (
      <div
        style={{
          padding: "30px 10px",
          backgroundColor: "#F2F7FF"
        }}
      >
        <p className="h2" style={{ margin: 0, padding: 0 }}>
          How it works <br />
          Two simple steps
        </p>
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 800,
              padding: "40px 0px"
            }}
            className="centerH"
          >
            <div
              style={{
                flex: 1,
                minWidth: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={constants.speed_png}
                style={{ height: 200, width: 200 }}
                alt=""
              />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p className="h2" style={{ margin: 0, padding: 0 }}>
                Easy to create
              </p>
              <p style={{ margin: 0, padding: 0 }}>
                You don't need to reinvent the wheel. You can use either use
                your existing video content and add interactivity to it using
                KeyPoints, or you can create and edit videos on the go on
                KeyPoints mobile and desktop apps.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 800,
              padding: "40px 0px"
            }}
            className="centerH"
          >
            <div style={{ flex: 1, minWidth: 200 }}>
              <p className="h2" style={{ margin: 0, padding: 0 }}>
                Seamlessly integrate
              </p>
              <p style={{ margin: 0, padding: 0 }}>
                Simple integrate your KeyPoints channels with all your digital
                assets, websites, apps, blogs; and post on your social media
                directly from KeyPoints creator dashboard.
              </p>
            </div>
            <div
              style={{
                flex: 1,
                minWidth: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={constants.integration_png}
                style={{ height: 200, width: 200 }}
                alt=""
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default HowItWorks;
