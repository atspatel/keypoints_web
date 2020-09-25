import * as action_constants from "./action_constants";
import * as popup_constants from "./popup_constants";
import * as radius_constants from "./radius_constants";

import * as config from "../config";

export const video_id = "ravish_kumar";
export const BASE_DIR_ndtv = `${config.BASE_DIR}/ndtv`;
export const video_url = `${BASE_DIR_ndtv}/video_c.mp4`;
// export const url_thumbnail = `${BASE_DIR_ndtv}/thumbnail.png`;

const src_000 =
  "https://thewire.in/communalism/delhi-police-riots-investigation-false-charges-uapa-conspiracy";
const src_001 =
  "https://scroll.in/latest/972241/delhi-violence-stop-coercing-false-confessions-to-manufacture-evidence-1000-citizens-tell-police";
const src_002 =
  "https://indianexpress.com/article/cities/delhi/umar-khalid-quizzed-again-he-writes-to-police-chief-6580830/";
const src_003 =
  "https://www.thehindu.com/news/national/shah-contradicts-himself-on-delhi-riots/article31052878.ece";
const src_004 =
  "https://thewire.in/communalism/delhi-riots-identities-deceased-confirmed";
const src_005 = "https://twitter.com/_YogendraYadav/status/1256163893405048832";

export const source_data = [
  {
    id: "000",
    image: `${BASE_DIR_ndtv}/image_000.png`,
    url: src_000,
    start: 20,
    end: 35
  },
  {
    id: "001",
    image: `${BASE_DIR_ndtv}/image_001.png`,
    url: src_001,
    start: 60,
    end: 75
  },
  {
    id: "002",
    image: `${BASE_DIR_ndtv}/image_002.png`,
    url: src_002,
    start: 90,
    end: 105
  },
  {
    id: "003",
    image: `${BASE_DIR_ndtv}/image_003.png`,
    url: src_003,
    start: 170,
    end: 185
  },
  {
    id: "004",
    image: `${BASE_DIR_ndtv}/image_004.png`,
    url: src_004,
    start: 215,
    end: 230
  },
  {
    id: "005",
    image: `${BASE_DIR_ndtv}/image_005.png`,
    url: src_005,
    start: 260,
    end: 275
  }
];

const menu_button = {
  id: "menu",
  start: 0,
  end: -1,
  bbox: [0.0, 0.0, 0.1, 0.1],
  button: {
    id: "menu",
    action: action_constants.ACTION_POPUP,
    action_id: popup_constants.POPUP_SOURCES,
    data: [
      { id: 0, url: src_000 },
      { id: 1, url: src_001 },
      { id: 2, url: src_002 },
      { id: 3, url: src_003 },
      { id: 4, url: src_004 },
      { id: 5, url: src_005 }
    ],
    background: `${BASE_DIR_ndtv}/menu.png`
  }
};

function create_overlay_buttons() {
  let overlay_buttons = [];
  source_data.map(item => {
    const card_button = {
      id: `card_${item.id}`,
      start: item.start,
      end: item.end,
      bbox: [0.1, 0.0, 0.4, 0.7],
      button: {
        id: `src_${item.id}`,
        action: action_constants.ACTION_URL,
        action_id: item.url,
        data: item.url,
        background: item.image
      }
    };
    const share_button = {
      id: `share_${item.id}`,
      start: item.start,
      end: item.end,
      bbox: [0.6, 0.4, 0.1, 0.1],
      button: {
        id: `share_${item.id}`,
        action: action_constants.ACTION_URL,
        action_id: "",
        data: `https://api.whatsapp.com/send?text=${item.url}&source=&data=&app_absent=`,
        background: `${BASE_DIR_ndtv}/share.png`
      }
    };
    const download_button = {
      id: `download_${item.id}`,
      start: item.start,
      end: item.end,
      bbox: [0.7, 0.4, 0.1, 0.1],
      button: {
        id: `download_${item.id}`,
        action: action_constants.ACTION_DOWNLOAD,
        action_id: "",
        data: {
          url: item.image,
          filename: `source_${item.id}.png`
        },
        background: `${BASE_DIR_ndtv}/download.png`
      }
    };
    overlay_buttons = [
      ...overlay_buttons,
      ...[card_button, share_button, download_button]
    ];
  });
  overlay_buttons = [...overlay_buttons, menu_button];
  return overlay_buttons;
}

export const overlay_buttons = create_overlay_buttons();
export const marks = source_data.map(item => {
  return { value: item.start, end: item.end };
});
