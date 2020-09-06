import React from "react";

import CameraPopUp from "../components/CameraPopUp";
import SpecificationPopUp from "../components/SpecificationPopUp";
import ImagePopUp from "../components/ImagePopUp";
import SourcePopUp from "../components/SourcePopUp";
import VideoPopUp, { onClosePopUp } from "../components/VideoPopUp";

export const POPUP_HTML = "popup_html";
export const POPUP_SPECIFICATION = "popup_specification";
export const POPUP_CAMERA = "popup_camera";
export const POPUP_VIDEO = "popup_video";
export const POPUP_PROCESSOR = "popup_processor";
export const POPUP_CHART = "popup_chart";
export const POPUP_SOURCES = "popup_sources";

// Leave 0.08 at bottom for back button
export const POPUP = {
  [POPUP_HTML]: {
    pauseVideo: true,
    showOverlayButtons: false,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.02, 0.05, 0.9, 0.9],
    component: null
  },
  [POPUP_SPECIFICATION]: {
    pauseVideo: true,
    showOverlayButtons: false,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.02, 0.05, 0.9, 0.9],
    component: props => <SpecificationPopUp {...props} />
  },
  [POPUP_CAMERA]: {
    pauseVideo: true,
    showOverlayButtons: false,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.02, 0.05, 0.9, 0.9],
    component: props => <CameraPopUp {...props} />
  },
  [POPUP_PROCESSOR]: {
    pauseVideo: true,
    showOverlayButtons: true,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.24, 0.345, 0.31, 0.68],
    component: props => <ImagePopUp {...props} />
  },
  [POPUP_CHART]: {
    pauseVideo: true,
    showOverlayButtons: false,
    showBackButton: true,
    inDuration: 1,
    bbox: [0.05, 0.2, 0.6, 0.85],
    component: props => <ImagePopUp {...props} />
  },
  [POPUP_VIDEO]: {
    pauseVideo: true,
    showOverlayButtons: false,
    showBackButton: false,
    inDuration: 0.001,
    bbox: [0, 0, 1, 1],
    component: props => <VideoPopUp {...props} />,
    onClose: onClosePopUp
  },
  [POPUP_SOURCES]: {
    pauseVideo: false,
    showOverlayButtons: false,
    showBackButton: false,
    inDuration: 0.001,
    bbox: [0.0, 0, 0.4, 0.8],
    component: props => <SourcePopUp {...props} />
  }
};
