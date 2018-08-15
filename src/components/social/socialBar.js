import React, { Component } from "react";
import "./social.css";
import fbLogo from "../../brandStyles/images/logo01.png"
import instaLogo from "../../brandStyles/images/logo02.png"
import twLogo from "../../brandStyles/images/logo04.png"
export class SocialBar extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <div className="row social socialBar">
            <a href="https://www.facebook.com/piefacegirls/"><img src={fbLogo} alt="logo01"/></a>
            <a href="https://www.instagram.com/piefacegirls/"><img src={instaLogo} alt="logo02"/></a>
            <a href="https://twitter.com/piefacegirls?lang=en"><img src={twLogo} alt="logo04"/></a>
          </div>
        );
    }
}