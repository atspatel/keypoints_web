import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/audio_001`;

export const video_id = "audio_001";
export const lang = "hindi";

export const title = {
  hindi: "तबला बजाते हुए गणपति।"
};

export const video_info = {
  src: `${BASE_DIR_video}/tabla_video_001/tabla_video_001.m3u8`,
  thumbnail: `${BASE_DIR_video}/tabla_video_001/tabla_video_001_thumb.png`
};

export const playlist = [
  {
    id: 1,
    button_id: "audio_001_button",
    thumbnail: `${BASE_DIR_video}/thumb_001.jpg`,
    src: `${BASE_DIR_video}/audio_001.mp3`
  },
  {
    id: 2,
    button_id: "audio_002_button",
    thumbnail: `${BASE_DIR_video}/thumb_002.jpg`,
    src: `${BASE_DIR_video}/audio_002.mp3`
  },
  {
    id: 3,
    button_id: "audio_003_button",
    thumbnail: `${BASE_DIR_video}/thumb_003.jpg`,
    src: `${BASE_DIR_video}/audio_003.mp3`
  },
  {
    id: 4,
    button_id: "audio_004_button",
    thumbnail: `${BASE_DIR_video}/thumb_004.jpg`,
    src: `${BASE_DIR_video}/audio_004.mp3`
  },
  {
    id: 5,
    button_id: "audio_005_button",
    thumbnail: `${BASE_DIR_video}/thumb_005.jpg`,
    src: `${BASE_DIR_video}/audio_005.mp3`
  }
];
