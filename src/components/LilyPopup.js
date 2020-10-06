import React, { Component } from "react";
import classNames from "classnames";
import ResizeObserver from "rc-resize-observer";

import "../css/accordin.scss";

const background_image = "./media/lily/background.png";
const question = "Who is the killer?";

const { innerHeight, innerWidth } = window;
const characters = [
  {
    id: 1,
    name: "Dev",
    img: "./media/lily/cutout/dev.png",
    color: "#EFB61480",
    vote: 30
  },
  {
    id: 2,
    name: "Meher",
    img: "./media/lily/cutout/meher.png",
    color: "#C96B1F80",
    vote: 10
  },
  {
    id: 3,
    name: "Latika",
    img: "./media/lily/cutout/latika.png",
    color: "#37773080",
    vote: 15
  },
  {
    id: 4,
    name: "Kapil",
    img: "./media/lily/cutout/kapil.png",
    color: "#49397A80",
    vote: 20
  },
  {
    id: 5,
    name: "Neena",
    img: "./media/lily/cutout/neena.png",
    color: "#D30B0B80",
    vote: 20
  },
  {
    id: 6,
    name: "Kabir",
    img: "./media/lily/cutout/kabir.png",
    color: "#0B93B280",
    vote: 10
  }
];

const black_bg = "rgba(0, 0, 0, 0)";

const ratio = 1.25;

class LilyPopup extends Component {
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
  updateDimensions = () => {
    const { outerHeight, outerWidth } = window;
    const { innerHeight, innerWidth } = window;

    const { height, width } = this.state;

    let new_h = innerHeight;
    let new_w = innerWidth;
    if (innerHeight > outerHeight || innerWidth > outerWidth) {
      new_h = outerHeight;
      new_w = outerWidth;
    }
    if (height !== new_h || width !== new_w) {
      this.setState({ height: new_h, width: new_w });
    }
    console.log(new_h, new_w);
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const { hovered, selected, final, background_color } = this.state;
    const { width, height } = this.state;

    let container_width = 0.9 * width;
    let container_height = (0.9 * width) / ratio;
    if (width && height && (0.9 * width) / (0.85 * height) > ratio) {
      container_height = 0.85 * height;
      container_width = ratio * 0.85 * height;
    }
    return (
      <div
        ref={c => (this.div = c)}
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundPositon: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: height ? height : innerHeight,
          width: width ? width : innerWidth
        }}
      >
        <div
          className="main_div"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: background_color
          }}
        >
          <div className="quiz_title" style={{ width: "100%", height: "15%" }}>
            <p className="title_text">{question}</p>
          </div>
          <div
            className="container"
            style={{ width: container_width, height: container_height }}
            onMouseLeave={() => this.onHover(0)}
          >
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
                  style={{ backgroundColor: item.color }}
                  onMouseEnter={() => this.onHover(item.id)}
                  onMouseLeave={() => this.onHover(0)}
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
                      <p className="text_lily">+VOTE</p>
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
                        top: `${Math.min(100 - item.vote, 95)}%`
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
        {/* </ResizeObserver> */}
      </div>
    );
  }
}

export default LilyPopup;
