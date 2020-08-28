import React, { Component } from "react";

import * as audio_constants from "../../constants/sharechat/audio_001_constants";
import ShareChatAudio from "./ShareChatAudio";

class ShareChatAudio001 extends Component {
  render() {
    return (
      <ShareChatAudio
        video_const={audio_constants}
        {...this.props}
        lang_f={"hindi"}
      />
    );
  }
}

export default ShareChatAudio001;
