import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_002`;

export const video_id = "celebs_video_002";
export const isSingleAudio = true;
export const audioFile = `${BASE_DIR_video}/celebs_audio.mp3`;

export const title = {
  hindi: "गणपति के आने से सब जगह मस्ती का माहौल।",
  marathi: "गणपतीच्या आगमनाने सर्वत्र गमतीचे वातावरण.",
  gujarati: "ગણપતિના આગમનથી બધે આનંદનું વાતાવરણ."
};

export const playlist = [
  {
    id: 1,
    button_id: "shilpa_button",
    src: `${BASE_DIR_video}/shilpa/shilpa.m3u8`,
    thumbnail: `${BASE_DIR_video}/shilpa/shilpa_thumb.png`
  },
  {
    id: 2,
    button_id: "sonakshi_button",
    src: `${BASE_DIR_video}/sonakshi/sonakshi.m3u8`,
    thumbnail: `${BASE_DIR_video}/sonakshi/sonakshi_thumb.png`
  },
  {
    id: 3,
    button_id: "bhai_button",
    src: `${BASE_DIR_video}/bhai/bhai.m3u8`,
    thumbnail: `${BASE_DIR_video}/bhai/bhai_thumb.png`
  },
  {
    id: 4,
    button_id: "nawaz_button",
    src: `${BASE_DIR_video}/nawaz/nawaz.m3u8`,
    thumbnail: `${BASE_DIR_video}/nawaz/nawaz_thumb.png`
  }
];
