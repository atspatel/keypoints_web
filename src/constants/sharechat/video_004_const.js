import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_004`;

export const video_id = "live_aarti_video_004";
export const isSingleAudio = true;
export const audioFile = `${BASE_DIR_video}/celebration_aarti.mp3`;

export const title = {
  hindi: "गणपति के आने से मची है सब तरफ़ धूम।",
  marathi: "गणपतीच्या आगमनाने सर्वत्र वादळ निर्माण केले.",
  gujarati: "ગણપતિના આગમનથી ચારે બાજુ તોફાન છવાઈ ગયું."
};

export const playlist = [
  {
    id: 1,
    button_id: "ballaleshvar_button",
    src: `${BASE_DIR_video}/ballaleshvar/ballaleshvar.m3u8`,
    thumbnail: `${BASE_DIR_video}/ballaleshvar/ballaleshvar_thumb.png`
  },
  {
    id: 2,
    button_id: "udhyan_button",
    src: `${BASE_DIR_video}/udhyan/udhyan.m3u8`,
    thumbnail: `${BASE_DIR_video}/udhyan/udhyan_thumb.png`
  },
  {
    id: 3,
    button_id: "shiddhivinayak_button",
    src: `${BASE_DIR_video}/shiddhivinayak/shiddhivinayak.m3u8`,
    thumbnail: `${BASE_DIR_video}/shiddhivinayak/shiddhivinayak_thumb.png`
  },
  {
    id: 4,
    button_id: "khajrana_button",
    src: `${BASE_DIR_video}/khajrana/khajrana.m3u8`,
    thumbnail: `${BASE_DIR_video}/khajrana/khajrana_thumb.png`
  }
];
