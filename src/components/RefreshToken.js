import React, { Component } from "react";
import { get_session } from "../functions/token_function";
class RefreshToken extends Component {
  componentDidMount() {
    get_session(true);
    console.log(localStorage.session);
  }
  render() {
    return <div></div>;
  }
}

export default RefreshToken;
