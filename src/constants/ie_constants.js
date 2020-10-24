import * as config from "../config";
export const BASE_DIR_ie = `${config.BASE_DIR}/ie`;
export const video_info = {
  video01_node00: {
    section: "Intro",
    src: `${BASE_DIR_ie}/sikhs_in_afghanistan/frag_sikhs_in_afghanistan_00.mp4`
  },
  video01_node01: {
    section: "When did Sikhism and Hinduism reach Afghanistan?",
    src: `${BASE_DIR_ie}/sikhs_in_afghanistan/frag_sikhs_in_afghanistan_01.mp4`
  },
  video01_node02: {
    section: "When did their exodus from the country start?",
    src: `${BASE_DIR_ie}/sikhs_in_afghanistan/frag_sikhs_in_afghanistan_02.mp4`
  },
  video01_node03: {
    section: "Where did they settle?",
    src: `${BASE_DIR_ie}/sikhs_in_afghanistan/frag_sikhs_in_afghanistan_03.mp4`
  },
  video01_node04: {
    section: "Will the CAA help them?",
    src: `${BASE_DIR_ie}/sikhs_in_afghanistan/frag_sikhs_in_afghanistan_04.mp4`
  },
  video01_node05: {
    section: "Gurdwaras and Temples in Afghanistan",
    src: `${BASE_DIR_ie}/sikhs_in_afghanistan/frag_sikhs_in_afghanistan_05.mp4`
  },
  video02_node00: {
    section: "Intro",
    src: `${BASE_DIR_ie}/smallpox/frag_smallpox_00.mp4`
  },
  video02_node01: {
    section: "What does the new study say?",
    src: `${BASE_DIR_ie}/smallpox/frag_smallpox_01.mp4`
  },
  video02_node02: {
    section: "What are the implications of the new research?",
    src: `${BASE_DIR_ie}/smallpox/frag_smallpox_02.mp4`
  }
};

export const video_preload = {
  video01_node00: { default: "video02_node00", p: "video01_node01" },
  video01_node01: { default: "video02_node00", p: "video01_node02" },
  video01_node02: { default: "video02_node00", p: "video01_node03" },
  video01_node03: { default: "video02_node00", p: "video01_node04" },
  video01_node04: { default: "video02_node00", p: "video01_node05" },
  video01_node05: { default: "video02_node00" },
  video02_node00: { p: "video02_node01" },
  video02_node01: { p: "video02_node02" },
  video02_node02: {}
};

export const start = "video01_node00";
