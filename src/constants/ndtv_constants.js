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
  "https://www.thehindu.com/news/national/shah-contradicts-himself-on-delhi-riots/article31052878.ece";
const src_003 =
  "https://indianexpress.com/article/cities/delhi/umar-khalid-quizzed-again-he-writes-to-police-chief-6580830/";
const src_004 =
  "https://thewire.in/communalism/delhi-riots-identities-deceased-confirmed";
const src_005 = "https://twitter.com/_YogendraYadav/status/1256163893405048832";

export const overlay_buttons = [
  {
    id: 0,
    start: 20,
    end: 35,
    bbox: [0.1, 0.0, 0.4, 0.7],
    button: {
      id: "src_000",
      action: action_constants.ACTION_URL,
      action_id: src_000,
      data: src_000,
      background: `${BASE_DIR_ndtv}/image_000.png`
    }
  },

  {
    id: 1,
    start: 60,
    end: 75,
    bbox: [0.1, 0.0, 0.4, 0.7],
    button: {
      id: "src_001",
      action: action_constants.ACTION_URL,
      action_id: src_001,
      data: src_001,
      background: `${BASE_DIR_ndtv}/image_001.png`
    }
  },
  {
    id: 2,
    start: 90,
    end: 105,
    bbox: [0.1, 0.0, 0.4, 0.7],
    button: {
      id: "src_002",
      action: action_constants.ACTION_URL,
      action_id: src_002,
      data: src_002,
      background: `${BASE_DIR_ndtv}/image_002.png`
    }
  },
  {
    id: 3,
    start: 170,
    end: 185,
    bbox: [0.1, 0.0, 0.4, 0.7],
    button: {
      id: "src_003",
      action: action_constants.ACTION_URL,
      action_id: src_003,
      data: src_003,
      background: `${BASE_DIR_ndtv}/image_003.png`
    }
  },
  {
    id: 4,
    start: 215,
    end: 230,
    bbox: [0.1, 0.0, 0.4, 0.7],
    button: {
      id: "src_004",
      action: action_constants.ACTION_URL,
      action_id: src_004,
      data: src_004,
      background: `${BASE_DIR_ndtv}/image_004.png`
    }
  },
  {
    id: 5,
    start: 260,
    end: 275,
    bbox: [0.1, 0.0, 0.4, 0.7],
    button: {
      id: "src_005",
      action: action_constants.ACTION_URL,
      action_id: src_005,
      data: src_005,
      background: `${BASE_DIR_ndtv}/image_005.png`
    }
  },
  {
    id: "share_000",
    start: 20,
    end: 35,
    bbox: [0.8, 0.3, 0.1, 0.1],
    button: {
      id: "share_000",
      action: action_constants.ACTION_URL,
      action_id: "",
      data: `https://api.whatsapp.com/send?text=${src_000}&source=&data=&app_absent=`,
      background: `${BASE_DIR_ndtv}/share.png`
    }
  },
  {
    id: "share_001",
    start: 60,
    end: 75,
    bbox: [0.8, 0.3, 0.1, 0.1],
    button: {
      id: "share_001",
      action: action_constants.ACTION_URL,
      action_id: "",
      data: `https://api.whatsapp.com/send?text=${src_001}&source=&data=&app_absent=`,
      background: `${BASE_DIR_ndtv}/share.png`
    }
  },
  {
    id: "share_002",
    start: 90,
    end: 105,
    bbox: [0.8, 0.3, 0.1, 0.1],
    button: {
      id: "share_002",
      action: action_constants.ACTION_URL,
      action_id: "",
      data: `https://api.whatsapp.com/send?text=${src_002}&source=&data=&app_absent=`,
      background: `${BASE_DIR_ndtv}/share.png`
    }
  },
  {
    id: "share_003",
    start: 170,
    end: 185,
    bbox: [0.8, 0.3, 0.1, 0.1],
    button: {
      id: "share_003",
      action: action_constants.ACTION_URL,
      action_id: "",
      data: `https://api.whatsapp.com/send?text=${src_003}&source=&data=&app_absent=`,
      background: `${BASE_DIR_ndtv}/share.png`
    }
  },
  {
    id: "share_004",
    start: 215,
    end: 230,
    bbox: [0.8, 0.3, 0.1, 0.1],
    button: {
      id: "share_004",
      action: action_constants.ACTION_URL,
      action_id: "",
      data: `https://api.whatsapp.com/send?text=${src_004}&source=&data=&app_absent=`,
      background: `${BASE_DIR_ndtv}/share.png`
    }
  },
  {
    id: "share_005",
    start: 260,
    end: 275,
    bbox: [0.8, 0.3, 0.1, 0.1],
    button: {
      id: "share_005",
      action: action_constants.ACTION_URL,
      action_id: "",
      data: `https://api.whatsapp.com/send?text=${src_005}&source=&data=&app_absent=`,
      background: `${BASE_DIR_ndtv}/share.png`
    }
  },
  {
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
  }
];
