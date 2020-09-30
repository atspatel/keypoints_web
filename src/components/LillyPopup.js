import React, { Component } from "react";
import classNames from "classnames";

import "../css/accordin.scss";

const characters = [
  {
    id: 1,
    name: "Spider-Man",
    img: "./media/lilly/cutout/spiderman.png",
    h_img: "https://media.giphy.com/media/d68xnF0YQbo42WiKzk/source.gif",
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
    h_img:
      "https://media.tenor.com/images/5185e189880510119152ade7d0859fcc/tenor.gif",
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
    selected: 0,
    final: 0
  };
  onClick = item => {
    const { selected, final } = this.state;
    if (final <= 0) {
      if (item.id === selected) {
        this.setState({ selected: 0 });
        document.body.style.backgroundColor = "rgba(0, 0, 0, 1)";
      } else {
        this.setState({ selected: item.id });
        document.body.style.backgroundColor = item.color
          ? item.color
          : "rgba(255, 0, 0, 0.5)";
      }
    }
  };

  onSelect = item => {
    const { final } = this.state;
    if (final <= 0) {
      this.setState({ selected: item.id, final: item.id });
      document.body.style.backgroundColor = item.color
        ? item.color
        : "rgba(255, 0, 0, 0.5)";
    }
  };

  onHover = id => {
    const { final } = this.state;
    if (final <= 0) {
      this.setState({ hovered: id });
    }
  };
  render() {
    const { hovered, selected, final } = this.state;
    return (
      <div className="container" onMouseLeave={() => this.onHover(0)}>
        {characters.map(item => {
          const isMedia = item.media && item.media.length > 0;
          const isHovered =
            hovered === item.id || (hovered === 0 && selected === item.id);
          return (
            <div
              className={classNames("card", {
                selected: selected === item.id,
                hovered: isHovered,
                non_final: final > 0 && final !== item.id
              })}
              onMouseEnter={() => this.onHover(item.id)}
              //   onClick={}
              onDoubleClick={() => this.onClick(item)}
            >
              <div style={{ flex: 1 }}>
                <img
                  className="avatar"
                  src={isHovered && item.h_img ? item.h_img : item.img}
                />
              </div>
              {final <= 0 && (
                <div
                  className="card_button"
                  onClick={e => {
                    e.stopPropagation();
                    this.onSelect(item);
                  }}
                >
                  <p className="text">Go with {item.name}</p>
                </div>
              )}
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
                <p
                  style={{
                    color: "yellow",
                    position: "absolute",
                    width: "100%",
                    bottom: `${item.vote}%`,
                    left: 0,
                    textAlign: "center",
                    fontSize: "1vw"
                  }}
                >
                  {item.vote}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LillyPopup;
