import React, { Component } from "react";
import {Nav} from "../../components/sitewide"
import {Footer} from "../../components/sitewide"

export default class Bio extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
         <Nav />
         <Footer />
      </div>
    );
  }
}
