import React from "react";

import * as action_constants from "./action_constants";

import CameraPopUp from "../components/CameraPopUp";
import SpecificationPopUp from "../components/SpecificationPopUp";
import ImagePopUp from "../components/ImagePopUp";
import VideoPopUp, { onClosePopUp } from "../components/VideoPopUp";

export const POPUP_HTML = "popup_html";
export const POPUP_SPECIFICATION = "popup_specification";
export const POPUP_CAMERA = "popup_camera";
export const POPUP_VIDEO = "popup_video";
export const POPUP_PROCESSOR = "popup_processor";
export const POPUP_CHART = "popup_chart";

// Leave 0.08 at bottom for back button
export const POPUP = {
  [POPUP_HTML]: {
    showOverlayButtons: false,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.02, 0.05, 0.9, 0.9],
    component: null
  },
  [POPUP_SPECIFICATION]: {
    showOverlayButtons: false,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.02, 0.05, 0.9, 0.9],
    component: props => <SpecificationPopUp {...props} />
  },
  [POPUP_CAMERA]: {
    showOverlayButtons: false,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.02, 0.05, 0.9, 0.9],
    component: props => <CameraPopUp {...props} />
  },
  [POPUP_PROCESSOR]: {
    showOverlayButtons: true,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.24, 0.345, 0.31, 0.68],
    component: props => <ImagePopUp {...props} />
  },
  [POPUP_CHART]: {
    showOverlayButtons: false,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.05, 0.2, 0.6, 0.85],
    component: props => <ImagePopUp {...props} />
  },
  [POPUP_VIDEO]: {
    showOverlayButtons: false,
    showBackButton: false,
    inDuration: 0.001,
    bbox: [0, 0, 1, 1],
    component: props => <VideoPopUp {...props} />,
    onClose: onClosePopUp
  }
};
