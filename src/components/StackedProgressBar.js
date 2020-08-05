import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const theme = createMuiTheme({
  overrides: {
    MuiSlider: {
      // Name of the rule
      mark: {
        color: "red",
        height: "200%",
        position: "absolute",
        top: "-50%",
        width: "1%"
      },
      markActive: {
        backgroundColor: "white",
        height: "200%",
        position: "absolute",
        top: "-50%",
        width: "1%"
      },
      rail: {
        color: "white",
        height: "100%"
      },
      track: {
        color: "#1E80E0",
        height: "100%"
      },
      thumb: {
        color: "white"
      }
    }
  }
});

function seconds_to_percentage(s, total) {
  return (s * 100) / total;
}

function percentage_to_seconds(p, total) {
  return parseInt((p / 100) * total);
}
function format_seconds(s, isHour = false) {
  if (isHour) {
    return new Date(parseInt(s) * 1000).toISOString().substr(11, 8);
  } else {
    return new Date(parseInt(s) * 1000).toISOString().substr(14, 5);
  }
}

export class DurationText extends Component {
  render() {
    const { current, total } = this.props;

    if (!isNaN(total)) {
      return (
        <p
          style={{
            margin: 0,
            padding: 0,
            color: "white"
          }}
        >
          {current &&
            total &&
            `${format_seconds(current)}/${format_seconds(total)}`}
        </p>
      );
    } else {
      return null;
    }
  }
}

class StackedProgressBar extends Component {
  state = {
    height: 50,
    pMarks: []
  };

  onChangeSlider = (e, value) => {
    const { marks, total, onChangeSlider } = this.props;
    let s = percentage_to_seconds(value, total);
    // let min = 5;
    marks.map(item => {
      if (item.value <= s && item.end >= s) {
        // min = 0;
        s = item.value;
      }
      return true;
    });

    onChangeSlider && onChangeSlider(s);
  };
  componentDidMount() {
    const { marks, total } = this.props;
    if (marks) {
      const pMarks = marks.map(item => {
        return {
          value: seconds_to_percentage(item.value, total)
        };
      });
      this.setState({ pMarks: pMarks });
    }
  }
  render() {
    const { current, total, onChangeSlider, marks } = this.props;
    const { pMarks } = this.state;
    if (!isNaN(total)) {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: "auto auto"
          }}
        >
          {current && total && (
            <ThemeProvider theme={theme}>
              <Slider
                value={seconds_to_percentage(current, total)}
                style={{
                  width: "96%",
                  height: `${this.state.height}%`,
                  padding: 0,
                  color: "orange"
                }}
                onChange={this.onChangeSlider}
                step={0.01}
                valueLabelDisplay="off"
                valueLabelFormat={x =>
                  format_seconds(parseFloat(percentage_to_seconds(x, total)))
                }
                marks={pMarks}
              />
            </ThemeProvider>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default StackedProgressBar;
