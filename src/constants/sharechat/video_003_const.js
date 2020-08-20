import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_003`;

export const title = "ऐसे बनाए जाते हैं प्यारे गणपति।";
export const isSingleAudio = true;
export const audioFile = `${BASE_DIR_video}/murti_making_audio.mp3`;
export const playlist = [
  {
    id: 1,
    src: `${BASE_DIR_video}/murti_making_01.mp4`,
    thumbnail: `${BASE_DIR_video}/murti_making_01_thumb.png`
  },
  {
    id: 2,
    src: `${BASE_DIR_video}/murti_making_02.mp4`,
    thumbnail: `${BASE_DIR_video}/murti_making_02_thumb.png`
  },
  {
    id: 3,
    src: `${BASE_DIR_video}/murti_making_03.mp4`,
    thumbnail: `${BASE_DIR_video}/murti_making_03_thumb.png`
  },
  {
    id: 4,
    src: `${BASE_DIR_video}/murti_making_04.mp4`,
    thumbnail: `${BASE_DIR_video}/murti_making_04_thumb.png`
  }
];
