import React from "react";
import "./App.css";

import AppRoute from "./AppRoute";
import { Helmet } from "react-helmet";

import * as constants from "./constants/constants";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />

        <title>Keypoints</title>
        <meta name="description" content="Short Intrective Video Platform" />

        <meta property="og:url" content={constants.kp_url} />
        <meta property="og:site_name" content="KeyPoints" />
        <meta property="og:title" content="Keypoints" />
        <meta
          property="og:description"
          content="Short Intrective Video Platform"
        />

        <meta property="og:image" content={constants.kp_logo} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
      </Helmet>
      <AppRoute />
    </div>
  );
}

export default App;
