import * as config from "../../config";

export const BASE_DIR_sharechat = `${config.BASE_DIR}/sharechat_1`;
export const sharechat_logo = `${BASE_DIR_sharechat}/sharechat.png`;

export const mapping = config.sharechat_mapping;

export const languages = {
  hindi: { name: "Hindi", text: "हिंदी" },
  marathi: { name: "Marathi", text: "मराठी" },
  gujarati: { name: "Gujarati", text: "ગુજરાતી" },
  punjabi: { name: "Punjabi", text: "ਪੰਜਾਬੀ" },
  telugu: { name: "Telugu", text: "తెలుగు" },
  malayalam: { name: "Malayalam", text: "മലയാളം" },
  tamil: { name: "Tamil", text: "தமிழ்" },
  bengali: { name: "Bengali", text: "বাংলা" },
  odia: { name: "Odia", text: "ଓଡ଼ିଆ" },
  kannada: { name: "Kannada", text: "ಕನ್ನಡ" },
  assamese: { name: "Assamese", text: "অসমীয়া" },
  bhojpuri: { name: "Bhojpuri", text: "भोजपुरी" },
  haryanvi: { name: "Haryanvi", text: "हरयाणवी" },
  rajasthani: { name: "Rajasthani", text: "राजस्थानी" }
};

export const colors = ["#9661BA", "#40C9FF", "#FFA233", "#FF5A7E", "#FFD814"];
export const borderColor = "#494949";
