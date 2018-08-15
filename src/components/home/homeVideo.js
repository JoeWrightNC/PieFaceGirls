import React, { Component } from "react";
import "./home.css";
import homeVideo from "../../brandStyles/images/homeVideo.mp4"
import pieTitle from "../../brandStyles/images/pieTitle.png"

export class HomeVideo extends Component {
    state = {
    };

    componentWillMount() {

    }

    unMute() {
      let video=document.getElementById("HomePlayer");
      if(video.muted){
        video.muted = false;
      } else {
        video.muted = true;
      }
    }

    render() {
        return (
            <section className="intro full-width full-height jIntro">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="homeVidContainer">
                      <video id="HomePlayer" controls autoPlay muted loop>
                        <source src={homeVideo} type="video/mp4"/>
                      </video>
                      <button id="unmuteButton" className="btn square icon" onClick={this.unMute}>sound</button>
                      <img id="homeTitle" src={pieTitle} alt="homeTitle" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}