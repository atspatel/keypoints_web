import React, { Component } from "react";

import ReactFitText from "react-fittext";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";

import * as constants from "../constants/constants";
import "../css/app.css";

const openUrlInTab = url => {
  window.open(url, "_blank");
};

class CircularReviewBar extends Component {
  render() {
    const { label, rating, width } = this.props;
    return (
      <div style={{ width: width, margin: "0% 3%" }}>
        <div>
          <AnimatedProgressProvider
            easingFunction={easeQuadInOut}
            valueStart={0}
            valueEnd={rating}
            duration={2}
          >
            {value => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  maxValue={10}
                  text={`${roundedValue}/10`}
                  styles={buildStyles({
                    pathTransition: "none",
                    pathColor: "#F7CB49",
                    trailColor: "#696C72",
                    textColor: "#696C72"
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
        <div>
          <ReactFitText compressor={0.7}>
            <p
              style={{
                marginTop: "1%",
                color: "#696C72"
              }}
            >
              {label.replace(/_/gi, " ")}
            </p>
          </ReactFitText>
        </div>
      </div>
    );
  }
}

class ReviewSection extends Component {
  render() {
    const { phone } = this.props;
    return (
      <div
        className="centerH"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%"
        }}
      >
        {Object.keys(phone.review).map(key => {
          return (
            <CircularReviewBar
              key={key}
              label={key}
              rating={phone.review[key]}
              width={"19%"}
            />
          );
        })}
        <div
          style={{
            width: "20%",
            // margin: "0px 3%",
            margin: "auto auto",
            color: "#696C72"
          }}
        >
          <ReactFitText compressor={1}>
            <p style={{ marginTop: "1%" }}>Powered By</p>
          </ReactFitText>
          <img
            src={constants.gadgets360_logo}
            width="80%"
            style={{
              objectFit: "contain",
              flex: 1
            }}
            alt=""
          />
        </div>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    const {
      item,
      onClick,
      isSelcted,
      compressor,
      maxWidth,
      backgroundColor
    } = this.props;
    const inactiveColor = backgroundColor ? backgroundColor : "white";
    return (
      <div
        style={{
          flex: 1,
          maxWidth: maxWidth ? maxWidth : "40%",
          maxHeight: "100%"
        }}
        onClick={() => onClick && onClick(item.id)}
      >
        <ReactFitText compressor={compressor ? compressor : 0.7}>
          <p
            style={{
              margin: "3%",
              backgroundColor: isSelcted ? "#F7CB49" : inactiveColor,
              //   border: "1px dashed black",
              padding: "1%",
              boxShadow: isSelcted
                ? "-0.1em -0.1em 0.1em black, 0.1em 0.1em 0.1em #888"
                : "0.1em 0.1em 0.1em black, -0.1em -0.1em 0.1em #888"
            }}
          >
            {item.name}
          </p>
        </ReactFitText>
      </div>
    );
  }
}

class ChoiceComponent extends Component {
  render() {
    const {
      opacity,
      color,
      model,
      selected_color,
      selected_model,
      onSelectColor,
      onSelectModel
    } = this.props;
    return (
      <div
        style={{
          opacity: opacity,
          width: "100%",
          height: "100%",
          padding: "0% 5%"
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            width: "90%",
            height: "50%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {color.map(item => {
            const isSelcted = item.id === selected_color ? true : false;
            return (
              <Button
                item={item}
                key={item.id}
                onClick={onSelectColor}
                isSelcted={isSelcted}
              />
            );
          })}
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            width: "90%",
            height: "50%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {model.map(item => {
            const isSelcted = item.id === selected_model ? true : false;
            return (
              <Button
                item={item}
                key={item.id}
                onClick={onSelectModel}
                isSelcted={isSelcted}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

class ImageCarousel extends Component {
  state = {
    current: 0
  };

  render() {
    const { images } = this.props;
    const { current } = this.state;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            width: "15%",
            flex: 1
          }}
        >
          {images.map((item, index) => {
            return (
              <div onClick={() => this.setState({ current: index })}>
                <img
                  src={item.source}
                  width="100%"
                  style={{
                    objectFit: "contain",
                    flex: 1,
                    border: "1px solid black",
                    borderRadius: "10%"
                  }}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <img
          src={images[current].source}
          height="100%"
          width="100%"
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
    );
  }
}

class SpecificationImageWithBuyNow extends Component {
  render() {
    const { phone, onCliclBuyNow } = this.props;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex"
        }}
      >
        <div height="100%" width="100%" style={{ position: "relative" }}>
          <img
            src={phone.specification}
            height="100%"
            width="100%"
            style={{ resizeMode: "cover" }}
            alt=""
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: 0,
            height: "10%",
            width: "100%"
          }}
        >
          <Button
            item={{ id: 1, name: `Buy  Now \n@${phone.price}/-` }}
            compressor={0.9}
            maxWidth={"100%"}
            backgroundColor={"white"}
            onClick={onCliclBuyNow}
          />
        </div>
      </div>
    );
  }
}

class BuyButton extends Component {
  render() {
    const { item, onClick, isSelcted } = this.props;
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button
          type="button"
          style={{
            height: "70%",
            width: "70%",
            borderRadius: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0)",
            boxShadow: isSelcted
              ? "-0.1em -0.1em 0.1em black, 0.1em 0.1em 0.1em #888"
              : "0.1em 0.1em 0.1em black, -0.1em -0.1em 0.1em #888"
          }}
        >
          {item.name === "Realme" ? (
            <img
              src={constants.realme_logo}
              style={{
                height: "70%",
                width: "70%",
                objectFit: "contain"
              }}
              onClick={() => onClick && onClick(item.id)}
              alt=""
            />
          ) : null}
          {item.name === "Whatsapp" ? (
            <WhatsAppIcon
              style={{
                height: "70%",
                width: "70%",
                color: "green",
                resizeMode: "contain"
              }}
              onClick={() => onClick && onClick(item.id)}
            />
          ) : null}
          {item.name === "Call" ? (
            <CallIcon
              style={{
                color: "blue",
                height: "70%",
                width: "70%",
                resizeMode: "contain"
              }}
              onClick={() => onClick && onClick(item.id)}
            />
          ) : null}
        </button>
      </div>
    );
  }
}

class BuyNowOptionsDiv extends Component {
  render() {
    const { phone, onCliclBuyNow } = this.props;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#F7CB49",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "70%",
            height: "60%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {phone.buyOptions.map(item => {
            return (
              <BuyButton item={item} onClick={id => openUrlInTab(item.url)} />
            );
          })}
        </div>
        <button
          type="button"
          style={{
            position: "absolute",
            height: "7.2%",
            width: "13.5%",
            bottom: "10%",
            right: "10%",
            borderRadius: "20%",
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={onCliclBuyNow}
        >
          <KeyboardArrowLeftIcon style={{ color: "black", margin: 5 }} />
        </button>
      </div>
    );
  }
}

class SpecificationImageWithBuyNowAnimation extends Component {
  render() {
    const { phone, onCliclBuyNow } = this.props;
    return (
      <AnimatedProgressProvider
        easingFunction={easeQuadInOut}
        valueStart={100}
        valueEnd={0}
        duration={2}
      >
        {value => (
          <div
            style={{
              width: "100%",
              height: "100%",
              marginLeft: `${value}%`,
              display: "flex"
            }}
          >
            <SpecificationImageWithBuyNow
              phone={phone}
              onCliclBuyNow={onCliclBuyNow}
            />
          </div>
        )}
      </AnimatedProgressProvider>
    );
  }
}

class BuyNowWithAnimation extends Component {
  render() {
    const { phone, onCliclBuyNow } = this.props;
    return (
      <AnimatedProgressProvider
        easingFunction={easeQuadInOut}
        valueStart={100}
        valueEnd={0}
        duration={1}
      >
        {value => (
          <div
            style={{
              width: "200%",
              height: "100%",
              position: "relative",
              top: 0,
              left: `${-1 * value}%`,
              display: "flex"
            }}
          >
            <BuyNowOptionsDiv phone={phone} onCliclBuyNow={onCliclBuyNow} />
            <SpecificationImageWithBuyNow
              phone={phone}
              onCliclBuyNow={onCliclBuyNow}
            />
          </div>
        )}
      </AnimatedProgressProvider>
    );
  }
}

class SpecificationPopUp extends Component {
  state = {
    width: null,
    height: null,

    selected_color: false,
    selected_model: false,
    buyScreen: false
  };

  onSelectColor = id => {
    const selected = this.state.selected_color === id ? false : id;
    this.setState({ selected_color: selected });
  };

  onSelectModel = id => {
    const selected = this.state.selected_model === id ? false : id;
    this.setState({ selected_model: selected });
  };

  onCliclBuyNow = () => {
    this.setState({ buyScreen: !this.state.buyScreen });
  };

  render() {
    const { selected_color } = this.state;
    const { data: phone } = this.props;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          overflow: "hidden",
          border: "1px solid black",
          display: "flex",
          position: "relative"
        }}
      >
        <div style={{ width: "70%", height: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "80%"
            }}
          >
            {selected_color ? (
              <ImageCarousel images={phone.phone_images[selected_color]} />
            ) : (
              <ReviewSection phone={phone} />
            )}
          </div>
          <div
            style={{
              width: "100%",
              height: "20%",
              position: "relative"
              // backgroundColor: "yellow"
            }}
          >
            <AnimatedProgressProvider
              easingFunction={easeQuadInOut}
              valueStart={0}
              valueEnd={1}
              duration={3}
            >
              {value => (
                <ChoiceComponent
                  opacity={value}
                  color={phone.color}
                  model={phone.model}
                  selected_color={this.state.selected_color}
                  selected_model={this.state.selected_model}
                  onSelectColor={this.onSelectColor}
                  onSelectModel={this.onSelectModel}
                />
              )}
            </AnimatedProgressProvider>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            overflow: "hidden"
          }}
        >
          {this.state.buyScreen ? (
            <BuyNowWithAnimation
              phone={phone}
              onCliclBuyNow={this.onCliclBuyNow}
            />
          ) : (
            <SpecificationImageWithBuyNowAnimation
              phone={phone}
              onCliclBuyNow={this.onCliclBuyNow}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SpecificationPopUp;
