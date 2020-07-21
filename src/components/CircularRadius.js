import React, { Component } from "react";
// import { useSpring, animated, interpolate } from "react-spring";
import { Keyframes, animated } from "react-spring/renderprops";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Script = Keyframes.Spring(async next => {
  while (true)
    await next({
      o: 100,
      from: { o: -100 },
      config: { duration: 5000 },
      delay: 0,
      reset: true
    });
});

class CircleRadius extends Component {
  render() {
    return (
      <Script>
        {props => (
          <animated.div>
            <CircularProgressbarWithChildren
              value={Math.abs(parseInt(props.o))}
              strokeWidth={2}
              circleRatio={0.25}
              counterClockwise={parseInt(props.o) < 0}
              styles={buildStyles({
                pathColor: "white",
                trailColor: "rgba(0, 0,0, 0)",
                pathTransitionDuration: 0.001
              })}
            >
              <CircularProgressbarWithChildren
                value={Math.abs(parseInt(props.o))}
                strokeWidth={2}
                circleRatio={0.25}
                counterClockwise={parseInt(props.o) < 0}
                styles={buildStyles({
                  pathColor: "white",
                  trailColor: "rgba(0, 0,0, 0)",
                  pathTransitionDuration: 0.001,
                  rotation: 0.25
                })}
              >
                <CircularProgressbarWithChildren
                  value={Math.abs(parseInt(props.o))}
                  strokeWidth={2}
                  circleRatio={0.25}
                  counterClockwise={parseInt(props.o) < 0}
                  styles={buildStyles({
                    pathColor: "white",
                    trailColor: "rgba(0, 0,0, 0)",
                    pathTransitionDuration: 0.001,
                    rotation: 0.5
                  })}
                >
                  <CircularProgressbar
                    value={Math.abs(parseInt(props.o))}
                    strokeWidth={2}
                    circleRatio={0.25}
                    counterClockwise={parseInt(props.o) < 0}
                    styles={buildStyles({
                      pathColor: "white",
                      trailColor: "rgba(0, 0,0, 0)",
                      pathTransitionDuration: 0.001,
                      rotation: 0.75
                    })}
                  />
                </CircularProgressbarWithChildren>
              </CircularProgressbarWithChildren>
            </CircularProgressbarWithChildren>
          </animated.div>
        )}
      </Script>
    );
  }
}

export default CircleRadius;
