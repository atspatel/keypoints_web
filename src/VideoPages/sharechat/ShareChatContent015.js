import React, { Component } from "react";

import * as video_const from "../../constants/sharechat/content_015_const";
import ShareChatVideo from "./ShareChatVideo";

class ShareChatContent015 extends Component {
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

export default ShareChatContent015;
