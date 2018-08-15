import React, { Component } from "react";
import "./sitewide.css";



export class Nav extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <header id="jHeader" class="overflow-video">
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
                <ul className="nav navbar-nav navFlex">
                  <li id="homeNavIcon"><a className="whiteNavBGMain" href="/home">HOME</a></li>
                  <li id="bioNavIcon"><a className="whiteNavBGMain" href="/bio">BIO</a></li>
                  <li id="musicNavIcon"><a className="whiteNavBGMain" href="/music">MUSIC</a></li>
                  <li id="galleryNavIcon"><a className="whiteNavBGMain" href="/gallery">GALLERY</a></li>
                  <li id="blogNavIcon"><a className="whiteNavBGMain" href="/blog">BLOG</a></li>
                  <li id="merchNavIcon"><a className="whiteNavBGMain" href="/merch">MERCH</a></li>
                  <li id="pressNavIcon"><a className="whiteNavBGMain" href="/press">PRESS</a></li>
                  <li id="epkNavIcon"><a className="whiteNavBGMain" href="/epk">EPK</a></li>
                  <li id="contactNavIcon"><a className="whiteNavBGMain" href="/contact">CONTACT</a></li>
                </ul>
              </div>
            </nav>
        </header>
        );
    }
}