import React, { Component } from "react";
import {Nav} from "../../components/sitewide"
import {Footer} from "../../components/sitewide"
import {NoMatch} from "../../components/noMatch"

export default class Press extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
        <Nav />
        <NoMatch />
        <Footer />
      </div>
    );
  }
}
