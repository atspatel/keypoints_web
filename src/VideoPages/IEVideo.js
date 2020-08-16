import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "../css/app.css";
import * as ie_constants from "../constants/ie_constants";

const video_info = ie_constants.video_info;
const video_preload = ie_constants.video_preload;

var timestampOffset = 0;
var mimeCodec = 'video/mp4; codecs="mp4a.40.5,avc1.42000d"';

var queue = [ie_constants.start];
function fetchArrayBuffer(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = function() {
    callback(xhr.response);
  };
  xhr.send();
}

class IEVideo extends Component {
  state = {
    mediaSource: null,
    sourceBuffer: null,

    playedSeconds: 0,
    preloaded_buf: {},

    pushed: false,
    source_info: [],

    current_node: {},
    current_index: 0,
    isTimer: false,
    buttonObj: {}
  };

  endMediaSource = () => {
    const { mediaSource } = this.state;
    mediaSource.readyState === "open" && mediaSource.endOfStream();
  };

  addBuffertoSource = (buf, sourceBuffer, callback) => {
    sourceBuffer.addEventListener("updateend", function() {
      callback();
    });
    sourceBuffer.addEventListener("error", function(ev) {
      callback(ev);
    });
    sourceBuffer.timestampOffset = timestampOffset;
    sourceBuffer.appendBuffer(buf);
  };
  fetchSegmentAndAppend = (v_node, sourceBuffer, callback) => {
    const { preloaded_buf } = this.state;
    if (preloaded_buf[v_node]) {
      const buf = preloaded_buf[v_node];
      this.addBuffertoSource(buf, sourceBuffer, callback);
    } else {
      const segmentUrl = video_info[v_node].src;
      fetchArrayBuffer(segmentUrl, buf => {
        this.addBuffertoSource(buf, sourceBuffer, callback);
      });
    }
  };

  preload_buffer = v_node_list => {
    const { preloaded_buf } = this.state;
    v_node_list.map(item => {
      if (preloaded_buf[item]) {
        return;
      } else if (video_info[item]) {
        const url = video_info[item].src;
        if (url) {
          fetchArrayBuffer(url, buf => {
            this.setState({
              preloaded_buf: {
                ...this.state.preloaded_buf,
                ...{ [item]: buf }
              }
            });
          });
        }
      }
    });
  };

  updateBuffer = () => {
    const {
      mediaSource,
      sourceBuffer,
      source_info
      //   current_index
    } = this.state;
    var v_node = queue.shift();
    if (v_node && video_info[v_node]) {
      let start = timestampOffset;
      this.fetchSegmentAndAppend(v_node, sourceBuffer, () => {
        if (mediaSource.duration) {
          timestampOffset = mediaSource.duration - 1;
        }
        this.setState({
          source_info: [
            ...source_info,
            {
              id: uuidv4(),
              v_node: v_node,
              start: start,
              end: timestampOffset
            }
          ]
        });
        if (Object.values(video_preload[v_node]).length > 0) {
          this.preload_buffer(Object.values(video_preload[v_node]));
        } else {
          this.endMediaSource();
        }
      });
    }
  };

  updateCurrentNode = s => {
    const { source_info, current_node } = this.state;
    source_info.map((item, index) => {
      if (
        s >= item.start &&
        s <= item.end &&
        current_node.v_node != item.v_node
      ) {
        this.setState({ current_node: item });
      }
    });
  };

  updateButtonObj = s => {
    const { current_node, buttonObj, isTimer, isPushed } = this.state;
    if (
      current_node &&
      s >= current_node.end - 15 &&
      s <= current_node.end - 5
    ) {
      if (!isTimer) {
        this.setState({
          isTimer: true,
          isPushed: false,
          buttonObj: video_preload[current_node.v_node]
        });
      }
    } else {
      if (s > current_node.end - 5 && !isPushed) {
        if (buttonObj.default) {
          this.setState({ isPushed: true }, () => {
            queue.push(buttonObj.default);
          });
        } else {
          this.endMediaSource();
        }
      }
      this.setState({ isTimer: false });
    }
  };

  setProgress = () => {
    if (this.player) {
      const playedSeconds = this.player.currentTime;
      this.updateCurrentNode(playedSeconds);
      this.updateButtonObj(playedSeconds);
      this.setState({ playedSeconds: playedSeconds }, () =>
        this.updateBuffer()
      );
    }
  };
  onOpenSource = () => {
    const { mediaSource } = this.state;
    var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
    mediaSource.duration = 1;
    this.setState({ sourceBuffer: sourceBuffer }, () => {
      var intervalId = setInterval(this.setProgress, 500);
      this.setState({ intervalId: intervalId });
    });
  };

  _handleKeyDown = e => {
    if (e.key === "p") {
      const { isTimer, isPushed, buttonObj } = this.state;
      if (isTimer && !isPushed) {
        this.setState({ isPushed: true }, () => {
          queue.push(buttonObj.p);
        });
      }
    }
  };

  onClickButton = () => {
    const { isTimer, isPushed, buttonObj } = this.state;
    if (isTimer && !isPushed) {
      this.setState({ isPushed: true }, () => {
        queue.push(buttonObj.p);
      });
    }
  };

  togglePlay = () => {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  };

  componentDidMount() {
    var mediaSource = new MediaSource();
    this.player.src = URL.createObjectURL(mediaSource);
    this.setState({ mediaSource: mediaSource }, () =>
      mediaSource.addEventListener("sourceopen", this.onOpenSource)
    );
    document.addEventListener("keydown", this._handleKeyDown);

    this.player.play();
  }

  componentWillUnmount() {
    const { mediaSource } = this.state;
    mediaSource.readyState === "open" && mediaSource.endOfStream();
    clearInterval(this.state.intervalId);
    document.removeEventListener("keydown", this._handleKeyDown);
  }
  render() {
    const { isTimer, buttonObj, isPushed } = this.state;
    return (
      <div
        style={{
          width: 800,
          height: 450,
          border: "1px solid black",
          position: "relative"
        }}
        className="centerH"
      >
        <div
          style={{ width: "100%", height: "100%", position: "absolute" }}
          //   onClick={this.togglePlay}
        >
          <video
            ref={c => (this.player = c)}
            style={{ width: "100%", height: "100%" }}
            controls
          ></video>
        </div>
        {isTimer && buttonObj.p && (
          <div
            style={{
              width: "100%",
              //   height: "10%",
              position: "absolute",
              bottom: "10%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                borderRadius: 20,
                // margin: "20px 20px",
                padding: "20px 20px",
                backgroundColor: isPushed ? "#DDA6A6" : "#DD0604"
              }}
              className="centerH"
              onClick={this.onClickButton}
            >
              {video_info[buttonObj.p].section}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default IEVideo;
