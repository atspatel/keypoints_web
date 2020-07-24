import * as popup_constants from "./popup_constants";

export const ACTION_POPUP = "open_popup";
export const ACTION_URL = "open_url";
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
  [ACTION_POPUP]: (thisObj, button) => {
    thisObj.player.pause();
    thisObj.setState({
      showPopup: popup_constants.POPUP[button.action_id],
      popup_data: button.data,
      button_id: button.id,
      playing: false
    });
  },
  [ACTION_URL]: (thisObj, button) => {
    thisObj.player.pause();
    window.open(button.data, "_blank");
  },
  [ACTION_SEEK_TO]: (thisObj, button) => {
    playerSeekTo(thisObj, button.data, false);
  },
  [ACTION_SEEK_TO_PLAY]: (thisObj, button) => {
    playerSeekTo(thisObj, button.data, true);
  }
};
