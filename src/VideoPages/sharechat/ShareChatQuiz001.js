import React, { Component } from "react";

import * as video_const from "../../constants/sharechat/quiz_001_constants";
import ShareChatQuiz from "./ShareChatQuiz";

class ShareChatQuiz001 extends Component {
  render() {
    return <ShareChatQuiz video_const={video_const} {...this.props} />;
  }
}

export default ShareChatQuiz001;
