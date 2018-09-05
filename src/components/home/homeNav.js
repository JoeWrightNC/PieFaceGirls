import React, { Component } from "react";
import "./home.css";
import homeIcon from "../../brandStyles/images/navLogos/homeIcon.png"
import {HomeIcon} from "./homeIconJSFiles/homeIcon"
import {Trigger} from "./homeIconJSFiles/trigger"


export class HomeNav extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <nav className="navbar navbar-default tallNav">
      
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Desplegar navegación</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
      
            <div className="collapse navbar-collapse navbar-ex1-collapse tallNav2" id="navbar-muziq">
              <ul className="nav navbar-nav navHomeFlex">
                <li>
                  <a className="whiteNavBG" href="/">
                    <Trigger>
                      <HomeIcon><img src={homeIcon} alt="homeIcon" className="iconImages"/></HomeIcon>
                    </Trigger>
                  </a>
                </li>
                <li id="bioHomeNavIcon"><a className="whiteNavBG" href="/bio">BIO</a></li>
                <li id="musicHomeNavIcon"><a className="whiteNavBG" href="/music">MUSIC</a></li>
                <li id="photosHomeNavIcon"><a className="whiteNavBGMain" href="/photos">PHOTOS</a></li>
                <li id="videosHomeNavIcon"><a className="whiteNavBGMain" href="/videos">VIDEOS</a></li>                
                <li id="blogHomeNavIcon"><a className="whiteNavBG" href="/blog">BLOG</a></li>
                <li id="merchHomeNavIcon"><a className="whiteNavBG" href="/merch">MERCH</a></li>
                <li id="pressHomeNavIcon"><a className="whiteNavBG" href="/press">PRESS</a></li>
                <li id="epkHomeNavIcon"><a className="whiteNavBG" href="/epk">EPK</a></li>
                <li id="contactHomeNavIcon"><a className="whiteNavBG" href="/contact">CONTACT</a></li>
              </ul>
            </div>
      
          </nav>
        );
    }
}