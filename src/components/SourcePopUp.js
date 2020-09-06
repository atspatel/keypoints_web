import React, { Component } from "react";
import * as constants from "../constants/constants";
import "../css/app.css";

const openUrlInTab = url => {
  window.open(url, "_blank");
};

class SourceCard extends Component {
  render() {
    const { card_info } = this.props;
    return (
      <div
        style={{
          backgroundColor: "pink",
          borderRadius: 10,
          padding: 5,
          margin: 5,
          borderBottom: "1px solid black"
        }}
        onClick={e => openUrlInTab(card_info.url)}
      >
        <p style={{ margin: 0, padding: 0 }} className="text">
          {card_info.url}
        </p>
      </div>
    );
  }
}
class SourcePopUp extends Component {
  render() {
    const { data, closePopUp } = this.props;
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          padding: "5%",
          position: "absolute"
        }}
      >
        <div
          style={{
            height: "10%",
            width: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img
            src={constants.close_png}
            style={{ height: "100%", objectFit: "contain", flex: 1 }}
            onClick={() => closePopUp()}
          />
          <p
            style={{
              marginLeft: "5%",
              flex: 1,
              fontSize: 25,
              textAlign: "center",
              margin: 0,
              padding: 0
            }}
          >
            Sources
          </p>
          <div style={{ flex: 1 }}></div>
        </div>
        {data.map(item => {
          return <SourceCard key={item.id} card_info={item} />;
        })}
      </div>
    );
  }
}

export default SourcePopUp;
