import React, { Component } from "react";

import * as video_const from "../../constants/sharechat/video_007_const";
import ShareChatVideo from "./ShareChatVideo";

class ShareChatVideo007 extends Component {
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

export default ShareChatVideo007;
