import React, { Component } from "react";
import {Nav} from "../../components/sitewide"
import {Footer} from "../../components/sitewide"
import {Videos} from "../../components/videos"


export default class VideosPg extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
        <Nav />
        <Videos />
        <Footer />
      </div>
    );
  }
}
