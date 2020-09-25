import React, { Component } from "react";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import { ParallaxProvider } from "react-scroll-parallax";

import TopNavBar from "../components/LandingPage/TopNavBar";

import Home from "../components/LandingPage/Home";
import About from "../components/LandingPage/About";
import Products from "../components/LandingPage/Products";
import HowItWorks from "../components/LandingPage/HowItWorks";
import HowItHelps from "../components/LandingPage/HowItHelps";
import Contact from "../components/LandingPage/Contact";

class LandingPage extends Component {
  componentWillMount() {
    configureAnchors({ offset: -50, scrollDuration: 500 });
  }
  render() {
    return (
      <ParallaxProvider>
        <div>
          <TopNavBar />
          <div style={{ marginTop: 50 }}>
            <ScrollableAnchor id={"home"}>
              <Home />
            </ScrollableAnchor>
            <ScrollableAnchor id={"about"}>
              <About />
            </ScrollableAnchor>
            <ScrollableAnchor id={"products"}>
              <Products />
            </ScrollableAnchor>
            <ScrollableAnchor id={"howitworks"}>
              <HowItWorks />
            </ScrollableAnchor>
            <ScrollableAnchor id={"howithelps"}>
              <HowItHelps />
            </ScrollableAnchor>
            <ScrollableAnchor id={"contact"}>
              <Contact />
            </ScrollableAnchor>
          </div>
          {/* <FooterStrip /> */}
        </div>
      </ParallaxProvider>
    );
  }
}

export default LandingPage;
