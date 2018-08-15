import React, { Component } from "react";
import {HomeNav} from "../../components/home"
import {HomeVideo} from "../../components/home"
import {BioShort} from "../../components/bio"
import {SocialBar} from "../../components/social"
import {HomeDates} from "../../components/dates"
import "./homePage.css"

export default class Home extends Component {
  state = {

  };

  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-muziq" data-offset="80">
        <HomeVideo />
        <HomeNav />
        <div className="container-fluid homeCont">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <BioShort />
              <SocialBar />
            </div>
            <div className="col-xs-6 col-sm-6>">
              <HomeDates />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
