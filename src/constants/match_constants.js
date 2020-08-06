import * as action_constants from "./action_constants";
import * as popup_constants from "./popup_constants";
import * as radius_constants from "./radius_constants";

import * as config from "../config";

export const BASE_DIR_MATCH = `${config.BASE_DIR}/match`;

export const video_id = "hotstart";
export const video_url = `${BASE_DIR_MATCH}/highlights.mp4`;
export const bg_png = `${BASE_DIR_MATCH}/button_001.png`;

export const stat_png = `${BASE_DIR_MATCH}/button_002.png`;
export const analysis_png = `${BASE_DIR_MATCH}/button_003.png`;

export const replay_png = `${BASE_DIR_MATCH}/replay.png`;
export const url_thumbnail = null;
export const match_data = [
  {
    id: 1,
    start: 22.64,
    end: 35.62,
    source: `${BASE_DIR_MATCH}/wicket_aus_01.mp4`
  },
  {
    id: 2,
    start: 35.62,
    end: 40.58,
    source: `${BASE_DIR_MATCH}/six_aus_032.mp4`
  },
  {
    id: 3,
    start: 40.58,
    end: 62.17,
    source: `${BASE_DIR_MATCH}/wicket_aus_02.mp4`
  },
  {
    id: 4,
    start: 150.5,
    end: 169.5,
    source: `${BASE_DIR_MATCH}/wicket_aus_03.mp4`
  },
  {
    id: 5,
    start: 169.5,
    end: 187.37,
    source: `${BASE_DIR_MATCH}/wicket_aus_04.mp4`
  },
  {
    id: 6,
    start: 216.13,
    end: 230.09,
    source: `${BASE_DIR_MATCH}/wicket_aus_05.mp4`
  },
  {
    id: 7,
    start: 258.29,
    end: 300.4,
    source: `${BASE_DIR_MATCH}/wicket_aus_06.mp4`
  },
  {
    id: 8,
    start: 304.93,
    end: 309.99,
    source: `${BASE_DIR_MATCH}/six_aus_251.mp4`
  },
  {
    id: 9,
    start: 315.98,
    end: 338.03,
    source: `${BASE_DIR_MATCH}/wicket_aus_07.mp4`
  },
  {
    id: 10,
    start: 338.03,
    end: 349.57,
    source: `${BASE_DIR_MATCH}/wicket_aus_08.mp4`
  },
  {
    id: 11,
    start: 349.57,
    end: 359.58,
    source: `${BASE_DIR_MATCH}/wicket_aus_09.mp4`
  },
  {
    id: 12,
    start: 408.07,
    end: 416.23,
    source: `${BASE_DIR_MATCH}/six_india_025.mp4`
  },
  {
    id: 13,
    start: 416.23,
    end: 422.3,
    source: `${BASE_DIR_MATCH}/six_india_032.mp4`
  },
  {
    id: 14,
    start: 436.36,
    end: 470.45,
    source: `${BASE_DIR_MATCH}/wicket_india_01.mp4`
  },
  {
    id: 15,
    start: 484.46,
    end: 489.62,
    source: `${BASE_DIR_MATCH}/six_india_100.mp4`
  },
  {
    id: 16,
    start: 489.62,
    end: 494.43,
    source: `${BASE_DIR_MATCH}/fet_india_113.mp4`
  },
  {
    id: 17,
    start: 500.6,
    end: 506.06,
    source: `${BASE_DIR_MATCH}/six_india_129.mp4`
  },
  {
    id: 18,
    start: 506.06,
    end: 514.72,
    source: `${BASE_DIR_MATCH}/six_india_139.mp4`
  },
  {
    id: 19,
    start: 529.56,
    end: 535.09,
    source: `${BASE_DIR_MATCH}/six_india_163.mp4`
  },
  {
    id: 20,
    start: 558.22,
    end: 575.92,
    source: `${BASE_DIR_MATCH}/wicket_india_02.mp4`
  },
  {
    id: 21,
    start: 606.31,
    end: 611.02,
    source: `${BASE_DIR_MATCH}/six_india_258.mp4`
  },
  {
    id: 22,
    start: 620.57,
    end: 639.95,
    source: `${BASE_DIR_MATCH}/wicket_india_03.mp4`
  }
];

function modify_buttons_and_marks() {
  let overlay_buttons = [];

  match_data.map((item, index) => {
    const inButton = {
      id: `${item.id}_replay`,
      start: item.start,
      end: item.end,
      bbox: [0.7, 0.85, 0.07, 0.09],
      button: {
        id: `${item.id}_replay`,
        shape: null,
        action: action_constants.ACTION_POPUP,
        action_id: popup_constants.POPUP_VIDEO,
        data: { src: item.source, end: item.end },
        background: bg_png
      }
    };
    const statButton = {
      id: `${item.id}_start`,
      start: item.start,
      end: item.end,
      bbox: [0.6, 0.85, 0.07, 0.09],
      button: {
        id: `${item.id}_start`,
        shape: null,
        action: null,
        action_id: null,
        data: { src: item.source, end: item.end },
        background: stat_png
      }
    };
    const analysisButton = {
      id: `${item.id}_analysis`,
      start: item.start,
      end: item.end,
      bbox: [0.5, 0.85, 0.07, 0.09],
      button: {
        id: `${item.id}_analysis`,
        shape: null,
        action: null,
        action_id: null,
        data: { src: item.source, end: item.end },
        background: analysis_png
      }
    };
    overlay_buttons = [
      ...overlay_buttons,
      ...[inButton, statButton, analysisButton]
    ];
  });
  return overlay_buttons;
}

export const overlay_buttons = modify_buttons_and_marks();
export const marks = match_data.map(item => {
  return { value: item.start, end: item.end };
});
