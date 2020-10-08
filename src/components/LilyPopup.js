import React, { Component } from "react";
import classNames from "classnames";

import "../css/accordin.scss";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeCubicOut } from "d3-ease";
import { post_quiz_answer } from "../functions/lily_functions";

const background_music = "./media/lily/background_music.mp3";
const black_bg = "rgba(0, 0, 0, 0)";
const ratio = 1.25;

export const onCloseQuiz = function(player, popup_data) {
  player.currentTime = popup_data.end + 0.3;
  player.play();
};

class LillyQuiz extends Component {
  state = {
    hovered: 0,
    timer: 15,
    clock: null
  };
  onHover = id => {
    const { final } = this.props;
    if (final === null) {
      this.setState({ hovered: id });
    }
  };

  updateCounter = () => {
    const { timer, clock } = this.state;

    if (timer > 0) {
      this.setState({ timer: timer - 1 });
    } else {
      const { onSelect, selected } = this.props;
      clearInterval(clock);
      onSelect(selected);
    }
  };

  componentDidMount() {
    const { quiz } = this.props;
    quiz.isTimer &&
      setTimeout(() => {
        const clock = setInterval(() => {
          this.updateCounter();
        }, 1000);
        this.setState({ clock: clock });
      }, 2000);
  }
  render() {
    const {
      quiz,
      selected,
      final,
      onSelect,
      container_width,
      container_height
    } = this.props;
    const { hovered, timer } = this.state;

    return quiz ? (
      <>
        <div className="quiz_title" style={{ width: "100%", height: "15%" }}>
          <p className="title_text" style={{ color: "white" }}>
            {quiz.question && quiz.question.part1}&nbsp;
          </p>
          <p className="title_text">{quiz.question && quiz.question.part2}</p>
        </div>
        {quiz.isTimer && <div className="timer">{timer}</div>}
        <div
          className="container"
          style={{
            width: container_width ? container_width : "100%",
            height: container_height ? container_height : "100%",
            backgroundColor: "rgba(0,0,0,0)"
          }}
          onMouseLeave={() => this.onHover(0)}
        >
          {quiz.characters.map(item => {
            const isHovered =
              hovered === item.id ||
              (hovered === 0 && selected && selected.id === item.id);
            return (
              <div
                key={item.id}
                className={classNames("card", {
                  selected: selected && selected.id === item.id,
                  hovered: isHovered,
                  non_final: final && final.id !== item.id
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
                  <img className="avatar" src={item.thumbnail} />
                </div>
                {!final && (
                  <div
                    className="card_button"
                    onClick={e => {
                      e.stopPropagation();
                      onSelect && onSelect(item);
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
                      top: `${Math.min(100 - (item.vote ? item.vote : 0), 95)}%`
                    }}
                  >
                    {item.vote ? item.vote : 0}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    ) : null;
  }
}

class NextEpPoster extends Component {
  render() {
    const { next_ep } = this.props;
    return (
      <img
        src={next_ep.thumbnail}
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
    );
  }
}

class LilyPopup extends Component {
  state = {
    hovered: 0,
    selected: null,
    final: null,
    background_color: black_bg,
    showNext: false
  };
  onClick = item => {
    const { selected, final } = this.state;
    if (final <= 0) {
      if (selected && item.id === selected.id) {
        this.setState({ selected: null, background_color: black_bg });
      } else {
        this.setState({
          selected: item,
          background_color: item.color ? item.color : black_bg
        });
      }
    }
  };

  onSelect = (item, isCredit) => {
    const { final } = this.state;
    const { quiz, session } = this.props;
    if (final === null) {
      post_quiz_answer(session, quiz.id, item ? item.id : null);
      const { onVote } = this.props;
      this.setState(
        {
          selected: item,
          final: item,
          background_color: item.color ? item.color : black_bg
        },
        () => {
          setTimeout(() => {
            isCredit ? this.setState({ showNext: true }) : onVote(item.id);
          }, 2000);
        }
      );
    }
  };

  updateDimensions = () => {
    const { clientHeight, clientWidth } = this.div;
    const { height, width } = this.state;

    if (height !== clientHeight || width !== clientWidth) {
      this.setState({ height: clientHeight, width: clientWidth });
    }
  };

  componentDidUpdate() {
    const { anim_value } = this.props;
    if (this.audio_player) {
      this.audio_player.volume = anim_value;
    }
  }
  componentDidMount() {
    this.updateDimensions();
    const { quiz } = this.props;
    quiz && quiz.selected && this.setState({ selected: quiz.selected });
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const { selected, final, background_color } = this.state;
    const { width, height, showNext } = this.state;

    const { style, onVote, inDuration, anim_value, quiz, session } = this.props;
    let container_width = 0.9 * width;
    let container_height = (0.9 * width) / ratio;
    if (width && height && (0.9 * width) / (0.85 * height) > ratio) {
      container_height = 0.85 * height;
      container_width = ratio * 0.85 * height;
    }

    const isCredit =
      quiz && quiz.quiz_type === "credit" && quiz.credit_video ? true : false;
    const isNext = showNext && quiz && quiz.next_ep;
    return (
      <AnimatedProgressProvider
        easingFunction={easeCubicOut}
        valueStart={-1}
        valueEnd={1}
        duration={inDuration ? 2 * inDuration : 3}
      >
        {value => (
          <div
            ref={c => (this.div = c)}
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              opacity: value,
              transform: `scale(${value})`,
              background: isCredit
                ? "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.8) 40%, transparent)"
                : null,
              backgroundColor: background_color,
              ...style
            }}
          >
            {isCredit && (
              <div
                className=""
                style={{
                  width: showNext ? "50%" : "40%",
                  height: "80%",
                  position: "absolute",
                  padding: "1%",
                  top: "10%",
                  borderRadius: "1em",
                  overflow: "hidden"
                }}
              >
                <video
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  autoPlay
                  onEnded={() => console.log("ended")}
                >
                  <source src={quiz && quiz.credit_video} type="video/mp4" />
                </video>
              </div>
            )}
            <div
              className="main_div"
              style={{
                width: isCredit ? (showNext ? "50%" : "60%") : "100%",
                height: "100%",
                position: "absolute",
                right: 0
              }}
            >
              {!isCredit && (
                <audio
                  ref={c => (this.audio_player = c)}
                  src={background_music}
                  autoPlay
                  loop
                ></audio>
              )}
              {isNext ? (
                <NextEpPoster next_ep={quiz.next_ep} />
              ) : (
                <LillyQuiz
                  quiz={quiz}
                  final={final}
                  selected={selected}
                  onSelect={item => this.onSelect(item, isCredit)}
                  container_width={container_width}
                  container_height={container_height}
                />
              )}
            </div>
          </div>
        )}
      </AnimatedProgressProvider>
    );
  }
}

export default LilyPopup;
