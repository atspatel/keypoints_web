import axios from "axios";
import * as config from "../config";

// Example workout
// const workout = [
//   {
//     group: 1,
//     rep: 3,
//     activity: [
//       { id: "exc_001", time: 10 },
//       { id: "exc_002", time: 10 },
//       { id: "exc_003", time: 10 },
//       { id: "rest", time: 15 }
//     ]
//   }
// ];

export function format_seconds(s, isHour = false) {
  if (isHour) {
    return new Date(parseInt(s) * 1000).toISOString().substr(11, 8);
  } else {
    return new Date(parseInt(s) * 1000).toISOString().substr(14, 5);
  }
}

export async function get_exc_data() {
  const api_url = `${config.host}/excercise_ops/get_data/`;
  var output = null;

  await axios.get(api_url).then(response => {
    output = response.data;
  });
  return output;
}

export default async function create_playlist(workout) {
  const api_url = `${config.host}/excercise_ops/create_playlist/`;
  var output = null;

  const data = {
    workout: JSON.stringify(workout)
  };
  await axios.post(api_url, data).then(response => {
    output = response.data;
  });
  return output;
}
