import axios from "axios";
import * as config from "../config";

export async function post_activity(activity, video_id, button_id, session_id) {
  const api_url = `${config.host}/activity_ops/post_activity/`;
  var output = null;

  const data = {
    activity: activity,
    video_id: video_id,
    button_id: button_id,
    session_id: session_id
  };
  await axios.post(api_url, data).then(response => {
    output = response.data;
  });
  return output;
}
