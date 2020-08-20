import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_004`;

export const title = "गणपति के आने से मची है सब तरफ़ धूम।";
export const isSingleAudio = true;
export const audioFile = `${BASE_DIR_video}/celebration_aarti.mp3`;
export const playlist = [
  {
    id: 1,
    src: `${BASE_DIR_video}/ballaleshvar.mp4`,
    thumbnail: `${BASE_DIR_video}/ballaleshvar_thumb.png`
  },
  {
    id: 2,
    src: `${BASE_DIR_video}/udhyan.mp4`,
    thumbnail: `${BASE_DIR_video}/udhyan_thumb.png`
  },
  {
    id: 3,
    src: `${BASE_DIR_video}/shiddhivinayak.mp4`,
    thumbnail: `${BASE_DIR_video}/shiddhivinayak_thumb.png`
  },
  {
    id: 4,
    src: `${BASE_DIR_video}/khajrana.mp4`,
    thumbnail: `${BASE_DIR_video}/khajrana_thumb.png`
  }
];
