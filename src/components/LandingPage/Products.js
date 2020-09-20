import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "../../css/app.css";
import * as constants from "../../constants/landing_page_constants";

class Products extends Component {
  render() {
    return (
      <div
        style={{
          padding: "30px 10px",
          backgroundColor: "#d8d3cd"
        }}
      >
        <p className="h2" style={{ margin: 0, padding: 0 }}>
          Products we have for you.
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
                src={constants.campaign_png}
                style={{ height: 200, width: 200 }}
                alt=""
              />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p className="h2" style={{ margin: 0, padding: 0 }}>
                Interactive Campaigns
              </p>
              <p style={{ margin: 0, padding: 0 }}>
                Run interactive campaigns using interactive videos. Generate 5
                times more engagement than any social media video campaign.
                Track user intent with KeyPoints smart video analytics.
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
                Interactive Shoppable experience over your site
              </p>
              <p style={{ margin: 0, padding: 0 }}>
                Drive sales through interactive video content. Get up to 9X
                purchase intent for your products.
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
                src={constants.buy_png}
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

export default Products;
