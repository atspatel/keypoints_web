const express = require("express");
const path = require("path");
var fs = require("fs");
var https = require("https");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
https
  .createServer(
    {
      key: fs.readFileSync("/home/atish/server.key"),
      cert: fs.readFileSync("/home/atish/server.cert")
    },
    app
  )
  .listen(80);
