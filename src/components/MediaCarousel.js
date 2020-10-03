import React, { Component } from "react";
import ReactFitText from "react-fittext";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/overrides.scss";
import { Carousel } from "react-responsive-carousel";

class RenderMedia extends Component {
  render() {
    const { item } = this.props;
    const media_type = item.media_type ? item.media_type : "image";
    if (media_type === "image") {
      return (
        <>
          <img
            src={item.media.src}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0%",
              left: "0%",
              objectFit: "contain"
            }}
            alt=""
          />
          {item.media.title && (
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
                  {item.media.title}
                </p>
              </ReactFitText>
            </div>
          )}
        </>
      );
    } else {
      return <div></div>;
    }
  }
}

class MediaCarousel extends Component {
  render() {
    const { data } = this.props;
    return (
      <Carousel
        // autoPlay
        interval={2000}
        className="carousel-wrapper"
        showThumbs={false}
        centerMode
        infiniteLoop
        centerSlidePercentage={data.length === 1 ? 100 : 90}
        style={{ backgroundColor: "white" }}
      >
        {data.map(item => {
          return (
            <div
              key={item.id}
              className="image-container"
              style={{
                backgroundColor: "black",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                width: data.length === 1 ? "100%" : "96%",
                margin: data.length === 1 ? "0% 0%" : "0% 2%"
              }}
            >
              <RenderMedia item={item} />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default MediaCarousel;
