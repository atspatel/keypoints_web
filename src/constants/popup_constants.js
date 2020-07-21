import React from "react";

import CameraPopUp from "../components/CameraPopUp";
import SpecificationPopUp from "../components/SpecificationPopUp";
import ImagePopUp from "../components/ImagePopUp";

export const ACTION_POPUP = "open_popup";
export const ACTION_URL = "open_url";
export const ACTION_SEEK_TO = "seek_to";
export const ACTION_SEEK_TO_PLAY = "seek_to_play";

// Leave 0.08 at bottom for back button
export const POPUP_SPECIFICATION = {
  showOverlayButtons: false,
  value: "popup_specification",
  bbox: [0.02, 0.05, 0.9, 0.9],
  component: props => <SpecificationPopUp {...props} />
};
export const POPUP_CAMERA = {
  showOverlayButtons: false,
  value: "popup_camera",
  bbox: [0.02, 0.05, 0.9, 0.9],
  component: props => <CameraPopUp {...props} />
};
export const POPUP_PROCESSOR = {
  showOverlayButtons: true,
  value: "popup_processor",
  bbox: [0.24, 0.345, 0.31, 0.68],
  component: props => <ImagePopUp {...props} />
};

export const POPUP_CHART = {
  showOverlayButtons: false,
  value: "chart_popup",
  bbox: [0.05, 0.2, 0.6, 0.85],
  component: props => <ImagePopUp {...props} />
};
