import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_007`;

export const video_id = "text_hindi_007";
export const isSingleAudio = true;
export const audioFile = `${BASE_DIR_video}/text_audio.mp3`;

export const title = {
  hindi: "जानिए शुभ मुहूर्त, पूजा विधि और जरूरी पूजन सामग्री..."
};

export const playlist = [
  {
    id: 1,
    button_id: "text_1_button",
    src: `${BASE_DIR_video}/text_1/text_1_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/text_1/text_1_thumb.png`
  },
  {
    id: 2,
    button_id: "text_2_button",
    src: `${BASE_DIR_video}/text_2/text_2_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/text_2/text_2_thumb.png`
  },
  {
    id: 3,
    button_id: "text_3_button",
    src: `${BASE_DIR_video}/text_3/text_3_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/text_3/text_3_thumb.png`
  },
  {
    id: 4,
    button_id: "text_4_button",
    src: `${BASE_DIR_video}/text_4/text_4_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/text_4/text_4_thumb.png`
  }
];
