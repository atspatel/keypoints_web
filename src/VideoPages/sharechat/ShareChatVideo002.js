import React, { Component } from "react";

import * as video_const from "../../constants/sharechat/video_002_const";
import ShareChatVideo from "./ShareChatVideo";

class ShareChatVideo002 extends Component {
  render() {
    return <ShareChatVideo video_const={video_const} {...this.props} />;
  }
}

export default ShareChatVideo002;
