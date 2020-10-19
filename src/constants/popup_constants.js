import React from "react";

import MediaCarousel from "../components/MediaCarousel";
import VideoPopUp, { onClosePopUp } from "../components/VideoPopUp";

import SourcePopUp from "../components/SourcePopUp";
import SpecificationPopUp from "../components/SpecificationPopUp";
import LilyPopup, { onCloseQuiz } from "../components/LilyPopup";

export const POPUP_CAROUSEL = "mediaCarousel";
export const POPUP_HTML = "popupHtml";

export const POPUP_VIDEO = "popup_video";

export const POPUP_SPECIFICATION = "popup_specification";
export const POPUP_SOURCES = "popup_sources";
export const POPUP_LILY_QUIZ = "popup_lilyQuiz";

// Leave 0.08 at bottom for back button
export const POPUP = {
  [POPUP_HTML]: {
    popup_info: {
      pauseVideo: true,
      showOverlayButton: false,
      showCloseButton: true,
      inDuration: 1,
      bbox: { top: 0.02, left: 0.05, width: 0.9, height: 0.9 }
    },
    popup_comp: {
      component: null
    }
  },
  [POPUP_CAROUSEL]: {
    popup_comp: {
      component: props => <MediaCarousel {...props} />
    }
  },

  [POPUP_SPECIFICATION]: {
    popup_info: {
      pauseVideo: true,
      showOverlayButton: false,
      showCloseButton: true,
      inDuration: 1,
      bbox: { top: 0.02, left: 0.05, width: 0.9, height: 0.9 }
    },
    popup_comp: {
      component: props => <SpecificationPopUp {...props} />
    }
  },
  [POPUP_SOURCES]: {
    popup_info: {
      pauseVideo: false,
      showOverlayButton: false,
      showCloseButton: false,
      inDuration: 0.001,
      bbox: { top: 0.0, left: 0.0, width: 0.4, height: 0.8 }
    },
    popup_comp: {
      component: props => <SourcePopUp {...props} />
    }
  },
  [POPUP_LILY_QUIZ]: {
    popup_info: {
      pauseVideo: true,
      showOverlayButton: false,
      showCloseButton: false,
      inDuration: 1.5,
      bbox: { top: 0.0, left: 0.0, width: 1.0, height: 1.0 },
      background_image:
        "https://keypoints-data.s3.ap-south-1.amazonaws.com/media/lily/background.png"
    },
    popup_comp: {
      component: props => <LilyPopup {...props} />,
      onClose: onCloseQuiz
    }
  },
  [POPUP_VIDEO]: {
    popup_info: {
      pauseVideo: true,
      showOverlayButton: false,
      showCloseButton: false,
      inDuration: 0.001,
      bbox: { top: 0, left: 0, width: 1, height: 1 }
    },
    popup_comp: {
      component: props => <VideoPopUp {...props} />,
      onClose: onClosePopUp
    }
  }
};
