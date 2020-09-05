import React, { Component } from "react";

import * as video_const from "../../constants/sharechat/content_020_const";
import ShareChatVideo from "./ShareChatVideo";

class ShareChatContent020 extends Component {
  render() {
    return (
      <ShareChatVideo
        video_const={video_const}
        {...this.props}
        lang_f={"tamil"}
      />
    );
  }
}

export default ShareChatContent020;
