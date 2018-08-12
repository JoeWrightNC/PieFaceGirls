import React, { Component } from "react";
import {Nav} from "../../components/sitewide"

export default class Home extends Component {
  state = {

  };

  render() {
    return (
      <body data-spy="scroll" data-target="#navbar-muziq" data-offset="80">

        <Nav />
      </body>
    );
  }
}
