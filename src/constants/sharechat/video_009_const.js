import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_009`;

export const video_id = "actress_009";
export const isSingleAudio = true;
export const audioFile = `${BASE_DIR_video}/celebration_aarti.mp3`;

export const title = {
  hindi: "टीवी ऐक्ट्रेस ने कैसे मनायी गणेश चतुर्थी?",
  marathi: "टीव्ही अभिनेत्रीने गणेश चतुर्थी कशी साजरी केली?",
  gujarati: "ટીવી અભિનેત્રી ગણેશ ચતુર્થીની ઉજવણી કેવી રીતે કરે છે?",
  tamil: "டிவி நடிகை கணேஷ் சதுர்த்தியை எவ்வாறு கொண்டாடினார்?",
  telugu: "టీవీ నటి గణేష్ చతుర్థిని ఎలా జరుపుకుంది?",
  kannada: "ಟಿವಿ ನಟಿ ಗಣೇಶ ಚತುರ್ಥಿಯನ್ನು ಹೇಗೆ ಆಚರಿಸಿದರು?"
};

export const playlist = [
  {
    id: 1,
    button_id: "actress_1_button",
    src: `${BASE_DIR_video}/actress_1/actress_1_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/actress_1/actress_1_thumb.png`
  },
  {
    id: 2,
    button_id: "actress_2_button",
    src: `${BASE_DIR_video}/actress_2/actress_2_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/actress_2/actress_2_thumb.png`
  },
  {
    id: 3,
    button_id: "actress_3_button",
    src: `${BASE_DIR_video}/actress_3/actress_3_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/actress_3/actress_3_thumb.png`
  },
  {
    id: 4,
    button_id: "actress_4_button",
    src: `${BASE_DIR_video}/actress_4/actress_4_720p.m3u8`,
    thumbnail: `${BASE_DIR_video}/actress_4/actress_4_thumb.png`
  }
];
