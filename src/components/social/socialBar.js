import React, { Component } from "react";
import "./social.css";
import fbLogo from "../../brandStyles/images/socialIcons/fbPFG.png"
import instaLogo from "../../brandStyles/images/socialIcons/instaPFG.png"
import twLogo from "../../brandStyles/images/socialIcons/tweetPFG.png"
export class SocialBar extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <div className="row social socialBar">
            <a href="https://www.facebook.com/piefacegirls/"><img src={fbLogo} alt="logo01" className="socialIcons"/></a>
            <a href="https://www.instagram.com/piefacegirls/"><img src={instaLogo} alt="logo02" className="socialIcons"/></a>
            <a href="https://twitter.com/piefacegirls?lang=en"><img src={twLogo} alt="logo04" className="socialIcons"/></a>
          </div>
        );
    }
}