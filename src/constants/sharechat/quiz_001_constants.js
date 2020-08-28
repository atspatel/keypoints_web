import * as sharechat_constants from "./sharechat_constants";

const BASE_DIR_video = `${sharechat_constants.BASE_DIR_sharechat}/quiz_001`;

export const video_id = "quiz_video_001";
export const isSingleAudio = false;
export const audioFile = null;

export const title = {
  hindi: "गणेश चतुर्थी क्विज़।"
};

export const intro = {
  id: "intro",
  type: "intro",
  src: `${BASE_DIR_video}/intro/intro.m3u8`,
  thumbnail: `${BASE_DIR_video}/intro/intro_thumb.png`
};

export const outro = {
  id: "outro",
  type: "outro",
  src: `${BASE_DIR_video}/question_000/question_000.m3u8`,
  thumbnail: `${BASE_DIR_video}/question_000/question_000_thumb.png`
};

export const questions = [
  {
    id: "1",
    button_id: "question_button_001",
    src: `${BASE_DIR_video}/question_001/question_001.m3u8`,
    type: "question",
    optionStartTime: 8,
    optionEndTime: 18,
    options: [
      { id: 1, bbox: [40, 0, 45, 45] },
      { id: 2, bbox: [40, 55, 45, 45] }
    ],
    answerId: 2,
    thumbnail: `${BASE_DIR_video}/question_001/question_001_thumb.png`
  },
  {
    id: "2",
    button_id: "question_button_002",
    src: `${BASE_DIR_video}/question_002/question_002.m3u8`,
    type: "question",
    optionStartTime: 8,
    optionEndTime: 18,
    options: [
      { id: 1, bbox: [40, 0, 45, 45] },
      { id: 2, bbox: [40, 55, 45, 45] }
    ],
    answerId: 1,
    thumbnail: `${BASE_DIR_video}/question_002/question_002_thumb.png`
  },
  {
    id: "3",
    button_id: "question_button_003",
    src: `${BASE_DIR_video}/question_003/question_003.m3u8`,
    type: "question",
    optionStartTime: 8,
    optionEndTime: 18,
    options: [
      { id: 1, bbox: [40, 0, 45, 45] },
      { id: 2, bbox: [40, 55, 45, 45] }
    ],
    answerId: 2,
    thumbnail: `${BASE_DIR_video}/question_003/question_003_thumb.png`
  },
  {
    id: "4",
    button_id: "question_button_004",
    src: `${BASE_DIR_video}/question_004/question_004.m3u8`,
    type: "question",
    optionStartTime: 8,
    optionEndTime: 18,
    options: [
      { id: 1, bbox: [40, 0, 45, 45] },
      { id: 2, bbox: [40, 55, 45, 45] }
    ],
    answerId: 1,
    thumbnail: `${BASE_DIR_video}/question_004/question_004_thumb.png`
  },
  {
    id: "5",
    button_id: "question_button_005",
    src: `${BASE_DIR_video}/question_005/question_005.m3u8`,
    type: "question",
    optionStartTime: 8,
    optionEndTime: 18,
    options: [
      { id: 1, bbox: [40, 0, 45, 45] },
      { id: 2, bbox: [40, 55, 45, 45] }
    ],
    answerId: 1,
    thumbnail: `${BASE_DIR_video}/question_005/question_005_thumb.png`
  }
  //   {
  //     id: "6",
  //     button_id: "question_button_006",
  //     src: `${BASE_DIR_video}/question_006/question_006.m3u8`,
  //     thumbnail: `${BASE_DIR_video}/question_006/question_006_thumb.png`
  //   },
  //   {
  //     id: "7",
  //     button_id: "question_button_007",
  //     src: `${BASE_DIR_video}/question_007/question_007.m3u8`,
  //     thumbnail: `${BASE_DIR_video}/question_007/question_007_thumb.png`
  //   },
  //   {
  //     id: "8",
  //     button_id: "question_button_008",
  //     src: `${BASE_DIR_video}/question_008/question_008.m3u8`,
  //     thumbnail: `${BASE_DIR_video}/question_008/question_008_thumb.png`
  //   }
];
