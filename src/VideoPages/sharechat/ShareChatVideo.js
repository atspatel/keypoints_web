import React, { Component } from "react";
import ShareChatPlaylist from "../../components/ShareChatPlaylist";
import queryString from "query-string";

import * as sharechat_constants from "../../constants/sharechat/sharechat_constants";
import "../../css/app.css";

const { innerHeight, innerWidth } = window;
const languages = sharechat_constants.languages;

class ShareChatVideo extends Component {
  render() {
    const { video_const, location, lang_f } = this.props;
    let lang = lang_f;
    if (!lang && location && location.search) {
      const qParams = queryString.parse(location.search);
      lang = qParams.lang && languages[qParams.lang] ? qParams.lang : "hindi";
    }
    return (
      <div
        style={{
          height: 720,
          width: 500,
          maxHeight: innerHeight,
          maxWidth: innerWidth
        }}
        className="centerH"
      >
        <ShareChatPlaylist
          video_id={video_const.video_id}
          lang={lang}
          title={video_const.title}
          isSingleAudio={video_const.isSingleAudio}
          audioFile={
            video_const.audioFile[lang]
              ? video_const.audioFile[lang]
              : video_const.audioFile.hindi
          }
          playlist={video_const.playlist}
        />
      </div>
    );
  }
}

export default ShareChatVideo;
