import * as config from "../config";

const BASE_DIR = config.BASE_DIR;
export const video_url = `${BASE_DIR}/landing_page/file.mp4`;
export const image_list = [
  { id: 1, source: `${BASE_DIR}/landing_page/image1.png` },
  { id: 2, source: `${BASE_DIR}/landing_page/image2.png` }
];

export const demos = [
  { id: 1, source: `/realme` },
  { id: 2, source: `/tv9bharat_002` },
  { id: 3, source: `/curefit` }
];

export const kp_logo =
  "https://keypoints-data.s3.ap-south-1.amazonaws.com/kp_logo.png";

export const speed_png = `${BASE_DIR}/landing_page/speed.png`;
export const integration_png = `${BASE_DIR}/landing_page/integration.png`;
export const how_it_helps_png = `${BASE_DIR}/landing_page/how_it_helps_bg.png`;
export const contact_png = `${BASE_DIR}/landing_page/contact_bg.png`;
export const campaign_png = `${BASE_DIR}/landing_page/campaign.png`;
export const buy_png = `${BASE_DIR}/landing_page/buy.png`;

export const cards = [
  {
    id: 1,
    text: "Interactive videos are watched 445 times longer than linear videos",
    title: "Popular"
  },
  {
    id: 2,
    text: "Track clicks and collect data through videos",
    title: "Trackable"
  },
  {
    id: 3,
    text:
      "Transform passive viewing into active viewing; exponential increase in user activity",
    title: "Higher engagement"
  },
  {
    id: 4,
    text:
      "Create multiple content pathways for users to choose a unique journey",
    title: "Gamification"
  },
  {
    id: 5,
    text:
      "Conversion rates up to 11%; surpassing all other video forms (Google display ads convert at <1%)",
    title: "Higher Conversions"
  },
  {
    id: 6,
    text: "Interactive Videos are 32% more memorable than linear videos",
    title: "Memorable"
  }
];
