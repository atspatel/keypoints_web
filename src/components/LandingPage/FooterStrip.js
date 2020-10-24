import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import "../../css/app.css";

const facebook_url =
  "https://www.facebook.com/HighLitesVid/?view_public_for=115856289957824";
// const linkedin_url =
//   "https://www.linkedin.com/company/cratconnections/?viewAsMember=true";
const twitter_url = "https://twitter.com/High_Lites_Vid";
const instgram_url = "https://www.instagram.com/High_Lites_Vid/";
const youtube_url = "https://www.youtube.com/channel/UCR9LJm2FkZInMpkDHL0x6XA";

class FooterStrip extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "rgba(0,0,0, 0.1)"
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <IconButton href={facebook_url} target="_blank">
            <FacebookIcon
              style={{ width: 40, height: 40, margin: 5, color: "#3b5998 " }}
            />
          </IconButton>
          <IconButton href={twitter_url} target="_blank">
            <TwitterIcon
              style={{ width: 40, height: 40, margin: 5, color: "#00acee " }}
            />
          </IconButton>

          {/* <IconButton href={linkedin_url} target="_blank">
            <LinkedInIcon
              style={{ width: 40, height: 40, margin: 5, color: "#0e76a8 " }}
            />
          </IconButton> */}
          <IconButton href={instgram_url} target="_blank">
            <InstagramIcon
              style={{ width: 40, height: 40, margin: 5, color: "#dd2a7b " }}
            />
          </IconButton>
          <IconButton href={youtube_url} target="_blank">
            <YouTubeIcon
              style={{ width: 40, height: 40, margin: 5, color: "#FF0000 " }}
            />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default FooterStrip;
