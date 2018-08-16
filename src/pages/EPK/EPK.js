import React, { Component } from "react";
import {Nav} from "../../components/sitewide"
import {Footer} from "../../components/sitewide"
import {EPKHeader} from "../../components/epk"
import {EPKDoc} from "../../components/epk"

export default class EPK extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
        <Nav/>
        <EPKHeader />
        <EPKDoc />
        <Footer />
      </div>
    );
  }
}
