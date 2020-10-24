import React, { Component } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import ScrollAnimation from "react-animate-on-scroll";

import { DemoCarousel } from "./ImageCarousel";
import * as constants from "../../constants/landing_page_constants";

import "../../css/app.css";
const { innerWidth: width } = window;

class Home extends Component {
  render() {
    return (
      <div style={{ position: "relative", height: 0.5 * width, width: "100%" }}>
        <ParallaxBanner
          layers={[
            {
              children: (
                <video
                  autoPlay
                  loop
                  ref={c => (this.player = c)}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                >
                  <source
                    src={constants.video_url}
                    type="video/mp4"
                    ref={c => (this.video = c)}
                  />
                </video>
              ),
              amount: 0.3
            }
          ]}
          style={{
            position: "absolute",
            height: "100%"
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(6, 21, 81, 0.7)"
            }}
          ></div>
        </ParallaxBanner>
        <div
          style={{
            top: "0%",
            height: "100%",
            width: "100%",
            position: "relative"
          }}
        >
          <div style={{ position: "absolute", height: "100%", width: "100%" }}>
            <img src={constants.kp_logo} style={{ height: "10%" }} />
            <ScrollAnimation animateIn="fadeInUp">
              <div className="centerH" style={{ width: "50%" }}>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: "4vw",
                    color: "white"
                  }}
                >
                  Bringing videos to life
                </p>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: "2vw",
                    color: "white"
                  }}
                >
                  Generate viewer engagement and track intent using interactive
                  videos
                </p>
              </div>
            </ScrollAnimation>
            <div
              className="centerH"
              style={{
                position: "absolute",
                top: "30%",
                left: "17.5%",
                width: "65%",
                height: "70%"
              }}
            >
              <DemoCarousel demos={constants.demos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
