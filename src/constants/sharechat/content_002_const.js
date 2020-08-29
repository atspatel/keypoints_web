import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/content_0829_002`;

export const video_id = "content_0829_002";
export const isSingleAudio = false;
export const audioFile = { tamil: null };

export const title = {
  tamil: "உங்கள் பிடித்த ஸ்டேட்டஸ் வகையைத் தேர்வுசெய்க"
};

export const playlist = [
  {
    id: 1,
    button_id: "friendship_button",
    src: `${BASE_DIR_video}/friendship/friendship.m3u8`,
    thumbnail: `${BASE_DIR_video}/friendship/friendship_thumb.png`
  },
  {
    id: 2,
    button_id: "love_button",
    src: `${BASE_DIR_video}/love/love.m3u8`,
    thumbnail: `${BASE_DIR_video}/love/love_thumb.png`
  },
  {
    id: 3,
    button_id: "motivation_button",
    src: `${BASE_DIR_video}/motivation/motivation.m3u8`,
    thumbnail: `${BASE_DIR_video}/motivation/motivation_thumb.png`
  },
  {
    id: 4,
    button_id: "sad_button",
    src: `${BASE_DIR_video}/sad/sad.m3u8`,
    thumbnail: `${BASE_DIR_video}/sad/sad_thumb.png`
  }
];
