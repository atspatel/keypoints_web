import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_008`;

export const video_id = "message_008";
export const isSingleAudio = true;
export const audioFile = { hindi: `${BASE_DIR_video}/message_audio.mp3` };

export const title = {
  hindi: "राजनेता और मशहूर हस्तियों का देश को संदेश।"
};

export const playlist = [
  {
    id: 1,
    button_id: "message_1_button",
    src: `${BASE_DIR_video}/message_1/message_1_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/message_1/message_1_thumb.png`
  },
  {
    id: 2,
    button_id: "message_2_button",
    src: `${BASE_DIR_video}/message_2/message_2_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/message_2/message_2_thumb.png`
  },
  {
    id: 3,
    button_id: "message_3_button",
    src: `${BASE_DIR_video}/message_3/message_3_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/message_3/message_3_thumb.png`
  },
  {
    id: 4,
    button_id: "message_4_button",
    src: `${BASE_DIR_video}/message_4/message_4_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/message_4/message_4_thumb.png`
  }
];
