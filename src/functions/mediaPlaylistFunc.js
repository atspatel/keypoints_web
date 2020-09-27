import axios from "axios";
import * as config from "../config";

export async function get_playlist_data(playlist_id) {
  const api_url = `${config.host}/playlist_ops/playlist?p_id=${playlist_id}`;
  var output = null;
  await axios.get(api_url).then(response => {
    output = response.data;
  });
  return output;
}

export async function get_video_data(video_id) {
  const api_url = `${config.host}/popup_ops/media?m_id=${video_id}`;
  var output = null;
  await axios.get(api_url).then(response => {
    output = response.data;
  });
  return output;
}
