import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_010`;

export const video_id = "song_010";
export const isSingleAudio = true;
export const audioFile = {
  hindi: `${BASE_DIR_video}/song_hindi.mp3`,
  marathi: `${BASE_DIR_video}/song_marathi.mp3`,
  telugu: `${BASE_DIR_video}/song_telugu.mp3`
};

export const title = {
  hindi: "गणपती की जय जय कर",
  marathi: "गणपती की जय जय कार",
  telugu: "గణపతి కి జయ్ జయ్ కర్"
};

export const playlist = [
  {
    id: 1,
    button_id: "song1_button",
    src: `${BASE_DIR_video}/song1/song1.m3u8`,
    thumbnail: `${BASE_DIR_video}/song1/song1_thumb.png`
  },
  {
    id: 2,
    button_id: "song2_button",
    src: `${BASE_DIR_video}/song2/song2.m3u8`,
    thumbnail: `${BASE_DIR_video}/song2/song2_thumb.png`
  },
  {
    id: 3,
    button_id: "song3_button",
    src: `${BASE_DIR_video}/song3/song3.m3u8`,
    thumbnail: `${BASE_DIR_video}/song3/song3_thumb.png`
  },
  {
    id: 4,
    button_id: "song4_button",
    src: `${BASE_DIR_video}/song4/song4.m3u8`,
    thumbnail: `${BASE_DIR_video}/song4/song4_thumb.png`
  }
];
