import * as action_constants from "./action_constants";
import * as popup_constants from "./popup_constants";
import * as radius_constants from "./radius_constants";

import * as config from "../config";

export const video_id = "oximeter";
export const BASE_DIR_oximeter = `${config.BASE_DIR}/oximeter`;
export const video_url = `${BASE_DIR_oximeter}/video2.mp4#t=18`;
export const url_thumbnail = `${BASE_DIR_oximeter}/thumbnail.png`;
export const chart_url = [
  {
    media_type: "image",
    media: {
      src: `${BASE_DIR_oximeter}/chart.png`
    }
  }
];

const shop_url =
  "https://clubconciergeonline.com/shop/ols/products/pulse-oximeter";

export const loop_time = 55.3;

export const overlay_buttons = [
  {
    id: 1,
    start: 13.5,
    end: 15,
    id: "oximeter_pause",
    name: "oximeter_pause",
    shape: radius_constants.RECT,

    pauseVideo: 14,
    bbox: { top: 0.3, left: 0.59, width: 0.25, height: 0.07 },
    action: {
      type: action_constants.ACTION_SEEK_TO,
      data: {
        duration: 17,
        toPlay: true
      }
    }
  },
  {
    start: 17,
    end: 38,
    id: "oximeter_chart",
    name: "oximeter_chart",
    shape: null,
    bbox: { top: 0.76, left: 0.07, width: 0.36, height: 0.13 },
    action: {
      type: action_constants.ACTION_POPUP,
      data: {
        popup_info: {
          popupType: popup_constants.POPUP_CAROUSEL,
          pauseVideo: true,
          showOverlayButton: false,
          showCloseButton: true,
          inDuration: 1,
          bbox: { top: 0.05, left: 0.2, width: 0.6, height: 0.85 }
        },
        data: chart_url
      }
    }
  },
  {
    start: 38,
    end: 52,
    id: "oximeter_shop1",
    name: "oximeter_shop1",
    shape: null,
    bbox: { top: 0.74, left: 0.56, width: 0.35, height: 0.13 },
    action: {
      type: action_constants.ACTION_URL,
      data: shop_url
    }
  },
  {
    id: 4,
    start: 53,
    end: 58,
    bbox: [0.46, 0.7, 0.23, 0.1],
    button: {
      id: "oximeter_shop2",
      shape: null,
      action: action_constants.ACTION_URL,
      action_id: shop_url,
      data: shop_url
    }
  }
];
