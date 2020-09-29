import * as config from "../config";

export const BASE_DIR_tv9 = `${config.BASE_DIR}/tv9_rr`;

export const tv9_logo = `${BASE_DIR_tv9}/tv9_logo.png`;
export const arrow_gif = `${BASE_DIR_tv9}/arrow.gif`;
export const rr_logo = `${BASE_DIR_tv9}/rr_logo.png`;
export const share_button = `${BASE_DIR_tv9}/share.png`;
export const image_share_button = `${BASE_DIR_tv9}/share_1.png`;

export const video_id = "kartik_tyagi";
export const BASE_DIR_video = `${BASE_DIR_tv9}/kartik_tyagi`;
export const video_url = `${BASE_DIR_video}/video.mp4`;
export const video_thumb = `${BASE_DIR_video}/video_thumb.png`;
export const player_card = `${BASE_DIR_video}/card.png`;

export const info1 = "Kartik Tyagi";
export const info2 = "Hapur Express";
export const info3 = "Fastest ball- 145KMPH";

export const info = ["Kartik Tyagi", "Hapur Express", "Fastest ball- 145KMPH"];

export const sm_list = [
  {
    name: "Facebook",
    id: "Facebook",
    media_info: {
      media: {
        thumbnail: `${BASE_DIR_tv9}/facebook.png`
      }
    },
    url: "https://www.facebook.com/TV9Bharatvarsh/"
  },
  {
    name: "Instagram",
    id: "Instagram",
    media_info: {
      media: {
        thumbnail: `${BASE_DIR_tv9}/instagram.png`
      }
    },
    url: "https://www.instagram.com/tv9bharatvarsh/?hl=en"
  },
  {
    name: "Twitter",
    id: "twitter",
    media_info: {
      media: {
        thumbnail: `${BASE_DIR_tv9}/twitter.png`
      }
    },
    url: "https://twitter.com/TV9Bharatvarsh"
  },
  {
    name: "Sharechat",
    id: "sharechat",
    media_info: {
      media: {
        thumbnail: `${BASE_DIR_tv9}/sharechat.png`
      }
    },
    url: "https://sharechat.com/profile/tv9bharatvarsh"
  }
];

export const video_share_url = "https://keypoints.in/tv9bharat_002";
export const video_message = "Follow the Royals!!";
export const video_whatsapp_url = `https://api.whatsapp.com/send?text=${video_message} :: ${video_share_url}&source=&data=&app_absent=`;

export const image_message = "Follow Kartik Tyagi - Hapur Express";
export const image_whatsapp_url = `https://api.whatsapp.com/send?text=${image_message}&source=&data=&app_absent=`;
