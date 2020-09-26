import * as action_constants from "./action_constants";
import * as popup_constants from "./popup_constants";
import * as radius_constants from "./radius_constants";

import * as config from "../config";
import * as constants from "./constants";

export const contact = "8953457318";

export const realmeX = "realmeX";
export const realmeX2 = "realmeX2";
export const realmeX2Pro = "realmeX2Pro";
export const realmeXT = "realmeXT";
export const realmeX50Pro = "realmeX50Pro";

export const video_id = "realme_demo";
export const BASE_DIR_realme = `${config.BASE_DIR}/realme_demo`;
export const video_url = `${BASE_DIR_realme}/realme_demo_1_compressed.mp4`;

export const url_thumbnail = `${BASE_DIR_realme}/realme_thumbnail.png`;

export const phone_info = {
  realmeX: {
    price: "20,999",
    specification: `${BASE_DIR_realme}/${realmeX}/specification.png`,
    processor: `${BASE_DIR_realme}/${realmeX}/processor.png`,
    color: [
      { id: 1, name: "Polar White" },
      { id: 2, name: "Space Blue" }
    ],
    model: [
      { id: 1, name: "4GB/128GB" },
      { id: 2, name: "8GB/128GB" }
    ],
    review: {
      Design: 9,
      Display: 8,
      Software: 9,
      Performance: 9,
      Battery_Life: 9,
      Camera: 8,
      Value_for_Money: 9
    },
    phone_images: {
      1: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX}/polarwhite/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX}/polarwhite/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX}/polarwhite/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX}/polarwhite/back.jpg`
        }
      ],
      2: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX}/spaceblue/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX}/spaceblue/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX}/spaceblue/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX}/spaceblue/back.jpg`
        }
      ]
    },
    camera_images: [
      {
        id: 1,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image1.jpg`,
        legend: null
      },
      {
        id: 2,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image2.jpg`,
        legend: "Chorma Boost Bringes Colors to Life"
      },
      {
        id: 3,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image3.jpg`,
        legend: "Chorma Boost Bringes Colors to Life"
      },
      {
        id: 4,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image4.jpg`,
        legend: "Chorma Boost Bringes Colors to Life"
      },
      {
        id: 5,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image5.jpg`,
        legend: "The Next-gen Super Nightscape"
      },
      {
        id: 6,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image6.jpg`,
        legend: "The Next-gen Super Nightscape"
      },
      {
        id: 7,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image7.jpg`,
        legend:
          "AI enabled Sony's 16MP camera sensor. 0.74s to pop up for over 200,000 times"
      },
      {
        id: 8,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image8.jpg`,
        legend: "Studio-style shots with all new five portrait modes"
      },
      {
        id: 9,
        source: `${BASE_DIR_realme}/${realmeX}/camera/image9.jpg`,
        legend: "Studio-style shots with all new five portrait modes"
      }
    ],
    buyOptions: [
      {
        id: 1,
        name: "Realme",
        url: "https://buy.realme.com/in/goods/116"
      },
      {
        id: 2,
        name: "Whatsapp",
        url: `https://api.whatsapp.com/send?phone=91${contact}&text=RealmeX&source=&data=&app_absent=`
      },
      {
        id: 3,
        name: "Call",
        url: `tel: +91${contact}`
      }
    ]
  },
  realmeX2: {
    price: "17,999",
    specification: `${BASE_DIR_realme}/${realmeX2}/specification.png`,
    processor: `${BASE_DIR_realme}/${realmeX2}/processor.png`,
    color: [
      { id: 1, name: "Pearl Blue" },
      { id: 2, name: "Pearl Green" },
      { id: 3, name: "Pearl White" }
    ],
    model: [
      { id: 1, name: "4GB/64GB" },
      { id: 2, name: "6GB/128GB" },
      { id: 3, name: "8GB/128GB" }
    ],
    review: {
      Design: 8,
      Display: 8,
      Software: 9,
      Performance: 9,
      Battery_Life: 8,
      Camera: 8,
      Value_for_Money: 9
    },
    phone_images: {
      1: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlblue/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlblue/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlblue/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlblue/back.jpg`
        }
      ],
      2: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlgreen/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlgreen/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlgreen/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlgreen/back.jpg`
        }
      ],
      3: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlwhite/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlwhite/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlwhite/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX2}/pearlwhite/back.jpg`
        }
      ]
    },
    camera_images: [
      {
        id: 1,
        source: `${BASE_DIR_realme}/${realmeX2}/camera/image1.jpg`,
        legend: "Flagship-level Photography"
      },
      {
        id: 2,
        source: `${BASE_DIR_realme}/${realmeX2}/camera/image2.jpg`,
        legend: "4cm Macro Lens"
      },
      {
        id: 3,
        source: `${BASE_DIR_realme}/${realmeX2}/camera/image3.jpg`,
        legend: "4cm Macro Lens"
      },
      {
        id: 4,
        source: `${BASE_DIR_realme}/${realmeX2}/camera/image4.jpg`,
        legend: "119˚ Ultra Wide-Angle Lens | 4x as Wide as Normal"
      },
      {
        id: 5,
        source: `${BASE_DIR_realme}/${realmeX2}/camera/image5.jpg`,
        legend: "Enhanced Portrait Mode"
      },
      {
        id: 6,
        source: `${BASE_DIR_realme}/${realmeX2}/camera/image6.jpg`,
        legend: "32MP AI Front Camera"
      },
      {
        id: 7,
        source: `${BASE_DIR_realme}/${realmeX2}/camera/image7.jpg`,
        legend: "Super Nightscape 2.0 Clear Low-light Photos"
      },
      {
        id: 8,
        source: `${BASE_DIR_realme}/${realmeX2}/camera/image8.jpg`,
        legend: null
      }
    ],
    buyOptions: [
      {
        id: 1,
        name: "Realme",
        url: "https://buy.realme.com/in/goods/143"
      },
      {
        id: 2,
        name: "Whatsapp",
        url: `https://api.whatsapp.com/send?phone=91${contact}&text=RealmeX2&source=&data=&app_absent=`
      },
      {
        id: 3,
        name: "Call",
        url: `tel: +91${contact}`
      }
    ]
  },
  realmeX2Pro: {
    price: "29,999",
    specification: `${BASE_DIR_realme}/${realmeX2Pro}/specification.png`,
    processor: `${BASE_DIR_realme}/${realmeX2Pro}/processor.png`,
    color: [
      { id: 1, name: "Lunar White" },
      { id: 2, name: "Neptune Blue" }
    ],
    model: [
      { id: 1, name: "6GB/64GB" },
      { id: 2, name: "8GB/128GB" },
      { id: 3, name: "12GB/256GB" }
    ],
    review: {
      Design: 8,
      Display: 9,
      Software: 9,
      Performance: 10,
      Battery_Life: 9,
      Camera: 8,
      Value_for_Money: 9
    },
    phone_images: {
      1: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX2Pro}/lunarwhite/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX2Pro}/lunarwhite/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX2Pro}/lunarwhite/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX2Pro}/lunarwhite/back.jpg`
        }
      ],
      2: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX2Pro}/neptuneblue/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX2Pro}/neptuneblue/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX2Pro}/neptuneblue/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX2Pro}/neptuneblue/back.jpg`
        }
      ]
    },
    camera_images: [
      {
        id: 1,
        source: `${BASE_DIR_realme}/${realmeX2Pro}/camera/image1.jpg`,
        legend: null
      },
      {
        id: 2,
        source: `${BASE_DIR_realme}/${realmeX2Pro}/camera/image2.jpg`,
        legend:
          "64MP Sensor Stunningly Sharp Resolution Ultra-detailed Pictures"
      },
      {
        id: 3,
        source: `${BASE_DIR_realme}/${realmeX2Pro}/camera/image3.jpg`,
        legend: "Up to 20x Hybrid Zoom:: 1x Zoom"
      },
      {
        id: 4,
        source: `${BASE_DIR_realme}/${realmeX2Pro}/camera/image4.jpg`,
        legend: "Up to 20x Hybrid Zoom:: 20x Zoom"
      },
      {
        id: 5,
        source: `${BASE_DIR_realme}/${realmeX2Pro}/camera/image5.jpg`,
        legend: null
      },
      {
        id: 6,
        source: `${BASE_DIR_realme}/${realmeX2Pro}/camera/image6.jpg`,
        legend: "Super Nightscape 2.0"
      },
      {
        id: 7,
        source: `${BASE_DIR_realme}/${realmeX2Pro}/camera/image7.jpg`,
        legend: "Introducing Selfie Nightscapes"
      }
    ],
    buyOptions: [
      {
        id: 1,
        name: "Realme",
        url: "https://buy.realme.com/in/goods/159"
      },
      {
        id: 2,
        name: "Whatsapp",
        url: `https://api.whatsapp.com/send?phone=91${contact}&text=RealmeX2Pro&source=&data=&app_absent=`
      },
      {
        id: 3,
        name: "Call",
        url: `tel: +91${contact}`
      }
    ]
  },
  realmeXT: {
    price: "16,999",
    specification: `${BASE_DIR_realme}/${realmeXT}/specification.png`,
    processor: `${BASE_DIR_realme}/${realmeXT}/processor.png`,
    color: [
      { id: 1, name: "Pearl White" },
      { id: 2, name: "Pearl Blue" }
    ],
    model: [
      { id: 1, name: "4GB/64GB" },
      { id: 2, name: "6GB/64GB" },
      { id: 3, name: "8GB/128GB" }
    ],
    review: {
      Design: 8,
      Display: 8,
      Software: 9,
      Performance: 8,
      Battery_Life: 9,
      Camera: 8,
      Value_for_Money: 9
    },
    phone_images: {
      1: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeXT}/pearlwhite/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeXT}/pearlwhite/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeXT}/pearlwhite/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeXT}/pearlwhite/back.jpg`
        }
      ],
      2: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeXT}/pearlblue/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeXT}/pearlblue/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeXT}/pearlblue/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeXT}/pearlblue/back.jpg`
        }
      ]
    },
    camera_images: [
      {
        id: 1,
        source: `${BASE_DIR_realme}/${realmeXT}/camera/image1.jpg`,
        legend: null
      },
      {
        id: 2,
        source: `${BASE_DIR_realme}/${realmeXT}/camera/image2.jpg`,
        legend: null
      },
      {
        id: 3,
        source: `${BASE_DIR_realme}/${realmeXT}/camera/image3.jpg`,
        legend: null
      },
      {
        id: 4,
        source: `${BASE_DIR_realme}/${realmeXT}/camera/image4.jpg`,
        legend: null
      },
      {
        id: 5,
        source: `${BASE_DIR_realme}/${realmeXT}/camera/image5.jpg`,
        legend: null
      },
      {
        id: 6,
        source: `${BASE_DIR_realme}/${realmeXT}/camera/image6.jpg`,
        legend: null
      }
    ],
    buyOptions: [
      {
        id: 1,
        name: "Realme",
        url: "https://buy.realme.com/in/goods/143"
      },
      {
        id: 2,
        name: "Whatsapp",
        url: `https://api.whatsapp.com/send?phone=91${contact}&text=RealmeXT&source=&data=&app_absent=`
      },
      {
        id: 3,
        name: "Call",
        url: `tel: +91${contact}`
      }
    ]
  },
  realmeX50Pro: {
    price: "47,999",
    specification: `${BASE_DIR_realme}/${realmeX50Pro}/specification.png`,
    processor: `${BASE_DIR_realme}/${realmeX50Pro}/processor.png`,
    color: [
      { id: 1, name: "Moss Green" },
      { id: 2, name: "Rust Red" }
    ],
    model: [
      { id: 1, name: "6GB/128GB" },
      { id: 2, name: "8GB/128GB" },
      { id: 3, name: "12GB/256GB" }
    ],
    review: {
      Design: 8,
      Display: 9,
      Software: 9,
      Performance: 10,
      Battery_Life: 9,
      Camera: 8,
      Value_for_Money: 10
    },
    phone_images: {
      1: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX50Pro}/mossgreen/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX50Pro}/mossgreen/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX50Pro}/mossgreen/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX50Pro}/mossgreen/back.jpg`
        }
      ],
      2: [
        {
          id: 1,
          view: "main",
          source: `${BASE_DIR_realme}/${realmeX50Pro}/rustred/main.jpg`
        },
        {
          id: 2,
          view: "front_right",
          source: `${BASE_DIR_realme}/${realmeX50Pro}/rustred/front_right.jpg`
        },
        {
          id: 3,
          view: "side",
          source: `${BASE_DIR_realme}/${realmeX50Pro}/rustred/side.jpg`
        },
        {
          id: 4,
          view: "back",
          source: `${BASE_DIR_realme}/${realmeX50Pro}/rustred/back.jpg`
        }
      ]
    },
    camera_images: [
      {
        id: 1,
        source: `${BASE_DIR_realme}/${realmeX50Pro}/camera/image1.jpg`,
        legend: null
      },
      {
        id: 2,
        source: `${BASE_DIR_realme}/${realmeX50Pro}/camera/image2.jpg`,
        legend: "64MP Quad Camera | 20x Hybrid Zoom"
      },
      {
        id: 3,
        source: `${BASE_DIR_realme}/${realmeX50Pro}/camera/image3.jpg`,
        legend: "Normal Mode"
      },
      {
        id: 4,
        source: `${BASE_DIR_realme}/${realmeX50Pro}/camera/image4.jpg`,
        legend: "Ultra 64MP Mode"
      },
      {
        id: 5,
        source: `${BASE_DIR_realme}/${realmeX50Pro}/camera/image5.jpg`,
        legend: "Ultra-wide Mode"
      },
      {
        id: 6,
        source: `${BASE_DIR_realme}/${realmeX50Pro}/camera/image6.jpg`,
        legend: "Super Nightscape 3.0"
      },
      {
        id: 7,
        source: `${BASE_DIR_realme}/${realmeX50Pro}/camera/image7.jpg`,
        legend: "Super Nightscape 3.0"
      },
      {
        id: 8,
        source: `${BASE_DIR_realme}/${realmeX50Pro}/camera/image8.jpg`,
        legend: "Ultra NightScape"
      }
    ],
    buyOptions: [
      {
        id: 1,
        name: "Realme",
        url: "https://buy.realme.com/in/goods/186"
      },
      {
        id: 2,
        name: "Whatsapp",
        url: `https://api.whatsapp.com/send?phone=91${contact}&text=RealmeX50Pro&source=&data=&app_absent=`
      },
      {
        id: 3,
        name: "Call",
        url: `tel: +91${contact}`
      }
    ]
  }
};

export const overlay_buttons = [
  {
    start: 9,
    end: 18,
    id: realmeX,
    url: null,
    bbox: [0.15, 0.04, 0.16, 0.65],
    button: {
      id: `${realmeX}_shop1`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeX]
    }
  },
  {
    start: 10,
    end: 18,
    id: realmeXT,
    url: null,
    bbox: [0.15, 0.23, 0.16, 0.65],
    button: {
      id: `${realmeXT}_shop1`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeXT]
    }
  },
  {
    start: 11,
    end: 18,
    id: realmeX2,
    url: null,
    bbox: [0.15, 0.42, 0.16, 0.65],
    button: {
      id: `${realmeX2}_shop1`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeX2]
    }
  },
  {
    start: 12,
    end: 18,
    id: realmeX2Pro,
    url: null,
    bbox: [0.15, 0.61, 0.16, 0.65],
    button: {
      id: `${realmeX2Pro}_shop1`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeX2Pro]
    }
  },
  {
    start: 13,
    end: 18,
    id: realmeX50Pro,
    url: null,
    bbox: [0.15, 0.8, 0.16, 0.65],
    button: {
      id: `${realmeX50Pro}_shop1`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeX50Pro]
    }
  },

  {
    start: 21,
    end: 29,
    id: realmeX,
    url: null,
    bbox: [0.05, 0.39, 0.22, 0.25],
    button: {
      id: `${realmeX}_camera`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_CAMERA,
      data: phone_info[realmeX]
    }
  },
  {
    start: 22,
    end: 29,
    id: realmeXT,
    url: null,
    bbox: [0.28, 0.08, 0.22, 0.25],
    button: {
      id: `${realmeXT}_camera`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_CAMERA,
      data: phone_info[realmeXT]
    }
  },
  {
    start: 23,
    end: 29,
    id: realmeX2,
    url: null,
    bbox: [0.6, 0.08, 0.22, 0.25],
    button: {
      id: `${realmeX2}_camera`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_CAMERA,
      data: phone_info[realmeX2]
    }
  },
  {
    start: 24,
    end: 29,
    id: realmeX2Pro,
    url: null,
    bbox: [0.6, 0.72, 0.22, 0.25],
    button: {
      id: `${realmeX2Pro}_camera`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_CAMERA,
      data: phone_info[realmeX2Pro]
    }
  },
  {
    start: 25,
    end: 29,
    id: realmeX50Pro,
    url: null,
    bbox: [0.28, 0.72, 0.22, 0.25],
    button: {
      id: `${realmeX50Pro}_camera`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_CAMERA,
      data: phone_info[realmeX50Pro]
    }
  },

  {
    start: 33,
    end: 41,
    id: realmeX,
    url: null,
    bbox: [0.05, 0.38, 0.22, 0.18],
    button: {
      id: `${realmeX}_processor`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_PROCESSOR,
      data: phone_info[realmeX].processor
    }
  },
  {
    start: 34,
    end: 41,
    id: realmeXT,
    url: null,
    bbox: [0.28, 0.08, 0.22, 0.18],
    button: {
      id: `${realmeXT}_processor`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_PROCESSOR,
      data: phone_info[realmeXT].processor
    }
  },
  {
    start: 35,
    end: 41,
    id: realmeX2,
    url: null,
    bbox: [0.6, 0.08, 0.22, 0.18],
    button: {
      id: `${realmeX2}_processor`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_PROCESSOR,
      data: phone_info[realmeX2].processor
    }
  },
  {
    start: 36,
    end: 41,
    id: realmeX2Pro,
    url: null,
    bbox: [0.6, 0.71, 0.22, 0.18],
    button: {
      id: `${realmeX2Pro}_processor`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_PROCESSOR,
      data: phone_info[realmeX2Pro].processor
    }
  },
  {
    start: 37,
    end: 41,
    id: realmeX50Pro,
    url: null,
    bbox: [0.28, 0.71, 0.22, 0.18],
    button: {
      id: `${realmeX50Pro}_processor`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_PROCESSOR,
      data: phone_info[realmeX50Pro].processor
    }
  },
  {
    start: 64,
    end: 74,
    id: "KeyPoints",
    url: constants.kp_url,
    bbox: [0, 0.905, 0.07, 0.125],
    button: {
      id: "KeyPoints",
      shape: "circle",
      action: action_constants.ACTION_URL,
      action_id: constants.kp_url,
      data: constants.kp_url
    }
  },
  {
    start: 65,
    end: 74,
    id: realmeX,
    url: null,
    bbox: [0.15, 0.04, 0.16, 0.65],
    button: {
      id: `${realmeX}_shop2`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeX]
    }
  },
  {
    start: 66,
    end: 74,
    id: realmeXT,
    url: null,
    bbox: [0.15, 0.23, 0.16, 0.65],
    button: {
      id: `${realmeXT}_shop2`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeXT]
    }
  },
  {
    start: 67,
    end: 74,
    id: realmeX2,
    url: null,
    bbox: [0.15, 0.42, 0.16, 0.65],
    button: {
      id: `${realmeX2}_shop2`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeX2]
    }
  },
  {
    start: 68,
    end: 74,
    id: realmeX2Pro,
    url: null,
    bbox: [0.15, 0.61, 0.16, 0.65],
    button: {
      id: `${realmeX2Pro}_shop2`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeX2Pro]
    }
  },
  {
    start: 69,
    end: 74,
    id: realmeX50Pro,
    url: null,
    bbox: [0.15, 0.8, 0.16, 0.65],
    button: {
      id: `${realmeX50Pro}_shop2`,
      shape: radius_constants.RECT,
      action: action_constants.ACTION_POPUP,
      action_id: popup_constants.POPUP_SPECIFICATION,
      data: phone_info[realmeX50Pro]
    }
  }
];
