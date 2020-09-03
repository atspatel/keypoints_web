import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/content_0903_005`;

export const video_id = "content_0903_005";
export const isSingleAudio = false;
export const audioFile = { tamil: null };

export const title = {
  tamil: "உங்களுக்கு பிடித்த சோக ஸ்டேட்டஸை தேர்வுசெய்க"
};

export const playlist = [
  {
    id: 1,
    button_id: "video_001_button",
    src: `${BASE_DIR_video}/video_001/video_001.m3u8`,
    thumbnail: `${BASE_DIR_video}/video_001/video_001_thumb.png`
  },
  {
    id: 2,
    button_id: "video_002_button",
    src: `${BASE_DIR_video}/video_002/video_002.m3u8`,
    thumbnail: `${BASE_DIR_video}/video_002/video_002_thumb.png`
  },
  {
    id: 3,
    button_id: "video_003_button",
    src: `${BASE_DIR_video}/video_003/video_003.m3u8`,
    thumbnail: `${BASE_DIR_video}/video_003/video_003_thumb.png`
  },
  {
    id: 4,
    button_id: "video_004_button",
    src: `${BASE_DIR_video}/video_004/video_004.m3u8`,
    thumbnail: `${BASE_DIR_video}/video_004/video_004_thumb.png`
  }
];
