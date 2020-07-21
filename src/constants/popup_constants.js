import React from "react";

import CameraPopUp from "../components/CameraPopUp";
import SpecificationPopUp from "../components/SpecificationPopUp";
import ProcessorPopUp from "../components/ProcessorPopUp";

export const ACTION_POPUP = "open_popup";
export const ACTION_URL = "open_url";

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
  component: props => <ProcessorPopUp {...props} />
};
