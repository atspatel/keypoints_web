import React, { Component } from "react";
import ReactFitText from "react-fittext";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/overrides.scss";
import { Carousel } from "react-responsive-carousel";

class ImageCarousel extends Component {
  render() {
    const { images } = this.props;
    return (
      <Carousel
        // autoPlay
        interval={2000}
        className="carousel-wrapper"
        showThumbs={false}
        centerMode
        infiniteLoop
        centerSlidePercentage={90}
      >
        {images.map(item => {
          return (
            <div
              className="image-container"
              style={{
                backgroundColor: "black",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative"
              }}
            >
              <img
                src={item.source}
                style={{
                  height: "90%",
                  width: "100%",
                  position: "absolute",
                  top: "5%",
                  left: "0%",
                  objectFit: "contain"
                }}
                alt=""
              />
              {item.legend && (
                <div style={{ width: "100%" }}>
                  <ReactFitText compressor={2.5}>
                    <p
                      className="legend_custom"
                      style={{
                        top: 0,
                        left: "5%",
                        margin: "0px 0px",
                        padding: "0% 0px"
                      }}
                    >
                      {item.legend}
                    </p>
                  </ReactFitText>
                </div>
              )}
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default ImageCarousel;
