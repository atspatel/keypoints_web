import React, { Component } from "react";
import classNames from "classnames";

import "../css/accordin.scss";

const characters = [
  {
    id: 1,
    name: "Spider-Man",
    img: "./media/lilly/cutout/spiderman.png",
    color: "rgba(43, 55, 132, 0.5)"
  },
  {
    id: 2,
    name: "Carol Danvers",
    img: "./media/lilly/cutout/carol.png",
    color: "rgba(14, 74, 106, 0.5)"
  },
  {
    id: 3,
    name: "Thanos",
    img: "./media/lilly/cutout/thanos.png",
    color: "rgba(167, 136, 168, 0.5)"
  },
  {
    id: 4,
    name: "Hulk",
    img: "./media/lilly/cutout/hulk.png",
    color: "rgba(143,31,144, 0.5)"
  },
  {
    id: 5,
    name: "Thor",
    img: "./media/lilly/cutout/thor.png",
    color: "rgba(184, 0, 0, 0.5)"
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
              <img className="avatar" src={item.img} />
              {/* <div className="hover-content">
                <img src={item.img} />
              </div> */}
              <div className="card__head">{item.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LillyPopup;
