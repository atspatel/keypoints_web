import React, { Component } from "react";
import ReactFitText from "react-fittext";
import Iframe from "react-iframe";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/overrides.scss";
import { Carousel } from "react-responsive-carousel";

class CarouselComp extends Component {
  onChange = (index, item) => {
    const { onChange } = this.props;
    onChange && onChange(index, item);
  };
  render() {
    const { children, interval, autoPlay, onChange } = this.props;
    return (
      <Carousel
        autoPlay={autoPlay}
        interval={interval ? interval : 3000}
        className="carousel-wrapper"
        showThumbs={false}
        showStatus={false}
        centerMode
        infiniteLoop
        centerSlidePercentage={100}
        onChange={this.onChange}
      >
        {children}
      </Carousel>
    );
  }
}

export class ImageCarousel extends Component {
  render() {
    const { images } = this.props;
    return (
      <CarouselComp autoPlay={true}>
        {images.map(item => {
          return (
            <div
              key={item.id}
              className="image-container"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative"
                // backgroundColor: "rgba(255, 255, 255, 1)"
              }}
            >
              <img
                src={item.source}
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
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
      </CarouselComp>
    );
  }
}
export class HowItHelpsCarousel extends Component {
  render() {
    const { cards } = this.props;
    return (
      <CarouselComp autoPlay={true}>
        {cards.map(item => {
          return (
            <div
              key={item.id}
              className="image-container"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                padding: "20px 20px"
              }}
            >
              <div>
                <p className="card_title h4">{item.title}</p>
              </div>
              <div className="centerH" style={{ padding: "20px 0px" }}>
                <p className="class_body h2">{item.text}</p>
              </div>
            </div>
          );
        })}
      </CarouselComp>
    );
  }
}

export class DemoCarousel extends Component {
  state = {
    current: null
  };
  onChange = (index, item) => {
    const { demos } = this.props;
    this.setState({ current: demos[index].id });
  };
  componentDidMount() {
    const { demos } = this.props;
    this.setState({ current: demos[0].id });
  }
  render() {
    const { demos } = this.props;
    const { current } = this.state;
    return (
      <CarouselComp onChange={this.onChange}>
        {demos.map(item => {
          return (
            <div
              key={item.id}
              className="image-container"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                padding: "20px 20px",
                backgroundColor: "rgba(0,0,0,0)"
              }}
            >
              <Iframe
                url={item.id === current ? item.source : ""}
                width="100%"
                height="100%"
                id="myId"
                display="initial"
                position="relative"
              />
            </div>
          );
        })}
      </CarouselComp>
    );
  }
}
export default CarouselComp;
