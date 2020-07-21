import React from "react";

import RadiusDiv from "../components/RadiusDiv";
import RadiusDivCircle from "../components/RadiusDivCircle";

export const RECT = "rect";
export const CIRCLE = "circle";

export const RADIUS = {
  [CIRCLE]: {
    shape: "circle",
    component: props => <RadiusDivCircle {...props} />
  },
  [RECT]: {
    shape: "rect",
    component: props => <RadiusDiv {...props} />
  }
};
