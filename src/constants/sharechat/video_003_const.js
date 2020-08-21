import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_003`;

export const video_id = "murti_making_video_003";
export const title = "ऐसे बनाए जाते हैं प्यारे गणपति।";
export const isSingleAudio = true;
export const audioFile = `${BASE_DIR_video}/murti_making_audio.mp3`;
export const playlist = [
  {
    id: 1,
    button_id: "murti_making_01_button",
    src: `${BASE_DIR_video}/murti_making_01.mp4`,
    thumbnail: `${BASE_DIR_video}/murti_making_01_thumb.png`
  },
  {
    id: 2,
    button_id: "murti_making_02_button",
    src: `${BASE_DIR_video}/murti_making_02.mp4`,
    thumbnail: `${BASE_DIR_video}/murti_making_02_thumb.png`
  },
  {
    id: 3,
    button_id: "murti_making_03_button",
    src: `${BASE_DIR_video}/murti_making_03.mp4`,
    thumbnail: `${BASE_DIR_video}/murti_making_03_thumb.png`
  },
  {
    id: 4,
    button_id: "murti_making_04_button",
    src: `${BASE_DIR_video}/murti_making_04.mp4`,
    thumbnail: `${BASE_DIR_video}/murti_making_04_thumb.png`
  }
];
