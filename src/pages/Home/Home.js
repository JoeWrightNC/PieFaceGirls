import React, { Component } from "react";
import {HomeNav} from "../../components/home"
import {HomeVideo} from "../../components/home"

export default class Home extends Component {
  state = {

  };

  render() {
    return (
      <body data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
        <HomeVideo />
        <HomeNav />
      </body>
    );
  }
}
