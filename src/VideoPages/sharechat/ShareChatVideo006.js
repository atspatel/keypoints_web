import React, { Component } from "react";

import * as video_const from "../../constants/sharechat/video_006_const";
import ShareChatVideo from "./ShareChatVideo";

class ShareChatVideo006 extends Component {
  render() {
    return (
      <ShareChatVideo
        video_const={video_const}
        {...this.props}
        lang_f={"marathi"}
      />
    );
  }
}

export default ShareChatVideo006;
