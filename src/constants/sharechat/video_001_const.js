import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_001`;

export const video_id = "shayari_video_001";
export const isSingleAudio = true;
export const audioFile = { hindi: `${BASE_DIR_video}/poetry_bg.mp3` };

export const title = {
  hindi: "गणेश चतुर्थी पर शायरी।",
  marathi: "गणेश चतुर्थीवर शायरी.",
  gujarati: "ગણેશ ચતુર્થી પર શાયરી."
};

export const playlist = [
  {
    id: 1,
    button_id: "shayari_button_001",
    src: `${BASE_DIR_video}/shayari_001/shayari_001.m3u8`,
    thumbnail: `${BASE_DIR_video}/shayari_001/shayari_001_thumb.png`
  },
  {
    id: 2,
    button_id: "shayari_button_002",
    src: `${BASE_DIR_video}/shayari_002/shayari_002.m3u8`,
    thumbnail: `${BASE_DIR_video}/shayari_002/shayari_002_thumb.png`
  },
  {
    id: 3,
    button_id: "shayari_button_003",
    src: `${BASE_DIR_video}/shayari_003/shayari_003.m3u8`,
    thumbnail: `${BASE_DIR_video}/shayari_003/shayari_003_thumb.png`
  },
  {
    id: 4,
    button_id: "shayari_button_004",
    src: `${BASE_DIR_video}/shayari_004/shayari_004.m3u8`,
    thumbnail: `${BASE_DIR_video}/shayari_004/shayari_004_thumb.png`
  },
  {
    id: 5,
    button_id: "shayari_button_005",
    src: `${BASE_DIR_video}/shayari_005/shayari_005.m3u8`,
    thumbnail: `${BASE_DIR_video}/shayari_005/shayari_005_thumb.png`
  }
];
