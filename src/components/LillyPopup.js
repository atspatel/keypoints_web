import React, { Component } from "react";
import classNames from "classnames";

import "../css/accordin.scss";

const characters = [
  {
    id: 1,
    name: "Ved",
    img: "./media/lilly/cutout/spiderman.png",
    color: "rgba(43, 55, 132, 0.5)",
    vote: 30
  },
  {
    id: 2,
    name: "Latika",
    img: "./media/lilly/cutout/carol.png",
    color: "rgba(14, 74, 106, 0.5)",
    vote: 10
  },
  {
    id: 3,
    name: "Kapil",
    img: "./media/lilly/cutout/thanos.png",
    color: "rgba(167, 136, 168, 0.5)",
    vote: 20
  },
  {
    id: 4,
    name: "Ved",
    img: "./media/lilly/cutout/hulk.png",
    color: "rgba(143,31,144, 0.5)",
    vote: 15
  },
  {
    id: 5,
    name: "Latika",
    img: "./media/lilly/cutout/thor.png",
    color: "rgba(184, 0, 0, 0.5)",
    vote: 25
  },
  {
    id: 6,
    name: "Kapil",
    img: "./media/lilly/cutout/thanos.png",
    color: "rgba(167, 136, 168, 0.5)",
    vote: 20
  }
];

const black_bg = "rgba(0, 0, 0, 1)";

class LillyPopup extends Component {
  state = {
    hovered: 0,
    selected: 0,
    final: 0,
    background_color: black_bg
  };
  onClick = item => {
    const { selected, final } = this.state;
    if (final <= 0) {
      if (item.id === selected) {
        this.setState({ selected: 0, background_color: black_bg });
      } else {
        this.setState({
          selected: item.id,
          background_color: item.color ? item.color : black_bg
        });
      }
    }
  };

  onSelect = item => {
    const { final } = this.state;
    if (final <= 0) {
      this.setState({
        selected: item.id,
        final: item.id,
        background_color: item.color ? item.color : black_bg
      });
    }
  };

  onHover = id => {
    const { final } = this.state;
    if (final <= 0) {
      this.setState({ hovered: id });
    }
  };
  render() {
    const { hovered, selected, final, background_color } = this.state;
    return (
      <div className="main_div" style={{ backgroundColor: background_color }}>
        <div className="container" onMouseLeave={() => this.onHover(0)}>
          {characters.map(item => {
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
                // onDoubleClick={() => this.onClick(item)}
              >
                <div
                  style={{
                    flex: 1,
                    overflow: "hidden",
                    position: "relative"
                  }}
                >
                  <img className="avatar" src={item.img} />
                </div>
                {final <= 0 && (
                  <div
                    className="card_button"
                    onClick={e => {
                      e.stopPropagation();
                      this.onSelect(item);
                    }}
                  >
                    <p className="text_lilly">+VOTE</p>
                  </div>
                )}
                <div className="card__head">{item.name}</div>
                <div className="result_bar">
                  <div
                    className="result_trail"
                    style={{ height: `${item.vote}%` }}
                  ></div>
                  <p
                    className="text_percentage"
                    style={{
                      bottom: `${item.vote}%`
                    }}
                  >
                    {item.vote}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default LillyPopup;
