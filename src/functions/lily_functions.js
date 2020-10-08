import axios from "axios";
import * as config from "../config";

const quiz_time = {
  1: [
    { t: 584, name: "quiz_e01q01" },
    { t: 910, name: "quiz_e01q02" }
  ],
  2: [
    { t: 559, name: "quiz_e02q03" },
    { t: 741, name: "quiz_e02q04" }
  ],
  3: [
    { t: 523, name: "quiz_e03q05" },
    { t: 864, name: "quiz_e03q06" }
  ],
  4: [{ t: 732, name: "quiz_e04q07" }]
};

export async function get_quiz_data(session_id, episode, time) {
  let quiz_name = "";
  const ep_info = quiz_time[episode];
  ep_info.reverse().map(item => {
    if (item.t > time) {
      quiz_name = item.name;
    }
  });
  const api_url = `${config.host}/lily/quiz?quiz_id=${quiz_name}&session=${session_id}`;
  var output = null;
  await axios.get(api_url).then(response => {
    output = response.data;
  });
  return output;
}

export async function post_quiz_answer(session_id, quiz, answer) {
  const data = {
    session: session_id,
    quiz: quiz,
    answer: answer
  };
  const api_url = `${config.host}/lily/post_answer/`;
  var output = null;
  await axios.post(api_url, data).then(response => {
    output = response.data;
  });
  return output;
}