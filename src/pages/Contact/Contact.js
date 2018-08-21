import React, { Component } from "react";
import {Nav} from "../../components/sitewide"
import {Footer} from "../../components/sitewide"
import {ContactSect} from "../../components/contact"

export default class Press extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
        <Nav />
        <ContactSect />
        <Footer />
      </div>
    );
  }
}
