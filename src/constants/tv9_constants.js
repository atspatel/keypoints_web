import * as config from "../config";

export const video_id = "tv9_demo";
export const BASE_DIR_tv9 = `${config.BASE_DIR}/tv9`;
export const video_url = `${BASE_DIR_tv9}/tv9_video.mp4`;

export const arrow_png = `${BASE_DIR_tv9}/backArrow.png`;
export const subscribe_png = `${BASE_DIR_tv9}/subscribe.png`;
export const win_png = `${BASE_DIR_tv9}/win.png`;
export const title_png = `${BASE_DIR_tv9}/title.png`;

export const channel_list = [
  {
    id: 1,
    name: "Hindi",
    media_info: {
      media: {
        thumbnail:
          "https://yt3.ggpht.com/a/AATXAJxEBa-Kew5nP3EziOh5TSPFKHwr-dd76EUSeOgdRA=s288-c-k-c0xffffffff-no-rj-mo"
      }
    },
    url:
      "https://www.youtube.com/channel/UCOutOIcn_oho8pyVN3Ng-Pg?sub_confirmation=1"
  },
  {
    id: 2,
    name: "Telugu",
    media_info: {
      media: {
        thumbnail:
          "https://yt3.ggpht.com/a/AATXAJzEPADa47VeuQK8uowDqS6mWa4nfdJjQyCw0Kkd5g=s288-c-k-c0xffffffff-no-rj-mo"
      }
    },
    url: "https://www.youtube.com/user/tv9telugulive?sub_confirmation=1"
  },
  {
    id: 3,
    name: "Gujarati",
    media_info: {
      media: {
        thumbnail:
          "https://yt3.ggpht.com/a/AATXAJxNz0QjQu5dVvRJNbpHipsG5eZ2rldV0oU8Fr-olQ=s288-c-k-c0xffffffff-no-rj-mo"
      }
    },
    url:
      "https://www.youtube.com/channel/UCeJWZgSMlzqYEDytDnvzHnw?sub_confirmation=1"
  }
];

export const sm_list = [
  {
    id: "Facebook",
    name: "Facebook",
    media_info: {
      media: {
        thumbnail: `${BASE_DIR_tv9}/facebook.png`
      }
    },
    url: "https://www.facebook.com/TV9Bharatvarsh/"
  },
  {
    id: "Instagram",
    name: "Instagram",
    media_info: {
      media: {
        thumbnail: `${BASE_DIR_tv9}/instagram.png`
      }
    },
    url: "https://www.instagram.com/tv9bharatvarsh/?hl=en"
  },
  {
    id: "Twitter",
    name: "Twitter",
    media_info: {
      media: {
        thumbnail: `${BASE_DIR_tv9}/twitter.png`
      }
    },
    url: "https://twitter.com/TV9Bharatvarsh"
  },
  {
    id: "Sharechat",
    name: "Sharechat",
    media_info: {
      media: {
        thumbnail: `${BASE_DIR_tv9}/sharechat.png`
      }
    },
    url: "https://sharechat.com/profile/tv9bharatvarsh"
  }
];
