const fs = require("fs");
const path = require("path");

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import * as config from "../src/config";
import { Helmet } from "react-helmet";

import App from "../src/App";

const app = express();
app.use(express.static("./build"));
app.get("/*", function(req, res) {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  // const indexFile = path.resolve("./build/index.html");
  // fs.readFile(indexFile, "utf8", (err, data) => {
  //   if (err) {
  //     console.error("Something went wrong:", err);
  //     return res.status(500).send("Oops, better luck next time!");
  //   }

  //   return res.send(
  //     data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
  //   );
  // });
  const helmet = Helmet.renderStatic();
  return res.send(formatHTML(app, helmet));
});

// Starting both http servers
const http = require("http");

const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});

// console.log(load_https, "--------");
if (config.load_https) {
  // Certificate & Starting both https servers
  const https = require("https");
  const privateKey = fs.readFileSync(
    "/etc/letsencrypt/live/keypoints.in/privkey.pem",
    "utf8"
  );
  const certificate = fs.readFileSync(
    "/etc/letsencrypt/live/keypoints.in/cert.pem",
    "utf8"
  );
  const ca = fs.readFileSync(
    "/etc/letsencrypt/live/keypoints.in/chain.pem",
    "utf8"
  );
  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };
  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(443, () => {
    console.log("HTTPS Server running on port 443");
  });
}

function formatHTML(appStr, helmet) {
  return `<!doctype html>
      <html lang="en" ${helmet.htmlAttributes.toString()}>
        <head>
          <base href="/" />
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="root">
            ${appStr}
          </div>
          <script src="./bundle.js"></script>
        </body>
      </html>`;
}
