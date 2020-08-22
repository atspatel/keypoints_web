import * as config from "../config";

const BASE_DIR_video = `${config.BASE_DIR}/dhoni_tribute_001`;

export const video_id = "dhoni_tribute_001";
export const isSingleAudio = false;
export const audioFile = null;

export const playlist = [
  {
    id: 1,
    button_id: "intro",
    src: `${BASE_DIR_video}/intro/intro.m3u8`,
    thumbnail: `${BASE_DIR_video}/intro/intro_thumb.png`
  },
  {
    id: 2,
    button_id: "bumrah",
    src: `${BASE_DIR_video}/bumrah/bumrah.m3u8`,
    thumbnail: `${BASE_DIR_video}/bumrah/bumrah_thumb.png`
  },
  {
    id: 3,
    button_id: "chahal",
    src: `${BASE_DIR_video}/chahal/chahal.m3u8`,
    thumbnail: `${BASE_DIR_video}/chahal/chahal_thumb.png`
  },
  {
    id: 4,
    button_id: "ishant_sharma",
    src: `${BASE_DIR_video}/ishant_sharma/ishant_sharma.m3u8`,
    thumbnail: `${BASE_DIR_video}/ishant_sharma/ishant_sharma_thumb.png`
  },
  {
    id: 5,
    button_id: "kl_rahul",
    src: `${BASE_DIR_video}/kl_rahul/kl_rahul.m3u8`,
    thumbnail: `${BASE_DIR_video}/kl_rahul/kl_rahul_thumb.png`
  },
  {
    id: 6,
    button_id: "kohli",
    src: `${BASE_DIR_video}/kohli/kohli.m3u8`,
    thumbnail: `${BASE_DIR_video}/kohli/kohli_thumb.png`
  },
  {
    id: 7,
    button_id: "ravi_shastri",
    src: `${BASE_DIR_video}/ravi_shastri/ravi_shastri.m3u8`,
    thumbnail: `${BASE_DIR_video}/ravi_shastri/ravi_shastri_thumb.png`
  },
  {
    id: 8,
    button_id: "rohit_sharma",
    src: `${BASE_DIR_video}/rohit_sharma/rohit_sharma.m3u8`,
    thumbnail: `${BASE_DIR_video}/rohit_sharma/rohit_sharma_thumb.png`
  }
];
