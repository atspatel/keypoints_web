import React, { Component } from "react";
import classNames from "classnames";

import "../css/accordin.scss";

const characters = [
  {
    id: 1,
    name: "Spider-Man",
    img: "./media/lilly/cutout/spiderman.png",
    color: "rgba(43, 55, 132, 0.5)",
    vote: 30
  },
  {
    id: 2,
    name: "Carol Danvers",
    img: "./media/lilly/cutout/carol.png",
    color: "rgba(14, 74, 106, 0.5)",
    vote: 10
  },
  {
    id: 3,
    name: "Thanos",
    img: "./media/lilly/cutout/thanos.png",
    color: "rgba(167, 136, 168, 0.5)",
    vote: 20,
    media: [
      {
        id: 1,
        src: "./media/lilly/thanos_image1.jpeg",
        type: "image"
      }
    ]
  },
  {
    id: 4,
    name: "Hulk",
    img: "./media/lilly/cutout/hulk.png",
    color: "rgba(143,31,144, 0.5)",
    vote: 15,
    media: [
      {
        id: 1,
        src: "https://media.giphy.com/media/xT9Igh1S1oGnsbDaFO/giphy.mp4",
        type: "video"
      }
    ]
  },
  {
    id: 5,
    name: "Thor",
    img: "./media/lilly/cutout/thor.png",
    color: "rgba(184, 0, 0, 0.5)",
    vote: 25,
    media: [
      {
        id: 1,
        src: "https://media.giphy.com/media/EOfarA6ZUqzZu/giphy.mp4",
        type: "video"
      },
      {
        id: 2,
        src: "https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif",
        type: "gif"
      }
    ]
  }
];

class LillyPopup extends Component {
  state = {
    hovered: 0,
    selected: 0
  };
  onClick = item => {
    const { selected } = this.state;
    if (item.id === selected) {
      this.setState({ selected: 0 });
      document.body.style.backgroundColor = "rgba(0, 0, 0, 1)";
    } else {
      this.setState({ selected: item.id });
      document.body.style.backgroundColor = item.color
        ? item.color
        : "rgba(255, 0, 0, 0.5)";
    }
  };
  render() {
    const { hovered, selected } = this.state;
    return (
      <div
        className="container"
        onMouseLeave={() => this.setState({ hovered: 0 })}
      >
        {characters.map(item => {
          const isMedia = item.media && item.media.length > 0;
          return (
            <div
              className={classNames("card", {
                selected: selected === item.id,
                hovered:
                  hovered === item.id || (hovered === 0 && selected === item.id)
              })}
              onMouseEnter={() => this.setState({ hovered: item.id })}
              //   onClick={}
              onDoubleClick={() => this.onClick(item)}
            >
              <div style={{ flex: 1 }}>
                <img className="avatar" src={item.img} />
              </div>
              {isMedia && (
                <div className="hover-content">
                  {item.media.map(media_info => {
                    if (media_info.type === "video") {
                      return (
                        <video
                          src={media_info.src}
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            margin: "10% 0%",
                            borderRadius: 10
                          }}
                          autoPlay
                          muted
                          loop
                        />
                      );
                    } else if (
                      media_info.type === "gif" ||
                      media_info.type === "image"
                    ) {
                      return (
                        <img
                          src={media_info.src}
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            borderRadius: 10
                          }}
                        />
                      );
                    }
                  })}
                </div>
              )}
              <div className="card__head">{item.name}</div>
              <div className="result_bar">
                <div
                  className="result_trail"
                  style={{ height: `${item.vote}%` }}
                ></div>
                <div
                  style={{
                    color: "yellow",
                    position: "absolute",
                    width: "100%",
                    bottom: `${item.vote}%`,
                    left: 0,
                    textAlign: "center"
                  }}
                >
                  {item.vote}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LillyPopup;
