import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/video_005`;

export const video_id = "celebs_video_005";
export const isSingleAudio = true;
export const audioFile = {
  hindi: `${BASE_DIR_video}/ganpati_ki_jay_jay_kr.mp3`
};

export const title = {
  hindi: "इस तरह लिया सबने गणपति का आशीर्वाद।",
  marathi: "अशा प्रकारे सर्वांनी गणपतीचा आशीर्वाद घेतला.",
  gujarati: "આ રીતે સૌએ ગણપતિના આશીર્વાદ લીધા.",
  tamil: "எல்லாரும் விநாயகரின் ஆசியை இவ்வாறே பெறுவோம்",
  telugu: "అందరూ గణపతి ఆశీర్వాదాలను ఇలా తీసుకున్నారు",
  kannada: "ಎಲ್ಲರೂ ಗಣಪತಿಯ ಆಶೀರ್ವಾದವನ್ನು ಈ ರೀತಿ ಪಡೆದುಕೊಂಡರು."
};

export const playlist = [
  {
    id: 1,
    button_id: "celebs_of_bollywood_1_button",
    src: `${BASE_DIR_video}/celebs_of_bollywood_1/celebs_of_bollywood_1.m3u8`,
    thumbnail: `${BASE_DIR_video}/celebs_of_bollywood_1/celebs_of_bollywood_1_thumb.png`
  },
  {
    id: 2,
    button_id: "celebs_of_bollywood_2_button",
    src: `${BASE_DIR_video}/celebs_of_bollywood_2/celebs_of_bollywood_2.m3u8`,
    thumbnail: `${BASE_DIR_video}/celebs_of_bollywood_2/celebs_of_bollywood_2_thumb.png`
  },
  {
    id: 3,
    button_id: "celebs_of_bollywood_3_button",
    src: `${BASE_DIR_video}/celebs_of_bollywood_3/celebs_of_bollywood_3.m3u8`,
    thumbnail: `${BASE_DIR_video}/celebs_of_bollywood_3/celebs_of_bollywood_3_thumb.png`
  },
  {
    id: 4,
    button_id: "celebs_of_bollywood_4_button",
    src: `${BASE_DIR_video}/celebs_of_bollywood_4/celebs_of_bollywood_4.m3u8`,
    thumbnail: `${BASE_DIR_video}/celebs_of_bollywood_4/celebs_of_bollywood_4_thumb.png`
  }
];
