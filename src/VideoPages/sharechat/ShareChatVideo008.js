import React, { Component } from "react";

import * as video_const from "../../constants/sharechat/video_008_const";
import ShareChatVideo from "./ShareChatVideo";

class ShareChatVideo008 extends Component {
  render() {
    return (
      <ShareChatVideo
        video_const={video_const}
        {...this.props}
        lang_f={"hindi"}
      />
    );
  }
}

export default ShareChatVideo008;
