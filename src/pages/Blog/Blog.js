import React, { Component } from "react";
import {Nav} from "../../components/sitewide"
import {Footer} from "../../components/sitewide"
import {BlogEntries} from "../../components/blog"

export default class Blog extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
         <Nav />
         <BlogEntries />
         <Footer />
      </div>
    );
  }
}
