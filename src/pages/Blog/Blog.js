import React, { Component } from "react";
import {HomeNav} from "../../components/home"
import {Footer} from "../../components/sitewide"
import {BlogHeader} from "../../components/blog"
import {BlogEntries} from "../../components/blog"

export default class Blog extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
         <BlogHeader />
         <HomeNav />
         <BlogEntries />
         <Footer />
      </div>
    );
  }
}
