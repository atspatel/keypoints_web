import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_003`;

export const video_id = "murti_making_video_003";
export const isSingleAudio = true;
export const audioFile = { hindi: `${BASE_DIR_video}/murti_making_audio.mp3` };

export const title = {
  hindi: "ऐसे बनाए जाते हैं प्यारे गणपति।",
  marathi: "अशाप्रकारे लाडक्या गणपती तयार केल्या जातात.",
  gujarati: "આ રીતે પ્રિય ગણપતિ બનાવવામાં આવે છે.",
  tamil: "அன்பான கணபதி இவ்வாறு தயாரிக்கப்படுகிறது.",
  telugu: ".మన బుజ్జి గణపతిని ఈ విధంగా తయారు చేస్తారు.",
  kannada: "ಪ್ರೀತಿಯ ಗಣಪತಿಯನ್ನು ಈ ರೀತಿ ಮಾಡಲಾಗುತ್ತದೆ."
};

export const playlist = [
  {
    id: 1,
    button_id: "murti_making_01_button",
    src: `${BASE_DIR_video}/murti_making_01/murti_making_01.m3u8`,
    thumbnail: `${BASE_DIR_video}/murti_making_01/murti_making_01_thumb.png`
  },
  {
    id: 2,
    button_id: "murti_making_02_button",
    src: `${BASE_DIR_video}/murti_making_02/murti_making_02.m3u8`,
    thumbnail: `${BASE_DIR_video}/murti_making_02/murti_making_02_thumb.png`
  },
  {
    id: 3,
    button_id: "murti_making_03_button",
    src: `${BASE_DIR_video}/murti_making_03/murti_making_03.m3u8`,
    thumbnail: `${BASE_DIR_video}/murti_making_03/murti_making_03_thumb.png`
  },
  {
    id: 4,
    button_id: "murti_making_04_button",
    src: `${BASE_DIR_video}/murti_making_04/murti_making_04.m3u8`,
    thumbnail: `${BASE_DIR_video}/murti_making_04/murti_making_04_thumb.png`
  }
];
