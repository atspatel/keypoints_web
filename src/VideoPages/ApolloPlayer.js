import React, { Component } from "react";
import queryString from "query-string";
import Iframe from "react-iframe";
import { isIOS } from "react-device-detect";
import PlaylistPlayer from "../components/PlaylistPlayer";
import * as config from "../config";

const { innerHeight, innerWidth } = window;

const html_file = {
  hindi_button: "Hindi",
  english_button: "English",
  telugu_button: "Telugu",
  marathi_button: "Marathi"
};

const colors = [
  "#9f9c9d",
  "#2c2d30",
  "#e4b1a7",
  "#921925",
  "#f7da9b",
  "#0d362e"
];
class ApolloPlayer extends Component {
  state = {
    height: innerHeight,
    width: innerWidth,
    curLook: 'hindi_button'
  };

  onChangeLook = look => {
    this.setState({ curLook: look });
  };
  updateDimensions = () => {
    const { innerHeight, innerWidth } = window;
    this.setState({ height: innerHeight, width: innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillMount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const { height, width, curLook } = this.state;
    const { location } = this.props;

    let p_id = config.apollo_id;
    if (location && location.search) {
      const qParams = queryString.parse(location.search);
      p_id = qParams.p_id ? qParams.p_id : p_id;
    }
    return (
        <div
          style={{
            height: 720,
            width: 1280,
            maxHeight: height,
            maxWidth: width
          }}
          className="centerH"
        >
          <PlaylistPlayer
            playlist_id={p_id}
            hideInstruction={true}
            colors={colors}
            onChangeButton={this.onChangeLook}
          />
           <div 
            style={{
            position: 'absolute',
            top: 0,
            height: 40,
            width: 1280,
            maxHeight: height,
            maxWidth: width
            }}
            className="centerH">
                <p style={{color: "white", fontSize: 30}}>{html_file[curLook]}</p>
            </div>
        </div>
    );
  }
}

export default ApolloPlayer;
