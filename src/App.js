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
        <title>Keypoints</title>
        <meta property="og:url" content={constants.kp_url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <AppRoute />
    </div>
  );
}

export default App;
