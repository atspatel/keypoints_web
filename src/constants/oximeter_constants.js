import * as action_constants from "./action_constants";
import * as popup_constants from "./popup_constants";
import * as radius_constants from "./radius_constants";

import * as config from "../config";

export const video_id = "oximeter";
export const BASE_DIR_oximeter = `${config.BASE_DIR}/oximeter`;
export const video_url = `${BASE_DIR_oximeter}/video2.mp4#t=18`;
export const url_thumbnail = `${BASE_DIR_oximeter}/thumbnail.png`;
export const chart_url = `${BASE_DIR_oximeter}/chart.png`;

const shop_url =
  "https://clubconciergeonline.com/shop/ols/products/pulse-oximeter";

export const loop_time = 55.3;

export const overlay_buttons = [
  {
    id: 1,
    start: 13.5,
    end: 15,
    pauseVideo: 14,
    bbox: [0.3, 0.59, 0.25, 0.07],
    button: {
      id: "oximeter_pause",
      shape: radius_constants.RECT,
      action: action_constants.ACTION_SEEK_TO_PLAY,
      action_id: 17,
      data: 17
    }
  },
  {
    id: 2,
    start: 17,
    end: 38,
    bbox: [0.76, 0.07, 0.36, 0.13],
    button: {
      id: "oximeter_chart",
      shape: null,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_CHART,
      data: chart_url
    }
  },
  {
    id: 3,
    start: 38,
    end: 52,
    bbox: [0.74, 0.56, 0.35, 0.13],
    button: {
      id: "oximeter_shop1",
      shape: null,
      action: action_constants.ACTION_URL,
      action_id: shop_url,
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
