import React, { Component } from "react";
import "./home.css";
import homeVideo from "../../brandStyles/images/homeVideo.mp4"
import pieTitle from "../../brandStyles/images/pieTitle.png"

export class HomeVideo extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
            <section className="intro full-width full-height jIntro">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="homeVidContainer">
                      <video id="HomePlayer" controls autoPlay>
                        <source src={homeVideo} type="video/mp4"/>
                      </video>
                      <img id="homeTitle" src={pieTitle} alt="homeTitle" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}