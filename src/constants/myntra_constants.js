import * as action_constants from "./action_constants";
import * as popup_constants from "./popup_constants";
import * as radius_constants from "./radius_constants";

import * as config from "../config";
import * as constants from "./constants";

export const video_id = "myntra";

export const BASE_DIR_myntra = `${config.BASE_DIR}/myntra/video_001`;
export const video_url = `${BASE_DIR_myntra}/dress1/dress1.mp4`;
export const images_folder = `${BASE_DIR_myntra}/dress1_images`;

const image_list = [
  {
    id: 1,
    source: `${images_folder}/image1.png`
  },
  {
    id: 2,
    source: `${images_folder}/image2.png`
  },
  {
    id: 3,
    source: `${images_folder}/image3.png`
  },
  {
    id: 4,
    source: `${images_folder}/image4.png`
  }
];

export const overlay_buttons = [
  {
    start: 0,
    end: -1,
    id: "button_001",
    bbox: [0.15, 0.04, 0.16, 0.65],
    button: {
      id: `button_001`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_IMAGE_CAROUSEL,
      data: image_list
    }
  }
];
