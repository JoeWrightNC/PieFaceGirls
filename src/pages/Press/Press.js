import React, { Component } from "react";
import {HomeNav} from "../../components/home"
import {Footer} from "../../components/sitewide"
import {PressHeader} from "../../components/press"
import {PressEntries} from "../../components/press"

export default class Press extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
        <PressHeader />
        <HomeNav />
        <PressEntries />
        <Footer />
      </div>
    );
  }
}
