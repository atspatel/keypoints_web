import React from "react";

import CameraPopUp from "../components/CameraPopUp";
import SpecificationPopUp from "../components/SpecificationPopUp";
import ImagePopUp from "../components/ImagePopUp";

export const POPUP_SPECIFICATION = "popup_specification";
export const POPUP_CAMERA = "popup_camera";
export const POPUP_PROCESSOR = "popup_processor";
export const POPUP_CHART = "popup_chart";

// Leave 0.08 at bottom for back button
export const POPUP = {
  [POPUP_SPECIFICATION]: {
    showOverlayButtons: false,
    bbox: [0.02, 0.05, 0.9, 0.9],
    component: props => <SpecificationPopUp {...props} />
  },
  [POPUP_CAMERA]: {
    showOverlayButtons: false,
    bbox: [0.02, 0.05, 0.9, 0.9],
    component: props => <CameraPopUp {...props} />
  },
  [POPUP_PROCESSOR]: {
    showOverlayButtons: true,
    bbox: [0.24, 0.345, 0.31, 0.68],
    component: props => <ImagePopUp {...props} />
  },
  [POPUP_CHART]: {
    showOverlayButtons: false,
    bbox: [0.05, 0.2, 0.6, 0.85],
    component: props => <ImagePopUp {...props} />
  }
};
