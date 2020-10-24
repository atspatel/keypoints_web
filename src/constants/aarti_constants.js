import * as config from "../config";

const BASE_DIR = config.BASE_DIR;
const BASE_DIR_aarti = `${BASE_DIR}/aarti`;

export const aarti_url = "http://keypoints.in/digital_aarti";
export const message = "दोस्त, आओ सच्ची श्रद्धा के साथ करे Digital आरती।";
export const hashtag = "digitalAarti";

export const aarti_png = `${BASE_DIR_aarti}/aarti.png`;
export const playlist = [
  {
    id: 0,
    name: "हनुमान जी",
    image: `${BASE_DIR_aarti}/lordHanumanji.jpg`,
    aarti: `${BASE_DIR_aarti}/lordHanumanjiAarti.mp3`
  },
  {
    id: 1,
    name: "भगवान राम",
    image: `${BASE_DIR_aarti}/lordRam.jpg`,
    aarti: `${BASE_DIR_aarti}/lordRamAarti.mp3`
  },
  {
    id: 2,
    name: "गणेश जी",
    image: `${BASE_DIR_aarti}/lordGanesha.jpg`,
    aarti: `${BASE_DIR_aarti}/lordGaneshaAarti.mp3`
  },
  {
    id: 3,
    name: "कृष्णा जी",
    image: `${BASE_DIR_aarti}/lordKrishna.jpg`,
    aarti: `${BASE_DIR_aarti}/lordKrishnaAarti.mp3`
  },
  {
    id: 4,
    name: "शिव जी",
    image: `${BASE_DIR_aarti}/lordShiva.jpg`,
    aarti: `${BASE_DIR_aarti}/lordShivaAarti.mp3`
  }
];
