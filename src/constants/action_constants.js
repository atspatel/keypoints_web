import * as popup_constants from "./popup_constants";

import { downloadUrl } from "../functions/fileDownload";

export const ACTION_POPUP = "openPopup";
export const ACTION_URL = "open_url";
export const ACTION_DOWNLOAD = "open_download";
export const ACTION_SEEK_TO = "seek_to";
export const ACTION_SEEK_TO_PLAY = "seek_to_play";

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
  [ACTION_POPUP]: (thisObj, action_data) => {
    const currentPopup =
      popup_constants.POPUP[action_data.popup_info.popupType];
    action_data.popup_info.pauseVideo && thisObj.player.pause();
    thisObj.setState({
      currentPopup: currentPopup,
      popup_info: action_data.popup_info,
      popup_data: action_data.data,
      playing: action_data.popup_info.pauseVideo ? false : true
    });
  },
  [ACTION_URL]: (thisObj, button) => {
    thisObj.player.pause();
    window.open(button.data, "_blank");
  },
  [ACTION_DOWNLOAD]: (thisObj, button) => {
    downloadUrl(button.data.url, button.data.filename);
  },
  [ACTION_SEEK_TO]: (thisObj, button) => {
    playerSeekTo(thisObj, button.data, false);
  },
  [ACTION_SEEK_TO_PLAY]: (thisObj, button) => {
    playerSeekTo(thisObj, button.data, true);
  }
};
