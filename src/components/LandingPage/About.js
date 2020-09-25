import React, { Component } from "react";
import "../../css/app.css";
import DonutLargeTwoToneIcon from "@material-ui/icons/DonutLargeTwoTone";
import VideogameAssetTwoToneIcon from "@material-ui/icons/VideogameAssetTwoTone";
import WidgetsTwoToneIcon from "@material-ui/icons/WidgetsTwoTone";

import ScrollAnimation from "react-animate-on-scroll";

const about = [
  {
    id: 1,
    icon: (
      <DonutLargeTwoToneIcon
        style={{ color: "#854DFF", height: 60, width: 60 }}
      />
    ),
    title: "What we do?",
    description:
      "KeyPoints allows easy and effective integration of interactive videos into your content strategy"
  },
  {
    id: 2,
    icon: (
      <WidgetsTwoToneIcon style={{ color: "#854DFF", height: 60, width: 60 }} />
    ),
    title: "Our Vision",
    description:
      "KeyPoints aims to democratise interactive video form of content, the next HOT thing for marketers around the world"
  },
  {
    id: 3,
    icon: (
      <VideogameAssetTwoToneIcon
        style={{ color: "#854DFF", height: 60, width: 60 }}
      />
    ),
    title: "Technology",
    description:
      "KeyPoints is a pioneer in interactive videos that work everywhere. It helps you in building a new and unique user/customer experience"
  }
];
class Card extends Component {
  render() {
    const { item } = this.props;
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          margin: "60px 50px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ScrollAnimation animateIn="fadeInUp">
          <div style={{ minWidth: 200 }}>
            {item.icon}
            <p style={{ color: "#854DFF", fontSize: "2em" }}>{item.title}</p>
            <p>{item.description}</p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div
        style={{
          padding: "80px 0px",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
          // backgroundColor: "rgba(173, 167, 184, 1)"
        }}
      >
        {about.map(item => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default About;
