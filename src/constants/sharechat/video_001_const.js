import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_001`;

export const title = "गणेश चतुर्थी पर शायरी।";
export const isSingleAudio = true;
export const audioFile = `${BASE_DIR_video}/lordGaneshaAarti.mp3`;
export const playlist = [
  {
    id: 1,
    src: `${BASE_DIR_video}/shayari_001.mp4`,
    thumbnail: `${BASE_DIR_video}/shayari_001_thumb.png`
  },
  {
    id: 2,
    src: `${BASE_DIR_video}/shayari_002.mp4`,
    thumbnail: `${BASE_DIR_video}/shayari_002_thumb.png`
  },
  {
    id: 3,
    src: `${BASE_DIR_video}/shayari_003.mp4`,
    thumbnail: `${BASE_DIR_video}/shayari_003_thumb.png`
  },
  {
    id: 4,
    src: `${BASE_DIR_video}/shayari_004.mp4`,
    thumbnail: `${BASE_DIR_video}/shayari_004_thumb.png`
  },
  {
    id: 5,
    src: `${BASE_DIR_video}/shayari_005.mp4`,
    thumbnail: `${BASE_DIR_video}/shayari_005_thumb.png`
  }
];
