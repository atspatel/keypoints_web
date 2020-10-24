import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ScrollAnimation from "react-animate-on-scroll";

import { TextField } from "@material-ui/core";
import * as constants from "../../constants/landing_page_constants";

import FooterStrip from "./FooterStrip";

import "../../css/app.css";

const { innerHeight } = window;

class Contact extends Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          padding: "100px 0px",
          width: "100%",
          minHeight: innerHeight - 50,
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <ScrollAnimation animateIn="fadeInUp">
            <p className="h2" style={{ maxWidth: 600, color: "white" }}>
              Schedule a product demo with one of our product consultants:
            </p>
          </ScrollAnimation>
          <div id="contact_form">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flex: 1,
                justifyContent: "center"
              }}
            >
              <div style={{ flex: 2, minWidth: 200, padding: "2px 10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  style={{ width: "100%", backgroundColor: "white" }}
                />
              </div>
              <div style={{ flex: 3, minWidth: 200, padding: "2px 10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  style={{ width: "100%", backgroundColor: "white" }}
                />
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 200, padding: "2px 10px" }}>
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                multiline
                rows={5}
                style={{ width: "100%", backgroundColor: "white" }}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#854EFF",
                width: "80%",
                borderRadius: 10,
                marginTop: 10
              }}
            >
              Submit
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 800,
              marginTop: 50
            }}
          >
            <ScrollAnimation animateIn="fadeInUp" offset={50}>
              <p
                style={{
                  color: "white",
                  flex: 1,
                  fontWeight: "bold",
                  minWidth: 200
                }}
              >
                info@cratconnections.com
              </p>
            </ScrollAnimation>
            <p style={{ color: "white", fontSize: 25 }}>|</p>
            <ScrollAnimation animateIn="fadeInUp" offset={50}>
              <p
                style={{
                  color: "white",
                  flex: 1,
                  fontWeight: "bold",
                  minWidth: 200
                }}
              >
                +91-8130187408
              </p>
            </ScrollAnimation>
          </div>
          <div
            style={{
              alignSelf: "flex-end",
              position: "absolute",
              bottom: 30,
              width: "100%",
              maxWidth: 600
            }}
          >
            <FooterStrip />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: -2
          }}
        >
          <img
            src={constants.contact_png}
            style={{ height: "100%", width: "100%", objectFit: "fill" }}
            alt=""
          />
        </div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(6, 21, 81, 0.8)",
            zIndex: -1
          }}
        />
      </div>
    );
  }
}

export default Contact;
