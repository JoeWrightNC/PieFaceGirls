import React, { Component } from "react";
import "./home.css";



export class HomeVideo extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
            <section class="intro full-width full-height jIntro" id="anchor00">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="playerVideo" data-property="{videoURL:'MeyI1X-Pl9s',showControls:false,containment:'self',autoPlay:true, mute:false, startAt:0,opacity:1,ratio:'4/3', addRaster:true}">
                      <a href="#" class="play-video">Play/Pause</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}