import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_006`;

export const video_id = "text_marathi_006";
export const isSingleAudio = true;
export const audioFile = { marathi: `${BASE_DIR_video}/text_audio.mp3` };

export const title = {
  marathi:
    "शुभ वेळ, पूजा करण्याची पद्धत आणि महत्वाची उपासना सामग्री जाणून घ्या ..."
};

export const playlist = [
  {
    id: 1,
    button_id: "text_1_marathi_button",
    src: `${BASE_DIR_video}/text_1_marathi/text_1_marathi_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/text_1_marathi/text_1_marathi_thumb.png`
  },
  {
    id: 2,
    button_id: "text_2_marathi_button",
    src: `${BASE_DIR_video}/text_2_marathi/text_2_marathi_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/text_2_marathi/text_2_marathi_thumb.png`
  },
  {
    id: 3,
    button_id: "text_3_marathi_button",
    src: `${BASE_DIR_video}/text_3_marathi/text_3_marathi_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/text_3_marathi/text_3_marathi_thumb.png`
  },
  {
    id: 4,
    button_id: "text_4_marathi_button",
    src: `${BASE_DIR_video}/text_4_marathi/text_4_marathi_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/text_4_marathi/text_4_marathi_thumb.png`
  }
];
