import * as popup_constants from "./popup_constants";

import { downloadUrl } from "../functions/fileDownload";

export const ACTION_POPUP = "open_popup";
export const ACTION_OPENPOPUP = "openPopup";
export const ACTION_URL = "open_url";
export const ACTION_DOWNLOAD = "open_download";
export const ACTION_SEEK_TO = "seek_to";

export const playerSeekTo = (thisObj, duration, toPlay) => {
  if (thisObj.player) {
    thisObj.player.currentTime = duration;
    toPlay
      ? thisObj.player.play()
      : thisObj.setState({ isPaused: true }, () => thisObj.player.pause());
    setTimeout(() => thisObj.update_button_list(duration), 200);
  }
};

export const ACTION = {
  [ACTION_OPENPOPUP]: (thisObj, action_data) => {
    const currentPopup =
      popup_constants.POPUP[action_data.popup_info.popupType].popup_comp;
    action_data.popup_info.pauseVideo && thisObj.player.pause();
    thisObj.setState({
      currentPopup: currentPopup,
      popup_info: action_data.popup_info,
      popup_data: action_data.data,
      playing: action_data.popup_info.pauseVideo ? false : true
    });
  },
  [ACTION_POPUP]: (thisObj, action_data) => {
    const currentPopup =
      popup_constants.POPUP[action_data.popup_info.popupType];
    currentPopup.popup_info.pauseVideo && thisObj.player.pause();
    thisObj.setState({
      currentPopup: currentPopup.popup_comp,
      popup_info: currentPopup.popup_info,
      popup_data: action_data.data,
      playing: action_data.popup_info.pauseVideo ? false : true
    });
  },
  [ACTION_URL]: (thisObj, url) => {
    thisObj.player.pause();
    window.open(url, "_blank");
  },
  [ACTION_DOWNLOAD]: (thisObj, action_data) => {
    downloadUrl(action_data.url, action_data.filename);
  },
  [ACTION_SEEK_TO]: (thisObj, data) => {
    playerSeekTo(thisObj, data.duration, data.toPlay);
  }
};
